import React from 'react'

/* import HiArrowNarrowRight icon*/
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p>Hi! my name is</p>
        <h1>Michelle von Franzke</h1>
        <h2>Future Full Stack Developer</h2>
        <p>
          My career journey has transitioned from customer service and quality
          assurance to full stack development, driven by a passion for growth,
          commitment to excellence, and a thirst for knowledge.
        </p>

        <div>
          <button>View Work <HiArrowNarrowRight /> </button>
        </div>

      </div>
    </div>
  ); 
}

export default Home