

import React, { useEffect } from 'react';
import { SiProtondrive } from "react-icons/si";
import { FaShoppingCart } from "react-icons/fa";
import { BsHandbagFill, BsFillEmojiGrimaceFill } from "react-icons/bs";
import AOS from 'aos';
import CountUp from 'react-countup'; // For counter up effect
import 'aos/dist/aos.css';

const AllSkinseCompo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <>
      <div className="w-full h-[600px] bg-[#ECEBE6] mt-6">
        <div className="container pt-[100px]">
          <h2 className='text-[#F2994A] font-bold text-2xl' data-aos="fade-up">All skin types</h2>  
          
          <div className='flex gap-16 mt-5'>
            {/* Products Count */}
            <div className='flex' data-aos="zoom-in">
              <SiProtondrive className='text-[#F2994A] mt-5' />
              <span className='font-bold text-2xl mt-3 ml-3'>
                <CountUp end={48} duration={2} /> {/* CountUp for products */}
              </span>
              <p className='text-[#A0A79A] absolute mt-12'>Products</p>
            </div>

            {/* Products Sold */}
            <div className='flex' data-aos="zoom-in">
              <BsHandbagFill className='text-[#F2994A] mt-5' />
              <span className='font-bold text-2xl mt-3 ml-3'>
                <CountUp end={200} duration={2} />+ {/* CountUp for sold items */}
              </span>
              <p className='text-[#A0A79A] absolute mt-12 w-[200px]'>Product solds</p>
            </div>

            {/* Review Count */}
            <div className='flex' data-aos="zoom-in">
              <BsFillEmojiGrimaceFill className='text-[#F2994A] mt-5' />
              <span className='font-bold text-2xl mt-3 ml-3'>
                <CountUp end={99} duration={2} />+ {/* CountUp for reviews */}
              </span>
              <p className='text-[#A0A79A] absolute mt-12'>Review</p>
            </div>
          </div>

          <div className='mt-7' data-aos="fade-up">
            <h2 className='text-[#C51605] text-2xl font-bold'>Men’s Hand Wash</h2>
            <button className='flex items-center justify-center gap-2 w-[211px] h-[54px] bg-[#E52525] text-white font-bold rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300 mt-5'>
              <span>Add to cart</span>
              <FaShoppingCart className='w-5 h-5' />
            </button>
            <p className='text-2xl font-bold ml-[250px] mt-[-40px] text-[#C51605]'>৳ 700</p>
          </div>

          <div className='flex justify-center items-center mt-[-280px]'>
            <img className='w-[450px] h-auto ml-[500px]' src="/images/handwash.png" alt="Hand Wash" data-aos="zoom-in" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AllSkinseCompo;
