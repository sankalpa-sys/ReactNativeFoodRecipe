import {View, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from "react-native";
import {useState} from "react";
import {allCategories} from "../../data";

const CategoriesSlider = ({selectedCategory,setCategoryHandler}) => {
    const handleChangeActive = (category) => {
        if(category.strCategory === selectedCategory) return setCategoryHandler('')
        setCategoryHandler(category.strCategory)
    }

    const {container, textContainer, categoryText, textContainerInActive, categoryTextInactive, s_categoryContainer} = styles;
    return (
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={container}>
                {allCategories.map((category, index) => (
                    <TouchableOpacity key={index} onPress={()=>handleChangeActive(category)} style={category.strCategory === selectedCategory ? textContainer: textContainerInActive}>
                        <View style={s_categoryContainer}>
                            <Image style={styles.thumbnail} source={{uri: category.strCategoryThumb}}/>
                            <Text style={category.strCategory === selectedCategory ? categoryText: categoryTextInactive} key={index}>{category.strCategory}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    textContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#DCDCDC',
        borderRadius: 10,
        marginHorizontal: 5,
    },
    categoryText: {
        color: 'black',
        fontWeight: 400,
        fontSize: 12,
    },
    textContainerInActive: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginHorizontal: 5,
        backgroundColor: '#F5F5F5',
    },
    categoryTextInactive: {
        color: 'black',
        fontWeight: 400,
        fontSize: 12,
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 10,
        marginBottom: 5,
        objectFit: 'cover',
    },
    s_categoryContainer: {
        alignItems: 'center',
    }

})

export default CategoriesSlider;