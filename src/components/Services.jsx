import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// import { useScroll } from "./useScroll";
export default function Services() {
  //   const [element, controls] = useScroll();
  return (
    <div className="container-fuild">
      <div className="container mx-auto">
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto mt-20 lg:p-10 mb-10">
            <motion.div
              transition={pageTransition}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
            >
              <h3 className="text-4xl text-center uppercase tracking-[5px] md:text-4xl font-bold mb-2 text-sky-900 dark:text-sky-500">
                Services
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
              transition={pageTransition}
              variants={pageVariants}
              initial="initial"
              animate="in"
              exit="out"
              className="grid mt-14 md:px-6 lg:px-10 xl:px-20"
            >
            
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
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vh",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vh",
  },
};

export const pageTransition = {
  type: "spring",
  duration: 1,
};
