import { View, Text, StyleSheet } from 'react-native';
const ProcedureCard = ({procedure, index}) => {
    const {container,procedureText, stepText} = styles;
    return (
        <View style={container}>
            <Text style={stepText}>Step {index + 1}</Text>
            <Text  style={procedureText}>{procedure}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: "#D9D9D9",
        gap: 5,
        borderRadius: 10
    },
    procedureText: {
        fontSize: 11,
        fontWeight: '400',
        color: "#A9A9A9"
    },
    stepText: {
        fontSize: 11,
        fontWeight: '600',
    }
});



export default ProcedureCard;