import {useEffect, useState} from 'react';
export const useGetSingleRecipe = (id) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const getSingleRecipe = async () => {
        try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setRecipe(data?.meals[0]);
        } catch (error) {
        setError(true);
        }
        setLoading(false);
    };

    useEffect(() => {
        getSingleRecipe();
    },[id])

    return { recipe, loading, error };
}