import React from "react";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: {
    opacity: 0,
    y: "-100%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Navbar = () => {
  return (
    <motion.header
      variants={headerVariant}
      initial="hidden"
      animate="visible"
      className="w-full h-28 flex justify-center items-center"
    >
      <nav className="w-[93%] flex justify-between items-center text-xs font-semibold">
        <div className="text-2xl font-bold w-full">Ollie</div>
        <div className="w-full">
          <ul className="flex justify-between">
            <li className="cursor-pointer">Design</li>
            <li className="cursor-pointer">Strategy</li>
            <li className="cursor-pointer">Cases</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Why work with us?</li>
          </ul>
        </div>
        <div className="w-full flex justify-end underline underline-offset-8">
          Let's work together
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
