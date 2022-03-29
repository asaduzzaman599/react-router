import React from 'react';
import { Link } from 
'react-router-dom';
import { useNavigate } from "react-router-dom";


const Food = ({food:{strMeal,strCategory,strMealThumb,idMeal}}) => {
    let navigate = useNavigate();

    const showDetail = ()=>{
        navigate(`/products/${idMeal}`)
    }
    return (
        <div className='w-full p-3 shadow rounded hover:shadow-lg'>
            <img src={strMealThumb} className="h-72 w-full rounded  hover:shadow-lg" alt="" />
            <h2 className='text-2xl font-bold'>{strMeal}</h2>
            <h4 className='text-xl'>{strCategory}</h4>
            <div className='m-8 flex justify-center gap-4'>
                <Link to={`/Product/${idMeal}`} className="py-4 px-6 bg-yellow-600 rounded text-white hover:text-yellow-200 font-bold">Details</Link>
                <button  onClick={showDetail} className="py-4 px-6 bg-lime-600 rounded text-white hover:text-yellow-200 font-bold">Details Here</button>
            </div>
        </div>
    );
};

export default Food;