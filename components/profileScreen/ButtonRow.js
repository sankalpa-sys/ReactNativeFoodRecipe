import { View, Text, StyleSheet } from 'react-native';
import {SmallButtonComponent} from "../../reusable/SmallButtonComponent";
const ButtonRow = () => {
    const {container, btnDiv} = styles;
    return (
        <View style={container}>
           <View style={btnDiv}>
               <SmallButtonComponent title="Recipe" />
           </View>
            <View style={btnDiv}>
                <SmallButtonComponent active={false} title="Videos" />
            </View>
            <View style={btnDiv}>
                <SmallButtonComponent active={false} title="Tag" />
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