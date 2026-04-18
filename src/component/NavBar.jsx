import React from 'react';
import logoImg from '../assets/logo.png';
import { NavLink } from 'react-router';
import { FaGithubAlt } from 'react-icons/fa';

const NavBar = () => {
    return (
        <nav className=' shadow py-[8px]'>
            <div className='flex justify-between gap-4 items-center   container mx-auto'>
                <div className='flex items-center gap-2'>
                    <img src={logoImg} alt="Logo" className='w-[50px]' />
                    <h2 className='font-bold text-xl bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h2>
                </div>
                <ul className='md:flex hidden justify-between items-center gap-4'>
                    <li><NavLink to={"/"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Home</NavLink></li>
                    <li><NavLink to={"/apps"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Apps</NavLink></li>
                    <li><NavLink to={"/install"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Installation</NavLink></li>
                    <li><NavLink to={"/dashboard"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Dashboard</NavLink></li>

                </ul>
                <button className='btn bg-linear-to-r hidden md:flex from-[#632EE3] to-[#9F62F2] text-white'> <FaGithubAlt />Contribute</button>
                <div className="dropdown md:hidden block dropdown-left">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-50 p-2 shadow">
                        <li><NavLink to={"/"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Home</NavLink></li>
                        <li><NavLink to={"/apps"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Apps</NavLink></li>
                        <li><NavLink to={"/install"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Installation</NavLink></li>
                        <li><NavLink to={"/dashboard"} className={({ isActive }) => `font-semibold ${isActive ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}>Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;