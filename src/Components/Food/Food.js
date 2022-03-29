import React from 'react';

const Food = ({food:{strMeal,strCategory,strMealThumb}}) => {
    return (
        <div className='w-full p-3 shadow rounded hover:shadow-lg'>
            <img src={strMealThumb} className="h-72 w-full rounded  hover:shadow-lg" alt="" />
            <h2 className='text-2xl font-bold'>{strMeal}</h2>
            <h4 className='text-xl'>{strCategory}</h4>
        </div>
    );
};

export default Food;