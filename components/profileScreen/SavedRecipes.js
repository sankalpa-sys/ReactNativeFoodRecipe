import { View, Text, StyleSheet } from 'react-native';
import {useSavedRecipeContext} from "../../context/useSavedRecipe";
import withTouchableOpacity from "../../hoc/withTouchableOpacity";
import Banner from "../singleRecipeScreen/Banner";
import {useNavigation} from "@react-navigation/native";
const SavedRecipes = () => {
    const {container} = styles;
    const {recipes} = useSavedRecipeContext()
    const BannerWithRoute = withTouchableOpacity(Banner);
    const navigation = useNavigation();
    if(recipes.length === 0) return (
        <View style={container}>
            <Text>No saved recipes</Text>
        </View>

    )
    return (
        <View style={container}>
            {recipes.map((item, index)=> (
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



export default SavedRecipes;