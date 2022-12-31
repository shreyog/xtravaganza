import { motion } from "framer-motion";
import React, { MouseEventHandler } from "react";

const Backdrop = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: "spring", bounce: 0, duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
