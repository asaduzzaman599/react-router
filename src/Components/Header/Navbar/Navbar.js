import React from 'react';
import Navlink from '../../Navlink/Navlink';

const Navbar = () => {
    const navitems = [
        {id:1, name:'Home', link:'/'},
        {id:1, name:'Product', link:'/Product'},
        {id:1, name:'About', link:'/About'},
        {id:1, name:'Contact', link:'/Contact'},
    ]
    return (
        <nav className=''>
            <ul className='flex align-center'>
                {
                    navitems.map(item=> <Navlink key={item.link} item={item}></Navlink>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;