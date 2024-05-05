import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";
const ProfileHeader = () => {
    const {container, title} = styles;
    const navigation = useNavigation();
    return (
        <View style={container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Icon size={24} style={{color: "#000000"}} name="arrow-back-outline" />
            </TouchableOpacity>
            <Text style={title}>Profile</Text>
            <Icon size={24} style={{color: "#000000"}} name="ellipsis-horizontal-outline" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: "#121212",
        flex: 1,
        textAlign: 'center'
    }
});



export default ProfileHeader;