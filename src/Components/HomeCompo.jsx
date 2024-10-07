
// import React, { useEffect } from 'react';
// import { FaShoppingCart } from "react-icons/fa";
// import { FaRegStar } from "react-icons/fa6";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const HomeCompo = () => {
  
//   useEffect(() => {
//     AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[150px]'>
        
//         {/* Image Section with AOS Animation */}
//         <img 
//           data-aos="zoom-in" // AOS zoom-in effect
//           className='w-full md:w-[50%] h-auto rounded-sm hover:scale-105 transition-transform duration-300 mt-10' 
//           src="/images/banner.png" 
//           alt="Product"
//         />

//         {/* Text Section with AOS Animation */}
//         <div className='text-center md:text-left' data-aos="fade-up">
//           <h2 className='text-[#F2994A] font-bold text-xl md:text-2xl'>Normal to oily skin</h2>
//           <h3 className='text-2xl md:text-4xl font-bold mt-4'>
//             Men’s Sunscreen <br /> hand & body
//           </h3>
//           <p className='text-base md:text-lg font-bold text-gray-400 mt-2'>
//             Lorem Ipsum is simply dummy text of the printing and <br />
//             typesetting industry. Lorem Ipsum has been the industry's...
//           </p>

//           {/* Add to Cart Button */}
//           <button className='flex items-center justify-center gap-2 w-[211px] h-[54px] bg-[#E52525] text-white font-bold rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300 mt-5'>
//             <span>Add to cart</span>
//             <FaShoppingCart className='w-5 h-5' />
//           </button>

//           {/* Rating Section */}
//           <div className='flex gap-4 mt-5'>
//             {[1, 2, 3].map((_, index) => (
//               <div key={index} className='flex items-center gap-2'>
//                 <FaRegStar className='text-[#F2994A] w-[29px] h-[29px]' />
//                 <div>
//                   <p className='text-2xl font-bold'>200+</p>
//                   <p className='text-[#A0A79A] font-bold'>Rating</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default HomeCompo;

import React, { useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import AOS from 'aos';
import CountUp from 'react-countup'; // For counter effect
import 'aos/dist/aos.css';

const HomeCompo = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second duration
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-[150px]'>

        {/* Image Section with AOS Animation */}
        <img 
          data-aos="zoom-in" // AOS zoom-in effect
          className='w-full md:w-[50%] h-auto rounded-sm hover:scale-105 transition-transform duration-300 mt-10' 
          src="/images/banner.png" 
          alt="Product"
        />

        {/* Text Section with AOS Animation */}
        <div className='text-center md:text-left' data-aos="fade-up">
          <h2 className='text-[#F2994A] font-bold text-xl md:text-2xl'>Normal to oily skin</h2>
          <h3 className='text-2xl md:text-4xl font-bold mt-4'>
            Men’s Sunscreen <br /> hand & body
          </h3>
          <p className='text-base md:text-lg font-bold text-gray-400 mt-2'>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's...
          </p>

          {/* Add to Cart Button */}
          <button className='flex items-center justify-center gap-2 w-[211px] h-[54px] bg-[#E52525] text-white font-bold rounded-md hover:scale-105 hover:shadow-lg transition-transform duration-300 mt-5'>
            <span>Add to cart</span>
            <FaShoppingCart className='w-5 h-5' />
          </button>

          {/* Rating Section with CountUp */}
          <div className='flex gap-4 mt-5'>
            {[46, 200, 99].map((rating, index) => (
              <div key={index} className='flex items-center gap-2'>
                <FaRegStar className='text-[#F2994A] w-[29px] h-[29px]' />
                <div>
                  <p className='text-2xl font-bold'>
                    <CountUp end={rating} duration={2} />+
                  </p>
                  <p className='text-[#A0A79A] font-bold'>Rating</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default HomeCompo;
