

import React from 'react';

const SubscribeCompo = () => {
  return (
    <div
      className='w-full h-auto bg-[#ECEBE6] mt-10'
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="container py-14 flex flex-col md:flex-row justify-center items-center gap-10 px-4">
        {/* Heading */}
        <h2 className='text-3xl font-bold text-[#333333] text-center md:text-left'>
          Subscribe to the <br />
          daily <span className='text-[#C51605]'>updates</span>
        </h2>

        {/* Input and Button Section */}
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          {/* Email Input */}
          <input
            className='w-full md:w-[400px] lg:w-[700px] h-[52px] md:h-[92px] rounded-full p-4 border-2 border-[#C51605] outline-none text-[17px]'
            type="email"
            placeholder='Enter your email address'
          />

          {/* Subscribe Button */}
          <button className='w-[198px] h-[52px] md:h-[92px] bg-[#C51605] text-white font-bold rounded-full border-2 border-transparent hover:border-white hover:bg-[#a31205] transition duration-300'>
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeCompo;
