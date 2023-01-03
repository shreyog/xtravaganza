import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const transition: { duration: number; ease: number[] } = {
  duration: 1.4,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const PerLoader = () => {
  return (
    <motion.div
      animate={{ top: "-100vh", transition: { ...transition, delay: 3 } }}
      className="preloader"
    >
      <div className=" loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span className="fv-h5">&nbsp;Xtravaganza 2.0</span>
      </div>
    </motion.div>
  );
};

export default PerLoader;
