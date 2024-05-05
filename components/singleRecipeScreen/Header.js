import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {useNavigation} from "@react-navigation/native";

const Header = () => {
    const {container, backContainer} = styles;
    const navigation = useNavigation();
    return (
        <View style={container}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={backContainer}>
                <Icon size={16} style={{color: "white"}} name="arrow-back-outline" />
            </TouchableOpacity>
            <Icon size={20} style={{color: "gray"}} name="ellipsis-horizontal-outline" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    backContainer: {
        width: 30,
        height: 30,
        borderRadius: 25,
        backgroundColor: '#129575',
        justifyContent: 'center',
        alignItems: 'center'
    }
})


export default Header;