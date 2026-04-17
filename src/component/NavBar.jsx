import React from 'react';
import logoImg from '../assets/logo.png';
import { NavLink } from 'react-router';
import { FaGithubAlt } from 'react-icons/fa';

const NavBar = () => {
    return (
       <nav className=' shadow py-[8px]'>
        <div className='flex justify-between gap-4 items-center   container mx-auto'>
             <div className='flex items-center gap-2'>
                <img src={logoImg} alt="Logo"  className='w-[50px]'/>
                <h2 className='font-bold text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h2>
             </div>
        <ul  className='flex justify-between items-center gap-4'>
            <li><NavLink to={"/"} className={({isActive}) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Home</NavLink></li>
            <li><NavLink to={"/apps"} className={({isActive}) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Apps</NavLink></li>
            <li><NavLink to={"/install"} className={({isActive}) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Installation</NavLink></li>
           
        </ul>
        <button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'> <FaGithubAlt />Contribute</button>
        </div>
       </nav>
    );
};

export default NavBar;