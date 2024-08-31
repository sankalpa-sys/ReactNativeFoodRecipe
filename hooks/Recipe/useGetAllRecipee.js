import { useEffect, useState } from "react";

export const useGetAllRecipe = (searchQuery = "", category = "") => {
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchRecipes = () => {
        setLoading(true);
        setError(null);

        let url;
        if (category) {
            url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
        } else if (searchQuery) {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`;
        } else {
            url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
        }

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data?.meals || []);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchRecipes();
    }, [searchQuery, category]);

    return { recipe, loading, error };
};