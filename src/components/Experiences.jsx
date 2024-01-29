import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
export default function Experiences() {
 
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
    <div className="container-fuild min-h-screen bg-base-200" id="experiences"  ref={ref}>
      <div className="container mx-auto mt-20">
        <div className="flex flex-row justify-center items-start overflow-hidden">
          {/* Text container */}

          <div className="w-full md:w-full mx-auto mt-20 lg:p-10 mb-10 bg-base-200">
            <motion.div
              variants={boxVariant}
          initial="hidden"
          animate={control}
          whileInView={{ scale: 1 }}
          ref={ref}
            >
              <h3 className="text-4xl text-center uppercase tracking-[5px] md:text-4xl font-bold mb-2 text-sky-900 dark:text-sky-500">
                Experiences
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
              className="grid mt-14 md:px-6 lg:px-10 xl:px-20"
            >
              <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                <motion.li
                variants={{
                  visible: { opacity: 1, scale: 1, transition: {duration: 0.6 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                >
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic font-bold">
                      Dec 2022 - Present
                    </time>
                    <div className="text-lg font-black font-bold">
                      Freelancer
                    </div>
                    <div className="font-mono font-bold">Web Developer</div>-
                    Footrepose (laravel, bootstrap, mysql) about a massage
                    booking website.<br></br>- Accepting general freelance work,
                    small jobs.
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                variants={{
                  visible: { opacity: 1, scale: 1, transition: {duration: 0.7 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic font-bold">
                      Jun 2023 - Oct 2023
                    </time>
                    <div className="text-lg font-black font-bold">
                      Zenith Comp Co., Ltd
                    </div>
                    <div className="font-mono font-bold">Programmer</div>-
                    Ministry of Labor Complaint Service (laravel, bootstrap,
                    oracle) <br></br>- Citizens' Service Center (laravel,
                    bootstrap, oracle)
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                variants={{
                  visible: { opacity: 1, scale: 1, transition: {duration: 0.8 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-start md:text-end mb-10">
                    <time className="font-mono italic font-bold">
                      Sep 2020 - Nov 2022
                    </time>
                    <div className="text-lg font-black font-bold">
                      TG Cellular World Co.,Ltd.
                    </div>
                    <div className="font-mono font-bold">Web Developer</div>-
                    Gather requirements to support users in the organization{" "}
                    <br></br>- Design and develop an application to meet a
                    business requirements <br></br>- Modify and maintain the
                    existing applications <br></br>- Test and implement web
                    application by using PHP and/or NodeJS <br></br>- Find
                    methodologies and techniques that will be used to solve
                    specific problems <br></br>- Plan the project timeline and
                    manage all projects to meet the timeline <br></br>- Develop
                    quality software and web applications <br></br>- Analyze and
                    maintain existing software applications <br></br>- Design
                    highly scalable, testable code <br></br>- Discover and fix
                    programming bugs <br></br>
                  </div>
                  <hr />
                </motion.li>
                <motion.li
                variants={{
                  visible: { opacity: 1, scale: 1, transition: {duration: 0.10 }},
            hidden: { opacity: 0, scale: 0 },
                 }}
                initial="hidden"
                animate={control}
                whileInView={{ scale: 1 }}
                ref={ref}
                >
                  <hr />
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="timeline-end mb-10">
                    <time className="font-mono italic font-bold">
                      Jul 2019 - Aug 2020
                    </time>
                    <div className="text-lg font-black font-bold">
                      CHAIRATTANA SUNTORN CO.,LTD.
                    </div>
                    <div className="font-mono font-bold">Programmer</div>-
                    Website developed by magento <br></br>- Customize magento
                    using php <br></br>- Post products on the website and social
                    platforms <br></br>
                  </div>
                  <hr />
                </motion.li>
              </ul>
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