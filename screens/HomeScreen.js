import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "../components/homeScreen/HomeHeader";
import HomeSearch from "../components/homeScreen/HomeSearch";
import CategoriesSlider from "../components/homeScreen/CategoriesSlider";
import AllRecipe from "../components/homeScreen/AllRecipe";

const HomeScreen = () => {
    const {container} = styles;
    return (
        <SafeAreaView style={container}>
           <HomeHeader/>
            <HomeSearch/>
            <CategoriesSlider/>
            <AllRecipe/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
})

export default HomeScreen;