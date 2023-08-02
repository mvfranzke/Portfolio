import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form method="" action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-500 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Please fill out the form below or send me an email at
            michellevonfranzke@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
      </form>
    </div>
  );
}

export default Contact