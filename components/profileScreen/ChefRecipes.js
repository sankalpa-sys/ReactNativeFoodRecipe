import { View, Text, StyleSheet } from 'react-native';
import {useGetAllRecipe} from "../../hooks/Recipe/useGetAllRecipee";
import LoadingSpinner from "../../reusable/LoadingSpinner";
import Error from "../../reusable/Error";
import Banner from "../singleRecipeScreen/Banner";
import withTouchableOpacity from "../../hoc/withTouchableOpacity";
import {useNavigation} from "@react-navigation/native";
const ChefRecipes = () => {
    const navigation = useNavigation();
    const {recipe, loading, error} = useGetAllRecipe();
    const {container} = styles;
    const BannerWithRoute = withTouchableOpacity(Banner);
    if(loading) return(
        <View style={{flex: 1, alignItems: "center", justifyContent: "center", paddingVertical: 50}}>
            <LoadingSpinner/>
        </View>
    )
    if(error) return(
        <View style={{flex: 1, marginTop: 30}}>
            <Error/>
        </View>
    )
    return (
        <View style={container}>
            {recipe.slice(5,15).map((item, index)=> (
                <BannerWithRoute onPress={()=>navigation.navigate("Recipe", {recipe: item})} showNames={true} key={index} recipe={item}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        gap: 20,
    }
});



export default ChefRecipes;