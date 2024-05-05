import {View, Text, StyleSheet, TextInput, Image} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {ButtonComponent} from "../reusable/ButtonComponent";
import {useState} from "react";

const LoginScreen = ({navigation}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (text, name) => {
        setFormData({...formData, [name]: text})
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.greetingText}>Hello!</Text>
            <Text style={styles.greetingSubText}>Welcome Back!</Text>

            <View>
                <TextInput onChangeText={(text)=>handleChange(text, "email")} autoCapitalize="none" autoCorrect={false} inputMode='email' keyboardType='email-address' placeholder="Email" style={styles.input} />
                <TextInput onChangeText={(text)=>handleChange(text, "password")} secureTextEntry={true} placeholder="Password" style={styles.input} />
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                <ButtonComponent onPress={()=>navigation.navigate("Home")} title='Sign In'/>
            </View>

            <Text style={styles.orSignInText}>Or sign in with</Text>
            <View style={styles.iconsContainer}>
                <View style={styles.iconContainer}>
                    <Image style={styles.icon} source={require('../assets/google.png')}/>
                </View>
                <View style={styles.iconContainer}>
                    <Image source={require('../assets/facebook.png')}/>
                </View>
            </View>

        <Text style={styles.dontHaveAccount}>Don't have an account? <Text style={styles.signup}>Sign up</Text></Text>
        </SafeAreaView>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    greetingText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    greetingSubText: {
        fontSize: 20,
        fontWeight: '400',
        marginTop: 10,
    },
    input: {
        borderWidth: 1.5,
        borderColor: '#D9D9D9',
        padding: 15,
        marginTop: 20,
        borderRadius: 10,
        userSelect: "none"
    },
    forgotPassword: {
        textAlign: 'right',
        marginTop: 10,
        color: '#FF9C00'
    },
    dontHaveAccount: {
        textAlign: 'center',
        marginTop: 20,
        color: 'black'
    },
    signup: {
        color: '#FF9C00',
        fontWeight: 600
    },
    orSignInText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#D9D9D9'
    },
    iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24,
    }
})