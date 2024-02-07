import React from "react";
import Image2 from "../assets/image-2.jpg";
import { motion } from "framer-motion";

const imageVariant = {
  visible: {
    y: 130,
    transformOrigin: "top",
    width: "90%",
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

const Image = () => {
  return (
    <div className="relative h-screen w-full">
      <motion.img
        className="w-[800px] absolute top-1/2 left-1/2"
        style={{ x: "-50%", y: "-50%" }}
        src={Image2}
        variants={imageVariant}
        animate="visible"
      />
    </div>
  );
};

export default Image;
