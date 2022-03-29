import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navlink = ({item:{name,link}}) => {
    return (
        <li className='ml-10 text-red-300'>
            <CustomLink to={link}>{name}</CustomLink>
        </li>
            
        
    );
};

export default Navlink;