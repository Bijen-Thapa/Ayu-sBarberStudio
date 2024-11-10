import React from 'react'
import { NavLink, Link} from 'react-router-dom';

const NavBar = () => {
  return (
    <header className='w-full h-14 flex justify-between items-center absolute z-10'>
      <div className='w-12 h-12 flex justify-center items-center rounded-lg font-medium'>
        LOGO
      </div>
      <nav className='w-[350px]'>
        <ul className='hidden sm:flex h-full justify-around font-semibold'>
            <NavLink 
              to="/" 
              className={({ isActive }) => `rounded-3xl px-3 py-1 ${isActive ? 'bg-gray-300' : 'text-gray-700'}`}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => `rounded-3xl px-3 py-1 ${isActive ? 'bg-gray-300' : 'text-gray-700'}`}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({ isActive }) => `rounded-3xl px-3 py-1 ${isActive ? 'bg-gray-300' : 'text-gray-700'}`}
            >
              Services
            </NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar