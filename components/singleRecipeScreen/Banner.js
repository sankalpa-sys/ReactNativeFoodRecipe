
import {View, Text, Image, StyleSheet} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {getARandomRating} from "../../utils";

const Banner = ({recipe}) => {
    const {overlay, ratingDiv, text, ratingText,timeText, timeContainer, saveIconDiv, bottomRightDiv} = styles;
    return (
        <View>
            <Image source={{uri: recipe?.strMealThumb}} style={styles.image} />
            <View style={styles.overlay}>
                <View style={ratingDiv}>
                    <Icon name='star' color='orange' size={14}/>
                    <Text style={ratingText}>{getARandomRating()}.0</Text>
                </View>
                <View style={bottomRightDiv}>
                    <View style={timeContainer}>
                        <Icon name='alarm-outline' color='#D9D9D9' size={17}/>
                        <Text style={timeText}>30 mins</Text>
                    </View>
                    <View style={saveIconDiv}>
                        <Icon name='bookmark-outline' color='black' size={16}/>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10,
    },
    overlay: {
        position: 'absolute',
        width: '100%',
        height: 200,
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
    bottomRightDiv: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10
    }
})
export default Banner;