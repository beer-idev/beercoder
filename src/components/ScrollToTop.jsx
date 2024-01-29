import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { classNames } from "./Utility";
import { motion } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className="fixed z-10 bottom-8 R18 right-8 md:bottom-10 md:right-14 lg:md:right-16">
      <motion.button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-info focus:ring-slate-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none"
        //   "bg-slate-800 hover:bg-slate-00 dark:bg-slate-800 dark:hover:bg-gray-900 focus:ring-slate-500 inline-flex items-center rounded-full p-3 text-primary shadow-sm transition-opacity focus:outline-none"
        )}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeOut",
        }}
        animate={{
          y: ["0px", "-15px"],
        }}
      >
        <FaArrowUp className="h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
      </motion.button>
    </div>
  );
}
