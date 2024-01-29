import React from 'react'
import Link from "next/link";
import {
    FaFacebook,
    FaGithub,
    FaLine,
    FaLinkedin,
    FaDiscord,
    FaPhoneSquare 
  } from "react-icons/fa";
  import { MdEmail } from "react-icons/md";

  
export default function IconContact(TextColor) {
    const url = {
        facebook: "https://www.facebook.com/beer.tk26243/",
        github: "https://github.com/beer-idev/",
        line: "https://line.me/ti/p/wOmRpRYIBG",
        linkedin: "https://www.linkedin.com/in/beerdev",
        discord: "https://discordapp.com/users/833397997530251277",
        tel: "tel:0959243957",
        email: "mailto:beerdev.work@gmail.com",
      };
  return (
    <>
           <a
                href={url.facebook}
                rel="noopener noreferrer"
                target={"_blank"}
                className=""
              >
                <FaFacebook className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
              <a href={url.github} rel="noopener noreferrer" target={"_blank"}>
                <FaGithub className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>

              <a href={url.line} rel="noopener noreferrer" target={"_blank"}>
                <FaLine className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
              <a
                href={url.linkedin}
                rel="noopener noreferrer"
                target={"_blank"}
              >
                <FaLinkedin className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
              
              <a href={url.discord} rel="noopener noreferrer" target={"_blank"}>
                <FaDiscord className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
              <a href={url.tel} rel="noopener noreferrer" target={"_blank"}>
                <FaPhoneSquare className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
              <a href={url.email} rel="noopener noreferrer" target={"_blank"}>
                <MdEmail className="mr-2 text-2xl text-gray-600 hover:text-sky-400 dark:text-gray-600 dark:hover:text-sky-400" />
              </a>
 
    </>
  )
}
