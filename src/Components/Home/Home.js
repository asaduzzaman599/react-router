import React from 'react';


const Home = () => {
    return (
        <div className='relative h-full h-[550px]'>
            <img src="/banner.jpg" alt="" className='w-full h-full' />
            <div className='absolute h-full bg-black w-full top-0 opacity-40'>
            
            </div>
            <div className='absolute h-full top-0 w-full flex items-center justify-center'>
            <h2 className='text-5xl font-bold text-white'>Hello Food</h2>
            </div>
        </div>
    );
};

export default Home;