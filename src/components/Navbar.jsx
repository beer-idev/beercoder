import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import Link from 'next/link'
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import logo from "../../public/logo/logo.png";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const Navbar = () => {
  

  const [isOpen, setIsOpen] = useState(false);
  // const [active, setActive] = useState(false);
  // const router = useRouter();
  // const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  // const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic to determine the active link based on scroll position
    };

    Events.scrollEvent.register('begin', () => {
      // Handle the scroll start event if needed
    });

    Events.scrollEvent.register('end', () => {
      // Handle the scroll end event if needed
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  return (
    <>
      <div className="navbar bg-base-300 sticky top-0 z-10 left-0 right-0 shadow-lg border-none backdrop-blur-lg bg-opacity-30">
        <div className="navbar-start">
          <a href="./" className="btn btn-ghost normal-case text-xl"> BEERCODER </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <ScrollLink to="hero" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'hero' ? 'active' : ''}>Home</ScrollLink>
    
            </li>
            <li>
            <ScrollLink to="skill" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'skill' ? 'active' : ''}>Skill</ScrollLink>
       
            </li>
            <li>
            <ScrollLink to="experiences" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'experiences' ? 'active' : ''}>Experiences</ScrollLink>
          
            </li>
            <li>
            <ScrollLink to="projects" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'projects' ? 'active' : ''}>Project</ScrollLink>
        
            </li>
            
          </ul>
        </div>
        <div className="navbar-end">
        <div className="mx-4">
        <ThemeSwitch />
        </div>

          <div className="mr-8">
          <Link href='./resume/resume-warawut-thasungnoen.pdf'>
          <button
            className="btn btn-sm sm:btn-sm md:btn-sm btn-outline btn-info font-bold"
            
          >
            Resume
          </button>
          </Link>
          </div>
         
        </div>
      </div>
     
    </>
  );
};
<style>
        {`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
       
        z-index: 30;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}
      </style>

export default Navbar;
