import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Food from '../Food/Food';

const Products = () => {
    const [searchText,setSearchText] = useState('');
    const [foods,setFoods] = useState([]);
    useEffect(()=>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
        .then(res=> res.json())
        .then(data=>{
            console.log(data.meals)
            setFoods(data.meals)
        })
    },[searchText]);
    return (
        <div className='mt-10'>
            <input className='w-2/4 py-2 px-10 border' type="text" placeholder='Food Name' onChange={(e)=>setSearchText(e.target.value)}/>
            <button className='px-4 py-2 bg-lime-500 hover:bg-amber-700 text-white font-bold '>Seach</button>
            <Outlet />
            <div className='grid md:grid-cols-3 mt-4 w-4/5 mx-auto gap-4'>
               {
                    foods && foods.map(food=> <Food key={food.idMeal} food={food}></ Food>)
               }
            </div>
        </div>
    );
};

export default Products;