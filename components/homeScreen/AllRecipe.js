import {View, StyleSheet, FlatList} from 'react-native';
import {useGetAllRecipe} from "../../hooks/Recipe/useGetAllRecipee";
import RecipeCard from "./RecipeCard";
import LoadingSpinner from "../../reusable/LoadingSpinner";
import Error from "../../reusable/Error";
const AllRecipe = () => {
    const {recipe, loading, error} = useGetAllRecipe();
    if(loading) return(
       <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
           <LoadingSpinner/>
       </View>
    )
    if(error) return(
        <View style={{flex: 1, marginTop: 30}}>
            <Error/>
        </View>
    )
    return(
        <View style={styles.container}>
            <FlatList
                data={recipe}
                renderItem={({ item }) => <RecipeCard item={item} />}
                keyExtractor={(item) => item?.idMeal}
                numColumns={2}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        gap: 10,
        flex: 1,
    },
    columnWrapper: {
        justifyContent: 'space-between',
        marginBottom: 16,
    },
})


export default AllRecipe;