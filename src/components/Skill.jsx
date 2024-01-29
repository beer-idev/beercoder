import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

export default function Skill() {
  const devicons = [
    {
      name: "HTML5",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      class: "",
    },
    {
      name: "CSS3",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      class: "text-gray-100",
    },
    {
      name: "JAVASCRIPT",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      class: "text-gray-100",
    },
    {
      name: "PHP",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      class: "",
    },
    {
      name: "TYPESCRIPT",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      class: "",
    },
    {
      name: "BOOTSTRAP",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      class: "",
    },
    {
      name: "TAILWINDCSS",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
      class: "",
    },
    {
      name: "REACT",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
      class: "",
    },
    {
      name: "VUEJS",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg",
      class: "",
    },
    {
      name: "NODEJS",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
      class: "",
    },
    {
      name: "LARAVEL",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain-wordmark.svg",
      class: "",
    },
    {
      name: "PYTHON",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
      class: "",
    },
    {
      name: "MYSQL",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
      class: "",
    },
    {
      name: "ORACLE",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
      class: "",
    },
    {
      name: "SQL SERVER",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg",
      class: "",
    },
    {
      name: "DIGITALOCEAN",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-original-wordmark.svg",
      class: "",
    },
    {
      name: "GITHUB",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
      class: "",
    },
    {
      name: "NPM",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      class: "",
    },
    {
      name: "FIGMA",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      class: "",
    },
    {
      name: "VS CODE",
      path: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg",
      class: "",
    },
  ];

  
  const [icons, setIcons] = useState(devicons);
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: {duration: 0.5 }},
    hidden: { opacity: 0, scale: 0 },
  }
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
const control = useAnimation();
const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }else {
      control.start("hidden");
    }
  }, [control, inView]);


  return (
    <div className="container-fuild" id="skill">
    <div className="container mx-auto px-6 md:px-5">
      <div className="flex flex-row justify-center items-start overflow-hidden">
        {/* Text container */}

        <div className="w-full md:w-full mx-auto text-center md:text-center lg:p-10 mt-20 mb-10">
          <motion.div
          variants={boxVariant}
          initial="hidden"
          animate={control}
          whileInView={{ scale: 1 }}
          ref={ref}
          >
            <h3 className="text-4xl uppercase tracking-[5px] md:text-4xl font-bold mb-2 text-sky-900 dark:text-sky-500">
              Skills
            </h3>
          </motion.div>
          {/* <motion.div
               variants={{
                hidden: { y: 50, opacity: 0 },
                  show: { y: 0, opacity: 1 },
              }}
              animate={controls}
              transition={{
                delay: 0.01,
                type: "tween",
                duration: 0.6,
              }}
              whileInView={{ opacity: 1 }}
              > */}
          <motion.div
         variants={{
          visible: { opacity: 1, scale: 1, transition: {duration: 0.7 }},
    hidden: { opacity: 0, scale: 0 },
         }}
         initial="hidden"
         animate={control}
         ref={ref}
          whileInView={{ scale: 1 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 md:px-6 lg:px-10 xl:px-20 justify-items-center"
          >
            {icons.map((devicon, index) => (
              <div
                key={index}
                className="pt-2 w-20 h-20 transition duration-500 hover:xl:scale-105 hover:scale-105 shadow-xl  rounded-xl  dark:shadow-xl relative lg:w-20 lg:h-20 aspect-w-16 aspect-h-9 my-6 md:my-10"
              >
                {/* className={`rounded-xl dark:bg-zinc-400 hover:bg-gradient-to-r from-indigo-300 to-purple-400 dark:hover:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500`} */}
                <Image
                  src={devicon.path}
                  className={`rounded-xl p-3 dark:p-2 hover:shadow-xl bg-zinc-100 hover:bg-gradient-to-r from-indigo-300 to-purple-400 dark:hover:bg-gradient-to-r dark:from-indigo-400 dark:via-purple-400 dark:to-pink-500`}
                  alt={devicon.name}
                  width="300" 
                  height="500"
                />
                <p></p>
              </div>
            ))}
          </motion.div>
          {/* </motion.div> */}
        </div>
      </div>
      <style>
        {`
      Image{
        padding: 500px;
      }
      `}
      </style>
    </div>
    </div>
  );
}
