import  { useState } from 'react';
import logo from "../assets/images/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from '@/components/ui/button';
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";



export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isHovered,setIsHovered]=useState(false);
  // Toggle mobile menu visibility
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Navbar Container */}
      <nav className="  fixed w-full z-10 top-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo Section */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src={logo}
          
              alt="Taha logo "
            />
          
          </a>

          {/* Mobile Menu Toggle Button */}
       <div className='flex items-center justify-center gap-2'>
      <Button className='md:hidden'>
        
       <div
      className="bg-black text-white flex items-center cursor-pointer group px-4 py-3 rounded-lg" // Added group class to the button
    >
      <p className="text-[16px]">Book a demo</p>

      {/* Regular div for the arrow with hover effect */}
      <div className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
      <GoArrowRight  />

      </div>
    </div>
      </Button>
    
       <button
            onClick={handleMenuToggle}
            type="button"
            className="inline-flex items-center  justify-center md:hidden bg-transparent"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <GiHamburgerMenu size={27} />

          
          </button>
         
     
       </div>

          {/* Navbar Links (Desktop View) */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* Home Link */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>

              {/* About Link */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>

              {/* Services Link */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>

              {/* Pricing Link */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>

              {/* Contact Link */}
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
