import React from 'react'
import { Link } from "react-scroll";
/* import HiArrowNarrowRight icon*/
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className='text-yellow-500'>Hi my name is</p>
        <h1 className='text-4xl sm:text-5xl font-bold text-[#ccd6f6]'>Michelle von Franzke</h1>
        <h2 className='text-4xl sm:text-4xl font-bold text-[#8892b0]'>Future Full Stack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          My career journey has transitioned from customer service and quality
          assurance to full stack development, driven by a passion for growth,
          commitment to excellence, and a thirst for knowledge.
        </p>
        <div>
          <Link to="portfolio" smooth={true} duration={500}><button 
          className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>
            View Work 
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight />
            </span>
            </button></Link>
          
        </div>

      </div>
    </div>
  ); 
}

export default Home