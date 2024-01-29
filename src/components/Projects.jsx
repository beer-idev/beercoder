import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
export default function Projects() {
  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: {duration: 0.5 }},
    hidden: { opacity: 0, scale: 0 },
  }
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
    <div className="container-fuild" id="projects" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto mt-20">
            <motion.div
              variants={boxVariant}
              initial="hidden"
              animate={control}
              whileInView={{ scale: 1 }}
              ref={ref}
            >
              <h3 className="text-4xl text-center uppercase tracking-[5px] md:text-4xl font-bold mb-2 text-sky-900 dark:text-sky-500">
              Projects
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
             
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mt-14 gap-6 mb-12 justify-center"
            >
              <motion.div variants={{
                  visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
            <img src="./project/footrepose_manage.jpg" alt="Shoes" className="w-full h-48 object-cover object-contain" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                    Footrepose
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">Laravel</div>
                  <div className="badge badge-ghost font-bold">PHP 8.0</div>
                  <div className="badge badge-ghost font-bold">Bootstrap</div>
                  <div className="badge badge-ghost font-bold">Mysql</div>
                  </div>
                  
                </div>
              </motion.div>
              <motion.div  variants={{ visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
               <img src="./project/nasa-vape-shop.jpg" alt="Shoes" className="w-full h-48 object-cover object-contain" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                    Nasa-Vape
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">CI3</div>
                  <div className="badge badge-ghost font-bold">PHP 8.0</div>
                  <div className="badge badge-ghost font-bold">Bootstrap</div>
                  <div className="badge badge-ghost font-bold">Mysql</div>
                  </div>
                </div>
              </motion.div>
              <motion.div  variants={{ visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
              <img src="./project/footrepose-shop.png" alt="Shoes" className="w-full h-48 object-cover bg-gray-800 dark:bg-gray-100" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                  Footrepose Shop
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">Vue</div>
                  <div className="badge badge-ghost font-bold">Laravel</div>
                  <div className="badge badge-ghost font-bold">PHP 8.0</div>
                  <div className="badge badge-ghost font-bold">Bootstrap</div>
                  <div className="badge badge-ghost font-bold">Mysql</div>
                  </div>
                </div>
              </motion.div>
              <motion.div  variants={{visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
              <img src="./project/house-price forecast.png" alt="Shoes" className="w-full h-48 object-cover bg-gray-800 dark:bg-gray-100" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                  Prediction location and price house
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">Python</div>
                  <div className="badge badge-ghost font-bold">streamlit</div>
                  </div>
                </div>
              </motion.div>
              <motion.div  variants={{ visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
              <img src="./project/repair-it-back.jpg" alt="Shoes" className="w-full h-48 object-cover bg-gray-800 dark:bg-gray-100" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                  Computer repair system
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">PHP 7.4</div>
                  <div className="badge badge-ghost font-bold">Bootstrap</div>
                  <div className="badge badge-ghost font-bold">Mysql</div>
                  </div>
                </div>
              </motion.div>
              <motion.div  variants={{ visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                className="card bg-base-100 shadow-xl mx-8">
              <img src="./project/borrowed-items.jpg" alt="Shoes" className="w-full h-48 object-cover bg-gray-800 dark:bg-gray-100" style={{'borderRadius':'18px 18px 0px 0px'}} />
                <div className="card-body">
                  <h2 className="card-title">
                  ระบบยืม-คืน
                  </h2>
                  <div className="card-actions justify-start gap-2">
                  <div className="badge badge-ghost font-bold">PHP 7.4</div>
                  <div className="badge badge-ghost font-bold">Bootstrap</div>
                  <div className="badge badge-ghost font-bold">Mysql</div>
                  </div>
                </div>
              </motion.div>
             
            </motion.div>
            {/* </motion.div> */}
          </div>
        </div>
       
      </div>
    </div>
  );
}