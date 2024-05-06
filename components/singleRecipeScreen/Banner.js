
import {View, Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {getARandomRating, getARandomUser} from "../../utils";
import {useSavedRecipeContext} from "../../context/useSavedRecipe";

const Banner = ({recipe, showNames = false}) => {
    const {recipes, saveRecipe} = useSavedRecipeContext()
    const isSaved = recipes.find((item) => item.idMeal === recipe.idMeal)
    const handleSave = () => {
        saveRecipe(recipe)
    }
    const {overlay, ratingDiv, ratingText,timeText, timeContainer, saveIconDiv, bottomRightDiv, bottomLeftDiv, foodName, chefName, notSaved} = styles;
    return (
        <View>
            <Image source={{uri: recipe?.strMealThumb}} style={styles.image} />
            <View style={overlay}>
                <View style={ratingDiv}>
                    <Icon name='star' color='orange' size={14}/>
                    <Text style={ratingText}>{getARandomRating()}.0</Text>
                </View>
                <View style={bottomRightDiv}>
                    <View style={timeContainer}>
                        <Icon name='alarm-outline' color='#D9D9D9' size={17}/>
                        <Text style={timeText}>30 mins</Text>
                    </View>
                    <TouchableOpacity onPress={handleSave} style={isSaved? saveIconDiv: notSaved}>
                        <Icon name='bookmark-outline' color={isSaved ? "black": "white"} size={16}/>
                    </TouchableOpacity>
                </View>
                {showNames && (
                    <View style={bottomLeftDiv}>
                        <Text style={foodName}>{recipe?.strMeal}</Text>
                        <Text style={chefName}>By {getARandomUser().name}</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        objectFit: 'cover'
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: 150,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    ratingDiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor:"#FFE1B3",
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10,
        gap: 5
    },
    ratingText: {
        color: 'black',
        fontSize: 8
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 10
    },
    timeText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 11
    },
    saveIconDiv: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        marginLeft: 10
    },
    notSaved: {
        backgroundColor: 'transparent',
        padding: 5,
        borderRadius: 10,
        marginLeft: 10
    },
    bottomRightDiv: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
bottomLeftDiv: {
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    foodName: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        width: 200
    },
    chefName: {
        color: 'white',
        fontSize: 8
    }
})
export default Banner;