import React, { useState, useRef, useEffect } from "react";
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import { BsTerminal } from "react-icons/bs";
import { MdOutlineElectricalServices } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";
import { AiFillApi } from "react-icons/ai";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineSolution } from "react-icons/ai";




// import Link from './Link'
// import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
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
    <div className="lg:hidden xl:hidden 2xl:hidden">
      <div className="btm-nav">
      <ScrollLink to="hero" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'hero' ? 'active' : ''} >
        <button>
            <FaHome className="h-5 w-5" />
        </button>
        </ScrollLink>
        <ScrollLink to="skill" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'skill' ? 'active' : ''}>
        <button>
            <BsTerminal className="h-5 w-5" />
        </button>
        </ScrollLink>
        <ScrollLink to="experiences" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'experiences' ? 'active' : ''}>
        <button>
              <AiOutlineSolution className="h-5 w-5" />
        </button>
        </ScrollLink>
        {/* <button>
          <MdOutlineElectricalServices className="h-5 w-5" />
        </button> */}
        <ScrollLink to="projects" spy={true} smooth={true} duration={500} offset={-70} activeClass={activeLink === 'projects' ? 'active' : ''}>
        <button>
            <AiOutlineProject className="h-5 w-5" />
        </button>
        </ScrollLink>
      </div>
    </div>
  );
};

export default MobileNav;
