import {View, Text, ImageBackground, Image, StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ButtonComponent} from "../reusable/ButtonComponent";


const LandingScreen = ({navigation}) => {
    return (
        <ImageBackground
            source={require("../assets/splash.jpeg")}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.overlay}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                        />
                    <Text style={styles.logoText}>100K+ Premium Recipe</Text>
                </View>
                <View style={styles.bottomHalf}>
                    <View style={styles.textContainer}>
                        <Text style={styles.heading}>Get</Text>
                        <Text style={styles.heading}>Cooking</Text>
                        <Text style={styles.smallText}>Simple way to find tasty recipe</Text>
                    </View>
                    <ButtonComponent onPress={()=>navigation.navigate("Login")} title='Start Cooking'/>
                </View>
            </SafeAreaView>
        </ImageBackground>
  );
}

const styles = StyleSheet.create({

    backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center",
    },
    overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black overlay
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingVertical: 100
    },
    logoContainer: {
            alignItems: 'center',
    },
    logo: {
             width: 79,
            height: 79,
    },
    logoText: {
            color: 'white',
            fontSize: 18,
            fontWeight: 600,
            marginTop: 10,
    },
    bottomHalf : {

    },
    textContainer: {

    },
    heading: {
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginBottom: 10,
            textAlign: 'center'
    },
    smallText: {
            color: 'white',
            fontSize: 16,
            textAlign: 'center',
            fontWeight: 400,
        marginTop: 20
    }

})

export default LandingScreen;