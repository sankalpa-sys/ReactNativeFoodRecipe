import {StyleSheet} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from "@react-navigation/native";
const LandingScreen = () => {
    const navigation = useNavigation();
    return (
        <Onboarding
            onSkip={() => navigation.navigate('Home')}
            onDone={() => {navigation.navigate('Home')}}
            pages={[
                {
                    backgroundColor: "#fff",
                    image:  <LottieView style={styles.image} source={require('../assets/animations/landingImage1.json')} autoPlay loop />,
                    title: 'Culinary Delights',
                    subtitle: 'Transform ordinary ingredients into extraordinary meals',
                },
                {
                    backgroundColor: "#fff",
                    image:  <LottieView style={styles.image} source={require('../assets/animations/greenAnimation1.json')} autoPlay loop />,
                    title: 'Kitchen Artistry',
                    subtitle: 'Discover mouthwatering recipes from around the world',
                },
                {
                    backgroundColor: "#fff",
                    image:  <LottieView style={styles.image} source={require('../assets/animations/greenAnimation2.json')} autoPlay loop />,
                    title: 'Flavor Odyssey',
                    subtitle: 'Transform ordinary ingredients into extraordinary meals',
                },
            ]}
        />
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
        borderRadius: 100,
    }
})

export default LandingScreen