import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navlink = ({item:{name,link}}) => {
    return (
        <li className='m-0 sm:ml-10 py-2 text-red-300'>
            <CustomLink to={link}>{name}</CustomLink>
        </li>
            
        
    );
};

export default Navlink;