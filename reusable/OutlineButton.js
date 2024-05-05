import {View, Text, TouchableOpacity, StyleSheet} from "react-native";

export const OutlineButton = ({title, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    buttonText: {
        color: '#129575',
        fontSize: 11,
        textAlign: 'center',
        fontWeight: 600,
    }
})
