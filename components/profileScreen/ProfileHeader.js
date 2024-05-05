import { View, Text, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
const ProfileHeader = () => {
    const {container, title} = styles;
    return (
        <View style={container}>
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