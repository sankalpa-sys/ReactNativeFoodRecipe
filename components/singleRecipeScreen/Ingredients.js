
import { View, Text, StyleSheet } from 'react-native';
import IngredientCard from "./IngredientCard";
const Ingredients = ({recipe}) => {
    const createIngredientData = () => {
        const ingredients = [];
        let i = 1;

        // Iterate over the strIngredient properties until an empty value is found
        while (true) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;

            // Check if the ingredient exists
            if (recipe[ingredientKey] && recipe[ingredientKey].trim()) {
                const ingredient = recipe[ingredientKey];
                const measure = recipe[measureKey] ? recipe[measureKey] : '';

                ingredients.push({ ingredient, measure });
                i++; // Increment the counter for the next iteration
            } else {
                // If no more ingredients, break out of the loop
                break;
            }
        }

        return ingredients;
    };
    const ingredients = createIngredientData();
    console.log("ingredients", ingredients);
    const {container} = styles;
    return (
        <View style={container}>
            {ingredients.map((item, index)=>(
                <IngredientCard key={item.ingredient} item={item}/>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        gap: 10,
        marginVertical: 20,
    }
});



export default Ingredients;
