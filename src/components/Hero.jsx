import React, { useCallback, useEffect } from "react";
import hero from "../../public/static/images/avatar3.gif";

import Link from 'next/link'
import Image from "next/image";
// import IconContact from "../components/IconContact";
import { motion, useAnimation } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiDownload } from "react-icons/fi";
import IconContact from "../components/IconContact";
import { useInView } from "react-intersection-observer";

export default function Hero() {
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
    <div className="hero min-h-screen bg-base-200" id="hero" ref={ref}>
      <div className="hero-content text-center mt-16 mb-20">
        <div className="max-w-3xl">
          <div className="avatar mb-8">
            <motion.div
        variants={{
          visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
    hidden: { opacity: 0, scale: 0 },
         }}
        initial="hidden"
        animate={control}
        whileInView={{ scale: 1 }}
        ref={ref}
              className="w-full sm:w-full md:w-96 lg:w-80 xl:w-80 2xl:w-80 mask bg-Slate-100 mb-6 -mt-4"
            >
              <Image
                src={hero}
                alt="Picture Me"
              />
            </motion.div>
          </div>
          <div className="grid justify-items-center mb-10">
          <div className="flex flex-row items-start space-x-2 mt-2">
                  <IconContact />
                </div>
                </div>
          <h3
            className="text-lg  md:text-4xl font-bold dark:text-gray-100 text-transparent bg-clip-text 
            bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-400
              dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-rose-400 dark:via-fuchsia-500 dark:to-indigo-500"
          >
            <Typewriter
              loop={0}
              cursor={true}
              cursorStyle="_"
              // typeSpeed={100}
              // deleteSpeed={500}
              delaySpeed={2000}
              words={[
                "<Hi, My name is Beer/>",
                "Front End Developer & Web Developer",
              ]}
            />
          </h3>
          
          <p className="py-6 mb-8">
            {`Hello everyone. My name is Warawut Thasungnoen, so you can call me "Beer" as well. I always like to learn something new. I used to be a web developer with 1+ years of experience designing and developing user interfaces, testing, debugging, and training staff on web applications.`}
          </p>
          <Link href='./resume/resume-warawut-thasungnoen.pdf'>
          <motion.button
            className="btn btn-md sm:btn-sm md:btn-md btn-wide btn-outline btn-info font-bold"
            variants={{
              visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
        hidden: { opacity: 0, scale: 0 },
             }}
            initial="hidden"
            animate={control}
            whileInView={{ scale: 1 }}
            ref={ref}
          >
            Dowload Resume
            <FiDownload className="h-6 w-6" />
          </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
