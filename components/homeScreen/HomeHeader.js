import {Image, StyleSheet, Text, View} from 'react-native';
const HomeHeader = () => {
    const {greeting, greetContainer, greetingSub, profile} = styles;
    return (
        <View style={greetContainer}>
            <View>
                <Text style={greeting}>Hello Sankalpa</Text>
                <Text style={greetingSub}>What are you cooking today?</Text>
            </View>
            <Image style={profile} source={{uri: "https://images.pexels.com/photos/5372800/pexels-photo-5372800.jpeg?auto=compress&cs=tinysrgb&w=800"}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    greetContainer: {
        flexDirection: 'row',
    },
    greeting: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    greetingSub: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 10,
        color:"#A9A9A9"
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 25,
        marginLeft: 'auto',
        objectFit: "contain",
        backgroundColor: 'grey'
    }
})

export default HomeHeader;