import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {getARandomUser} from "../../utils";
const HomeHeader = () => {
    const {greeting, greetContainer, greetingSub, profile} = styles;
    const navigation = useNavigation();
    return (
        <View style={greetContainer}>
            <View>
                <Text style={greeting}>Hello {getARandomUser().name}!</Text>
                <Text style={greetingSub}>What are you cooking today?</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
                <Image style={profile} source={{uri: "https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    greetContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    greetingSub: {
        fontSize: 11,
        fontWeight: '400',
        marginTop: 10,
        color:"#A9A9A9"
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 'auto',
        objectFit: "cover",
        backgroundColor: 'grey'
    }
})

export default HomeHeader;