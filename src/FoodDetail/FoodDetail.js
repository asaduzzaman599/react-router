import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FoodDetail = () => {
    const {foodId} = useParams();
    const [food,setFood] = useState({})

    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`;
        fetch(url)
        .then(res=> res.json())
        .then(data=>setFood(data.meals[0]))
    },[foodId]);

    return (
        <div className='w-full p-3 shadow rounded hover:shadow-lg w-2/4 mx-auto'>
            <img src={food.strMealThumb} className="h-72 w-full rounded  hover:shadow-lg" alt="" />
            <h2 className='text-2xl font-bold'>{food.strMeal}</h2>
            <h4 className='text-xl'>{food.strCategory}</h4>
            
        </div>
    );
};

export default FoodDetail;