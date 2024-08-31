
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, useNavigation, useNavigationState, useRoute} from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LandingScreen from "./screens/LandingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SingleRecipeDetailsScreen from "./screens/SingleRecipeDetailsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import {SavedRecipeContext} from "./context/useSavedRecipe";
import {useState} from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BasketScreen from "./screens/BasketScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const bottomTabItems = [
    {
        name: "Home",
        component: HomeScreen,
        iconName: "home"
    },
    {
        name: "Profile",
        component: ProfileScreen,
        iconName: "user"
    },
    {
        name: "Basket",
        component: BasketScreen,
        iconName: "shopping-cart"
    },
]

function Home () {
    return(
        <Tab.Navigator
            activeColor="#129575"
            inactiveColor='black'
            screenOptions={{
                headerShown: false
            }}
        >
            {bottomTabItems.map((item)=> (
                <Tab.Screen options={{
                    tabBarIcon: ({color}) => (
                        <Icon color={color} style={styles.active_icon} name={item?.iconName} />
                    ),
                    tabBarActiveTintColor: "#129575",
                }} name={item?.name} component={item.component} />
            ))}
        </Tab.Navigator>
    )
}
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
  return (
      <View style={styles.container}>
          <SavedRecipeContext.Provider value={{ savedRecipes, saveRecipe }}>
              <NavigationContainer>
                  <Stack.Navigator>
                      <Stack.Screen options={{headerShown: false}} name="Landing" component={LandingScreen} />
                      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
                      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
                      <Stack.Screen options={{headerShown: false}} name="Recipe" component={SingleRecipeDetailsScreen} />
                      <Stack.Screen options={{headerShown: false}} name="Profile" component={ProfileScreen} />
                  </Stack.Navigator>
              </NavigationContainer>
          </SavedRecipeContext.Provider>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    active_icon: {
        fontSize: 20,
    },
    inactive_icon: {
        fontSize: 20,
        color: "black"
    }
});
