import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedIn, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill} from "react-icons/bs";
import Logo from '../assets/logo1.png'

/* define Navbar variable and set up setter and default state to false, created handleClick function to display list when FaBars is clicked */
const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)





    return (
      <div className="fixed w-full h-[100px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="name logo" style={{ width: "100px" }} />
        </div>

        {/* navbar menu options */}
        <ul className="hidden md:flex">
          <li>Home</li>
          <li>About Me</li>
          <li>Skills</li>
          <li>Portfolio</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>

        {/* additional menu option */}
        {/* set up ternatry operator, display FaBars if nav is not visible and disply x image for FaTimes */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile view menu */}
        {/* ternary operator to display list when FaBars is visible and clicked */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-1 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">Home</li>
          <li className="py-6 text-4xl">About Me</li>
          <li className="py-6 text-4xl">Skills</li>
          <li className="py-6 text-4xl">Portfolio</li>
          <li className="py-6 text-4xl">Contact</li>
          <li className="py-6 text-4xl">Resume</li>''
        </ul>

        {/* social media icons */}
        <div className="flex fixed flex-col top-[35%] left-0">
          <ul>
            <li>
              <a href="/">LinkedIn <FaFacebook/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar

