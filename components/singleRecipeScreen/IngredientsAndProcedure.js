import { View, Text, StyleSheet } from 'react-native';
import {SmallButtonComponent} from "../../reusable/SmallButtonComponent";
import {useState} from "react";
import Procedure from "./Procedure";
import Ingredients from "./Ingredients";
const IngredientsAndProcedure = ({recipe}) => {
    const procedures = recipe.strInstructions.split('.').filter((item) => item.trim() !== '');
    const {container, buttonsDiv, button} = styles;
    const [ detailsType, setDetailsType ] = useState("Ingredients")
    const changeDetailsType = (type) => {
        setDetailsType(type)
    }
    return (
        <View style={container}>
            <View style={buttonsDiv}>
                <View style={button}>
                    <SmallButtonComponent active={detailsType === "Ingredients"} onPress={()=>changeDetailsType("Ingredients")} title='Ingredients'/>
                </View>
                <View style={button}>
                    <SmallButtonComponent active={detailsType === "Procedure"} onPress={()=>changeDetailsType("Procedure")} title='Procedure'/>
                </View>
            </View>
            <View>
                {detailsType === "Ingredients" ? (
                    <Ingredients recipe={recipe}/>
                ): (
                    <Procedure procedures={procedures}/>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    buttonsDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '48%'
    }
});



export default IngredientsAndProcedure;