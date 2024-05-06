import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {SmallButtonComponent} from "../../reusable/SmallButtonComponent";
import {getARandomAddress, getARandomUser} from "../../utils";
import {useNavigation} from "@react-navigation/native";
const RecipeDetails = ({recipe}) => {
    const {container, titleContainer, titleText, reviewText, profileImage, mainDetailsContainer, leftContainer, nameAndAddressContainer,nameText,addressContainer,addressText } = styles;
    const navigation = useNavigation();
    return (
        <View style={container}>
           <View style={titleContainer}>
               <Text style={titleText}>{recipe?.strMeal}</Text>
               <Text style={reviewText}>(13k reviews)</Text>
           </View>
            <View style={mainDetailsContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate("Profile")} style={leftContainer}>
                    <Image style={profileImage} source={{uri: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
                    <View style={nameAndAddressContainer}>
                        <Text style={nameText}>By {getARandomUser().name}</Text>
                        <View style={addressContainer}>
                            <Icon name='location' color='#129575' size={14}/>
                            <Text style={addressText}>{getARandomAddress()?.city}, USA</Text>
                        </View>
                    </View>
                </TouchableOpacity>
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
        paddingLeft: 2,
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