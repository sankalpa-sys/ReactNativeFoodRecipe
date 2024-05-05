import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {SmallButtonComponent} from "../../reusable/SmallButtonComponent";
const RecipeDetails = ({recipe}) => {
    const {container, titleContainer, titleText, reviewText, profileImage, mainDetailsContainer, leftContainer, nameAndAddressContainer,nameText,addressContainer,addressText } = styles;
    return (
        <View style={container}>
           <View style={titleContainer}>
               <Text style={titleText}>{recipe?.strMeal}</Text>
               <Text style={reviewText}>(13k reviews)</Text>
           </View>
            <View style={mainDetailsContainer}>
                <View style={leftContainer}>
                    <Image style={profileImage} source={{uri: "https://images.pexels.com/photos/5372800/pexels-photo-5372800.jpeg?auto=compress&cs=tinysrgb&w=800"}}/>
                    <View style={nameAndAddressContainer}>
                        <Text style={nameText}>By Sankalpa</Text>
                        <View style={addressContainer}>
                            <Icon name='location' color='#129575' size={14}/>
                            <Text style={addressText}>Kathmandu, Nepal</Text>
                        </View>
                    </View>
                </View>
                    <SmallButtonComponent title='Follow'/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10,
    },
    titleText: {
        fontSize: 14,
        fontWeight: '600',
        width: '70%',
    },
    reviewText: {
        color: '#A9A9A9',
        fontSize: 14,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25,
    },
    mainDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        paddingVertical: 10,
    },
    leftContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    nameAndAddressContainer: {
        flexDirection: 'column',
        gap: 5,
    },
    nameText: {
        fontSize: 14,
        fontWeight: '600',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    addressText: {
        fontSize: 11,
        color: '#A9A9A9',
    },
});

export default RecipeDetails;