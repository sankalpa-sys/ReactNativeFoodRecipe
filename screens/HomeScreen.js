import {StyleSheet} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import HomeHeader from "../components/homeScreen/HomeHeader";
import HomeSearch from "../components/homeScreen/HomeSearch";
import CategoriesSlider from "../components/homeScreen/CategoriesSlider";
import AllRecipe from "../components/homeScreen/AllRecipe";
import {useGetAllRecipe} from "../hooks/Recipe/useGetAllRecipee";
import {useState} from "react";
import useDebounce from "../hooks/useDebounce/useBounce";

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const debouncedSearchTerm = useDebounce(searchQuery);
    const {recipe, loading, error} = useGetAllRecipe(debouncedSearchTerm);
    const {container} = styles;

    const search = (query) => {
        setSearchQuery(query)
    }
    return (
        <SafeAreaView style={container}>
           <HomeHeader/>
            <HomeSearch search={search} seachQuery={searchQuery}/>
            <CategoriesSlider/>
            <AllRecipe recipe={recipe} loading={loading} error={error}/>
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