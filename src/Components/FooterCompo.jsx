
import React from 'react';
import { LuArrowUpRightFromCircle } from "react-icons/lu";
import { FaLocationArrow, FaFacebook } from "react-icons/fa";

const FooterCompo = () => {
  return (
    <div className='w-full h-[360px] bg-[#C51605]' data-aos="zoom-out-right">
      <div className="container py-14">
        {/* Logo Section */}
        <div className='flex justify-center items-center mb-6'>
          <h2 className='text-2xl font-bold text-[#fff]' data-aos="fade-up">EbTan Cosmetics</h2>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-wrap justify-center items-center gap-10 mb-6' data-aos="fade-up">
          <h2 className='text-xl md:text-2xl font-bold hover:underline text-[#fff]'>Home</h2>
          <h2 className='text-xl md:text-2xl font-bold hover:underline text-[#fff]'>About Us</h2>
          <h2 className='text-xl md:text-2xl font-bold hover:underline text-[#fff]'>Products</h2>
          <h2 className='text-xl md:text-2xl font-bold hover:underline text-[#fff]'>Contact</h2>
        </div>

        {/* Social Media Icons */}
        <div className='flex justify-center items-center flex-wrap gap-8 mb-6'>
          <LuArrowUpRightFromCircle className='text-3xl font-bold bg-[#fff] w-[40px] h-[40px] rounded-full text-[#C51605]' data-aos="zoom-in" />
          <FaLocationArrow className='text-3xl font-bold bg-[#fff] w-[40px] h-[40px] rounded-full text-[#C51605]' data-aos="zoom-in" />
          <FaFacebook className='text-3xl font-bold bg-[#fff] w-[40px] h-[40px] rounded-full text-[#C51605]' data-aos="zoom-in" />
        </div>

        {/* Copyright Section */}
        <div className='flex justify-center items-center' data-aos="fade-up">
            <h3 className=' text-2xl font-bold text-[#fff]'> © 2024 All Rights Reserved.</h3>
        </div>
      </div>
    </div>
  );
}

export default FooterCompo;
