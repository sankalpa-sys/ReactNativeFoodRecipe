import {View, Text, StyleSheet, TextInput} from "react-native";
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
        color: '#129575'
    },
    dontHaveAccount: {
        textAlign: 'center',
        marginTop: 20,
        color: 'black'
    },
    signup: {
        color: '#129575',
        fontWeight: 600
    }
})