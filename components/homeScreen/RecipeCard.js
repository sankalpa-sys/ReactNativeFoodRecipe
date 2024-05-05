import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {useNavigation} from "@react-navigation/native";
import {getARandomRating} from "../../utils";

const RecipeCard = ({item}) => {
    const navigation = useNavigation();
    const {container, imageContainer, image, textContainer, text, overlay, ratingDiv, name, chef} = styles;
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('Recipe', {
            recipe: item
        })} style={container}>
                <View style={imageContainer}>
                    <Image source={{uri: item?.strMealThumb}} style={image}/>
                    <View style={overlay}>
                        <View style={ratingDiv}>
                            <Icon name='star' color='orange' size={14}/>
                            <Text style={text}>{getARandomRating()}.0</Text>
                        </View>
                            <View style={textContainer}>
                                <Text style={name}>{item?.strMeal}</Text>
                                <Text style={chef}>By John Cena</Text>
                            </View>
                    </View>
                </View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 150,
        position: 'relative',
        borderRadius: 10,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 10,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    textContainer: {
        position: 'absolute',
        bottom: 10,
        width: '100%',
        left: 10,
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        borderRadius: 10,
    },
    ratingDiv: {
        position: 'absolute',
        top: 10,
        right: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    text: {
        textAlign: 'center',
        color: 'white',
    },
    name: {
        color: 'white',
    },
    chef: {
        color: 'white',
        fontSize: 12,
        paddingTop: 5,
    }
})
export default RecipeCard;