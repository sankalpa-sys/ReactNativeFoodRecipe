import { View, Text, StyleSheet } from 'react-native';
import {SmallButtonComponent} from "../../reusable/SmallButtonComponent";
const ButtonRow = ({recipeType, handleRecipeType}) => {
    const {container, btnDiv} = styles;
    return (
        <View style={container}>
           <View style={btnDiv}>
               <SmallButtonComponent active={recipeType === "Owned"} onPress={()=>handleRecipeType("Owned")} title="Owned" />
           </View>
            <View style={btnDiv}>
                <SmallButtonComponent active={recipeType === "Saved"} onPress={()=>handleRecipeType("Saved")} title="Saved" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        gap: 10
    },
    btnDiv: {
        flex: 1
    }
});



export default ButtonRow;