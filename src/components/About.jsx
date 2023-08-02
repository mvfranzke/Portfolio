import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hi. I'm Michelle, thank you for visiting my page. Please take a
              look around.
            </p>
          </div>
          <div>
            <p>
              My evolution from customer service and quality assurance to full
              stack development has been driven by a passion for growth, a
              commitment to excellence, and a thirst for knowledge. I am excited
              to bring my diverse background and technical proficiency to the
              forefront of software development, ready to create exceptional
              solutions and make a meaningful impact in this dynamic field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About