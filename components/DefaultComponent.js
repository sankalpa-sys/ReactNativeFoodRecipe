import { View, Text, StyleSheet } from 'react-native';
const DefaultComponent = () => {
    const {container} = styles;
    return (
        <View style={container}>
            <Text>Default</Text>
        </View>
    )
}

const styles = StyleSheet.create({});



export default DefaultComponent;