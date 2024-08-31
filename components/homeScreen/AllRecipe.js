import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import RecipeCard from "./RecipeCard";
import LoadingSpinner from "../../reusable/LoadingSpinner";
import Error from "../../reusable/Error";
const AllRecipe = ({recipe, loading, error}) => {
    console.log("recipe", recipe)
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
    if(!recipe) return(
        <View style={styles.notFoundContainer}>
            <Image style={styles.image} source={require('../../assets/notFound.png')}/>
            <Text style={{
                flex: 1,
                textAlign: 'center',
                fontSize: 16,
                color: 'gray',
            }}>We could not find a matching recipe for your query</Text>
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
    notFoundContainer: {
        flex: 1,
        paddingVertical: 60,
        gap: 20,
    },
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginTop: 50,
    }
})


export default AllRecipe;