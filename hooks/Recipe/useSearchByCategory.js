import {useEffect, useState} from "react";

export const useSearchByCategory = () => {
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const searchByCategory = (category) => {
        fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            .then(response => response.json())
            .then(data => {
                setRecipe(data?.meals)
                setLoading(false)
            })
            .catch(error => {
                setError(error)
                setLoading(false)
            })
    }
    return {recipe, loading, error, searchByCategory}
}