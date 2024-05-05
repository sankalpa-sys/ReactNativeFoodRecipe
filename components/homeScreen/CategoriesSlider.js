import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from "react-native";
import {useState} from "react";

const allCategories = [
    {name: 'All', isActive: true},
    {name: 'Breakfast', isActive: false},
    {name: 'Lunch', isActive: false},
    {name: 'Dinner', isActive: false},
    {name: 'Snacks', isActive: false},
    {name: 'Drinks', isActive: false},
    {name: 'Desserts', isActive: false},
]

const CategoriesSlider = () => {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const handleChangeActive = (category) => {
        setSelectedCategory(category.name)
    }

    const {container, textContainer, categoryText, textContainerInActive, categoryTextInactive} = styles;
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={container}>
                {allCategories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={()=>handleChangeActive(category)} style={category.name === selectedCategory ? textContainer: textContainerInActive}>
                        <Text style={category.name === selectedCategory ? categoryText: categoryTextInactive} key={index}>{category.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#129575',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    categoryText: {
        color: 'white',
        fontWeight: 'bold',
    },
    textContainerInActive: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#F5F5F5',
    },
    categoryTextInactive: {
        color: '#129575',
        fontWeight: 'bold',
    }

})

export default CategoriesSlider;