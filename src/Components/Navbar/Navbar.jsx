// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { IoMenu } from "react-icons/io5";

// const Navbar = () => {
//   return (
//     <>
//     <div className="container">
//       <div>
//         <div className="logo mt-5">
//           <h1 className='text-2xl font-bold text-red-600 ms-5 mx-5'>EbTan</h1>
//         </div>
//           <ul className='flex justify-center items-center flex-wrap gap-5 mt-[-30px] ml-[850px]'>
//           <NavLink className=' text-[20px] font-bold text-black' to='/' >Home</NavLink>
//           <NavLink className=' text-[20px] font-bold text-black' to='About' >About</NavLink>
//           <NavLink className=' text-[20px] font-bold text-black' to='/Shop' >Shop</NavLink>
//           <NavLink className=' text-[20px] font-bold text-black' to='/Contact' >Contact</NavLink>
//           <IoMenu className=' text-[20px] font-bold text-[#D91656]'/>
//          </ul>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoMenu, IoClose } from "react-icons/io5"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container mx-auto p-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="logo">
            <h1 className="text-2xl font-bold text-red-600">EbTan</h1>
          </div>

          {/* Menu for larger screens */}
          <ul className="hidden md:flex justify-center items-center flex-wrap gap-5">
            <NavLink className="text-[20px] font-bold text-black" to="/">Home</NavLink>
            <NavLink className="text-[20px] font-bold text-black" to="/About">About</NavLink>
            <NavLink className="text-[20px] font-bold text-black" to="/Shop">Shop</NavLink>
            <NavLink className="text-[20px] font-bold text-black" to="/Contact">Contact</NavLink>
          </ul>

          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden">
            <IoMenu
              className="text-3xl text-[#D91656]"
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-5">
            <ul className="flex flex-col gap-4 items-center">
              <NavLink className="text-[20px] font-bold text-black" to="/" onClick={toggleMenu}>Home</NavLink>
              <NavLink className="text-[20px] font-bold text-black" to="/About" onClick={toggleMenu}>About</NavLink>
              <NavLink className="text-[20px] font-bold text-black" to="/Shop" onClick={toggleMenu}>Shop</NavLink>
              <NavLink className="text-[20px] font-bold text-black" to="/Contact" onClick={toggleMenu}>Contact</NavLink>
              <IoClose
                className="text-3xl text-[#D91656] mt-2"
                onClick={toggleMenu}
              />
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
