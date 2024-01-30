import React from "react";
import Image2 from "../assets/image-2.jpg";
import { motion } from "framer-motion";

const imageVariant = {
  visible: {
    y: "70%",
    width: "90%",
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] },
  },
};

const Image = () => {
  return (
    <motion.div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 overflow-x-hidden lg:bg-red-200 xl:bg-yellow-200 2xl:bg-blue-300">
      <motion.img
        className="absolute w-[800px]"
        variants={imageVariant}
        animate="visible"
        src={Image2}
      />
    </motion.div>
  );
};

export default Image;
