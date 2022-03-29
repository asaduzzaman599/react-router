import React, { useState } from 'react';
import Navlink from '../../Navlink/Navlink';
import { MenuAlt1Icon,XCircleIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navitems = [
        { id: 1, name: 'Home', link: '/' },
        { id: 1, name: 'Products', link: '/Products' },
        { id: 1, name: 'About', link: '/About' },
        { id: 1, name: 'Contact', link: '/Contact' },
    ]

    return (
        <nav className='container grid grid-cols-2 mx-auto py-4' >
            <div className='sm:hidden' onClick={()=>setIsOpen(!isOpen)}>
                {
                    isOpen? <XCircleIcon className="h-5 w-5 text-white  hover:text-blue-500" />:<MenuAlt1Icon className="h-5 w-5 text-white  hover:text-blue-500" />
                }

            </div>
            <h2 className='text-3xl mr-5 ml-auto sm:ml-0 sm:mr-auto font-semibold   text-red-200 '>Hello Buy</h2>

            <ul className={`sm:flex w-full bg-amber-900 align-center absolute  duration-1000  ease-in justify-center sm:flex-rowcolumn md:static ${isOpen? '   top-16 z-10 block':' top-[-150px]'}`}>
                {
                    navitems.map(item => <Navlink key={item.link} item={item}></Navlink>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;