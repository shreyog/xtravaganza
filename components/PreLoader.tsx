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
      <div className="preloader__wrapper">
        <Image
          src="/images/xtravaganza_dark.webp"
          alt="Xtravaganza"
          width="100"
          height="100"
        />
        <span className="fv-h1">&nbsp;Xtravaganza 2.0</span>
       
      </div>
    </motion.div>
  );
};

export default PerLoader;
