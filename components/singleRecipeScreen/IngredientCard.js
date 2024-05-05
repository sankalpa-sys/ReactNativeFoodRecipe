import { View, Text, StyleSheet, Image } from 'react-native';
const IngredientCard = ({item}) => {
    const {container,leftContainer, imageContainer, image, name, measure} = styles;
    return (
        <View style={container}>
            <View style={leftContainer}>
                <View style={imageContainer}>
                    <Image source={require("../../assets/tomato.png")} style={image}/>
                </View>
                <Text style={name}>
                    {item?.ingredient}
                </Text>
            </View>
            <Text style={measure}>{item?.measure}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        backgroundColor: "#D9D9D9",
        gap: 5,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        width: 52,
        height: 52,
        borderRadius: 10,
        overflow: 'hidden',
        marginRight: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 40,
        height: 40,
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        color: "#121212"
    },
    measure: {
        fontSize: 14,
        fontWeight: '400',
        color: "#A9A9A9"
    },

});



export default IngredientCard;