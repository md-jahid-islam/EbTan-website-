// import React from 'react'
// import { IoStar } from "react-icons/io5";

// const ReviewCompo = () => {
//   return (
//     <>
//     <div className="container">
//         <div>
//             <h2 className=' text-2xl font-bold text-[#C51605] flex justify-center items-center mt-[100px]'> Review</h2>
//             <p className=' text-[#A0A79A] flex justify-center items-center mt-5'> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's</p>
//         </div>
//         <div className=' flex gap-5 mt-[70px] ml-[320px]'>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         </div>
//         <div>
//         <p className=' w-[280px] h-[89px] text-red-600 ml-[320px] mt-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//         <h2 className=' text-[#000] font-bold mt-3 ml-[420px]'> Jahidul Islam</h2>
//         <p className=' font-bold text-[#F2994A] ml-[460px]'> actor</p>
//         </div>
//       <div className=' mt-[-270px] ml-[630px]'>
//       <div className=' flex gap-5 mt-[70px] ml-[320px]'>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         <IoStar className=' text-[#F2994A] text-2xl font-bold'/>
//         </div>
//         <div>
//         <p className=' w-[280px] h-[89px] text-red-600 ml-[320px] mt-10'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
//         <h2 className=' text-[#000] font-bold mt-3 ml-[420px]'> Razwan Ahmed</h2>
//         <p className=' font-bold text-[#F2994A] ml-[460px]'> actor</p>

//         </div>
//       </div>
//     </div>
    
//     </>
//   )
// }

// export default ReviewCompo

import React, { useEffect } from 'react';
import { IoStar } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ReviewCompo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Heading Section */}
      <div className="text-center mt-[100px]" data-aos="flip-right">
        <h2 className='text-2xl font-bold text-[#C51605]'>Review</h2>
        <p className='text-[#A0A79A] mt-5'>
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the industry's
        </p>
      </div>

      {/* Review Section */}
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center gap-10 mt-[50px]">
        {/* Review 1 */}
        <div className="text-center md:text-left" data-aos="flip-right">
          <div className="flex justify-center md:justify-start gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <IoStar key={index} className="text-[#F2994A] text-2xl font-bold" />
            ))}
          </div>
          <p className="w-full max-w-sm text-red-600 mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's...
          </p>
          <h2 className='text-black font-bold mt-3'>Jahidul Islam</h2>
          <p className='font-bold text-[#F2994A] ml-6'>Actor</p>
        </div>

        {/* Review 2 */}
        <div className="text-center md:text-left" data-aos="flip-right">
          <div className="flex justify-center md:justify-start gap-2 mb-4">
            {[...Array(5)].map((_, index) => (
              <IoStar key={index} className="text-[#F2994A] text-2xl font-bold" />
            ))}
          </div>
          <p className="w-full max-w-sm text-red-600 mx-auto md:mx-0">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's...
          </p>
          <h2 className='text-black font-bold mt-3'>Razwan Ahmed</h2>
          <p className='font-bold text-[#F2994A] ml-9'>Actor</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCompo;
