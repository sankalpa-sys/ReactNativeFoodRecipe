import {useEffect, useState} from "react";

export const useGetAllRecipe = (searchQuery = "") => {
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllRecipe = () => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`)
            .then(response => response.json())
            .then(data => {
                setRecipe(data.meals)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }

    useEffect(()=>{
        getAllRecipe()
    },[searchQuery])

    return {recipe, loading, error}
}