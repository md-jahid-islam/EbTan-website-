import React, { useEffect } from 'react';
import { IoIosStar } from 'react-icons/io';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BttomCompo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS animation
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Title Section */}
      <div className='flex justify-center items-center'>
        <h2 className='text-2xl font-bold'>Why <span className='text-[#C51605]'>choose</span> us</h2>
      </div>

      {/* Subtitle Section */}
      <p className='flex justify-center items-center text-center mt-5'>
        Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's...
      </p>

      {/* Features Section */}
      <div className='flex justify-center items-center flex-wrap gap-[30px] mt-10'>
        {/* Feature Cards */}
        {[1, 2, 3].map((_, index) => (
          <div 
            key={index} 
            data-aos="zoom-in" 
            className='p-6 bg-gray-100 hover:bg-gray-200 rounded-lg shadow-md w-[300px] transition-all duration-300 hover:scale-105 text-center'
          >
            <IoIosStar className='bg-gray-500 w-10 h-10 rounded-full text-[#C51605] mx-auto' />
            <h2 className='text-2xl font-bold mt-5'>Allergy tested</h2>
            <p className='text-gray-400 mt-3'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BttomCompo;
