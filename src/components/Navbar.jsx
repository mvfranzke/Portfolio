import React, {useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from '../assets/logo1.png'
import {Link} from 'react-scroll'

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
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="portfolio" smooth={true} duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
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
          <li className="py-6 text-4xl">
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              About Me
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Portfolio
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* social media icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/michelle-entico-006282190/"
                target="blank"
                rel="noopener noreferrer"
              >
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/mvfranzke"
                target="blank"
                rel="noopener noreferrer"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:michellevonfranzke@gmail.com"
                target="blank"
                rel="noopener noreferrer"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="Resume-MichelleVonFranzke.pdf"
                download="Resume-MichelleVonFranzke.pdf"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default Navbar

