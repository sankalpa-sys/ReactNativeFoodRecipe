import { createContext, useContext, useState } from "react";

export const SavedRecipeContext = createContext({
    savedRecipes: [],
    saveRecipe: (recipe) => {},
});

export const useSavedRecipeContext = () => {
    const value = useContext(SavedRecipeContext);
    if (value === undefined) {
        throw new Error(
            "useSavedRecipeContext must be used within a SavedRecipeProvider"
        );
    }
    return { recipes: value.savedRecipes, saveRecipe: value.saveRecipe};
};