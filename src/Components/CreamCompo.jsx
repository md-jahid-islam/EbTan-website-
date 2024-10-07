import React, { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoMdArrowDropdown } from "react-icons/io";

const CreamCompo = () => {
  // Initialize AOS with a 1-second duration
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="container mx-auto p-4">
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[150px]'>
        
        {/* Image Section with AOS Animation */}
        <img 
          data-aos="zoom-in" 
          className='w-[450px] md:w-[50%] h-auto rounded-sm hover:scale-105 transition-transform duration-300 mt-10' 
          src="/images/cream.png" 
          alt="Product"
        />

        {/* Text Section with AOS Animation */}
        <div className='text-center md:text-left' data-aos="fade-up">
          <h2 className='text-[#F2994A] font-bold text-xl md:text-2xl'>All skin types</h2>
          <h3 className='text-2xl md:text-4xl font-bold mt-10'>
            Men’s day <br />
            cream
          </h3>

          {/* How to Use Section */}
          <div className='mt-7 space-y-4'>
            {["How to use", "Ingredients", "Benefits"].map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-2">
                <span className='font-bold text-lg'>{item}</span>
                <IoMdArrowDropdown className='text-2xl text-gray-600' />
              </div>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button className='flex items-center justify-center gap-2 w-[211px] h-[54px] bg-[#E52525] text-white font-bold rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300 mt-7'>
            <span>Add to cart</span>
            <FaShoppingCart className='w-5 h-5' />
          </button>
          <p className='text-2xl font-bold ml-[250px] mt-[-40px] text-[#C51605]'>৳ 700</p>

        </div>
      </div>
    </div>
  );
}

export default CreamCompo;
