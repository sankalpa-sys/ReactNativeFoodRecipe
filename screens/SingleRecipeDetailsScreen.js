import {StyleSheet, View, ScrollView} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import Header from "../components/singleRecipeScreen/Header";
import Banner from "../components/singleRecipeScreen/Banner";
import {useGetSingleRecipe} from "../hooks/Recipe/useGetSingleRecipe";
import LoadingSpinner from "../reusable/LoadingSpinner";
import Error from "../reusable/Error";
import RecipeDetails from "../components/singleRecipeScreen/RecipeDetails";
import IngredientsAndProcedure from "../components/singleRecipeScreen/IngredientsAndProcedure";
const SingleRecipeDetailsScreen = ({route}) => {
    const params = route.params?.recipe;
    const { recipe, loading, error } = useGetSingleRecipe(params?.idMeal)
    const {container} = styles;
    if(loading) return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <LoadingSpinner/>
        </View>
    )
    if(error) return(
        <View style={{flex: 1, marginTop: 30}}>
            <Error/>
        </View>
    )
    return (
        <SafeAreaView style={container}>
           <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
               <Header/>
               <Banner recipe={recipe}/>
               <RecipeDetails recipe={recipe}/>
               <IngredientsAndProcedure recipe={recipe}/>
           </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    backContainer: {
        width: 40,
        height: 40,
        borderRadius: 25,
        backgroundColor: '#129575',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SingleRecipeDetailsScreen;