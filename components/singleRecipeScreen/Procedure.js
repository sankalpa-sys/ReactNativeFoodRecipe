import { View, Text, StyleSheet } from 'react-native';
import ProcedureCard from "./ProcedureCard";
const Procedure = ({procedures}) => {
    const {container} = styles;
    return (
        <View style={container}>
            {procedures.map((procedure, index) => (
                    <ProcedureCard key={index} index={index} procedure={procedure}/>
                )
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 20,
        marginVertical: 20,
    }
});



export default Procedure;