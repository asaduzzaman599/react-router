import React from 'react';
import Navbar from './Navbar/Navbar';

const Header = () => {
    
    return (
        <header className='bg-amber-900 h-16 flex items-center justify-between py-4 px-8'>
            <h2 className='text-3xl font-semibold flex  text-red-200 '>Hello Buy</h2>
            
            <Navbar></Navbar>

        </header>
    );
};

export default Header;