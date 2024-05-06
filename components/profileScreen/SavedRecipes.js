import { View, Image, StyleSheet, Text } from 'react-native';
import {useSavedRecipeContext} from "../../context/useSavedRecipe";
import withTouchableOpacity from "../../hoc/withTouchableOpacity";
import Banner from "../singleRecipeScreen/Banner";
import {useNavigation} from "@react-navigation/native";
const SavedRecipes = () => {
    const {container, image} = styles;
    const {recipes} = useSavedRecipeContext()
    const BannerWithRoute = withTouchableOpacity(Banner);
    const navigation = useNavigation();
    if(recipes.length === 0) return (
        <View style={container}>
            <Image style={image} source={require('../../assets/notFound.png')}/>
            <Text style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 16,
                color: 'gray',
            }}>You haven't saved any recipes yet</Text>
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
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
    }
});



export default SavedRecipes;