// @ts-nocheck
import * as React from "react";
import { motion, useScroll, useAnimation } from "framer-motion";
// @ts-ignore
import Xtravaganza from "../images/xtravaganza_dark.png";

const Header = () => {
  const { scrollY } = useScroll();
  const controls = useAnimation();
  const update = () => {
    if (scrollY?.current > 10) {
      console.log("sticky")
      controls.start("sticky");
    } else {
      console.log("fixed")
      controls.start("fixed");
    }
  };

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  }, []);

  console.log("hello world")

  const variants = {
    fixed: {
      y: 0,
      "-webkit-backdrop-filter": "blur(0px)",
      backdropFilter: " blur(0px)",
      backgroundColor: "rgba(0, 0, 0, 0.16)",
      // border: "var(--header-box-main-border)",
      // boxShadow: "var(--header-box-main-box-shadow)",
    },
    sticky: {
      y: 1,
      "-webkit-backdrop-filter": "blur(10px)",
      backdropFilter: " blur(10px)",
      backgroundColor: "var(--blurred-box-main-background)",
      // border: "var(--blurred-box-main-border)",
      // boxShadow: "var(--blurred-box-main-box-shadow)",
      transition: { ease: [0.1, 0.25, 0.3, 1], duration: 0.5 },
    },
  };

  return (
    <motion.header
      className="header-section"
      variants={variants}
      animate={controls}
    >
      <div className="container header-container">
        <img src={Xtravaganza} />
      </div>
    </motion.header>
  );
};

export default Header;
