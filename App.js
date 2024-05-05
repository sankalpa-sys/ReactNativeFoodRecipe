
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SingleRecipeDetailsScreen from "./screens/SingleRecipeDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {SavedRecipeContext} from "./context/useSavedRecipe";
import {useState} from "react";

const Stack = createNativeStackNavigator();

export default function App() {
    const [savedRecipes, setSavedRecipes] = useState([])
    const saveRecipe = (recipe) => {
        const existingRecipe = savedRecipes.find(
            (item) => item.idMeal === recipe.idMeal
        );

        if (existingRecipe) {
            // Remove the existing recipe
            setSavedRecipes(savedRecipes.filter((item) => item.idMeal !== recipe.idMeal));
        } else {
            // Add the new recipe if it doesn't exist
            setSavedRecipes([...savedRecipes, recipe]);
        }
    };
    console.log("savedRecipes", savedRecipes)
  return (
      <SavedRecipeContext.Provider value={{ savedRecipes, saveRecipe }}>
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen options={{headerShown: false}} name="Landing" component={LandingScreen} />
                  <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
                  <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                  <Stack.Screen options={{headerShown: false}} name="Recipe" component={SingleRecipeDetailsScreen} />
                  <Stack.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      </SavedRecipeContext.Provider>
  );
}

const styles = StyleSheet.create({
});
