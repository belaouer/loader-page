import React from "react";
import Image2 from "../assets/image-2.jpg";
import { motion } from "framer-motion";

const imageVariant = {
  visible: {
    y: 280,
    transformOrigin: "top",
    width: "90%",
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Image = () => {
  return (
    <motion.img
      className="w-[800px] absolute top-1/2 left-1/2 z-10"
      style={{ x: "-50%", y: "-50%" }}
      src={Image2}
      variants={imageVariant}
      animate="visible"
    />
  );
};

export default Image;
