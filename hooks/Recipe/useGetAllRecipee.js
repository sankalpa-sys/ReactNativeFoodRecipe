import {useEffect, useState} from "react";

export const useGetAllRecipe = () => {
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getAllRecipe = () => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
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
    },[])

    return {recipe, loading, error}
}