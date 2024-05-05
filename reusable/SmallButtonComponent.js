import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export const SmallButtonComponent = ({title, onPress, active= true}) => {
    const {button, buttonText, buttonInactive, buttonTextInactive} = styles;
    return (
        <TouchableOpacity onPress={onPress} style={active ? button: buttonInactive}>
            <Text style={active ? buttonText: buttonTextInactive}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#129575',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 11,
        textAlign: 'center',
        fontWeight: "bold",
    },
    buttonInactive: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    buttonTextInactive: {
        color: '#129575',
        fontSize: 11,
        textAlign: 'center',
        fontWeight: "bold",
    }
})
