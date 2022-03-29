import React from 'react';
import Navlink from '../../Navlink/Navlink';

const Navbar = () => {
    const navitems = [
        {id:1, name:'Home', link:'/'},
        {id:1, name:'Products', link:'/Products'},
        {id:1, name:'About', link:'/About'},
        {id:1, name:'Contact', link:'/Contact'},
    ]
    return (
        <nav className='container flex items-center justify-between mx-auto'>
            
            <h2 className='text-3xl font-semibold flex  text-red-200 '>Hello Buy</h2>
            <ul className='flex align-center'>
                {
                    navitems.map(item=> <Navlink key={item.link} item={item}></Navlink>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;