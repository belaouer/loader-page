import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full h-full leading-none flex flex-col justify-between ">
      <div className="flex justify-between items-center h-full">
        <h1 className="w-full text-[200px] 2xl:text-[240px] font-medium tracking-tighter overflow-hidden flex flex-nowrap">
          {"brand".split("").map((lettre, i) => {
            return (
              <AnimatedLetter key={i} index={i}>
                {lettre}
              </AnimatedLetter>
            );
          })}
        </h1>
        <div className="w-full flex flex-col justify-center items-center overflow-hidden py-2">
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <p>We are specialised in setting up</p>
            <p>the foundation of your brand and</p>
            <p>setting you up for success.</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="relative w-full h-full  flex justify-center"
        animate={{ x: "-100%" }}
        transition={{
          duration: 5,
          delay: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <h1 className="text-[200px] 2xl:text-[240px] font-medium tracking-tighter overflow-y-hidden">
          {"experience".split("").map((lettre, i) => {
            return (
              <AnimatedLetter key={i} index={i}>
                {lettre}
              </AnimatedLetter>
            );
          })}
        </h1>

        <h1 className="absolute left-[150%] -translate-x-1/2 text-[200px]  2xl:text-[240px] font-medium tracking-tighter overflow-y-hidden">
          experience
        </h1>
      </motion.div>

      <div className="relative w-full h-full flex justify-center items-center ">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mr-14 flex flex-col justify-center items-center bg-white p-11 rounded-full gap-y-1 font-medium"
        >
          <p>scroll</p>
          <p>dwon</p>
        </motion.div>

        <h1 className="text-[200px] 2xl:text-[240px] font-medium tracking-tighter overflow-hidden">
          {"studio".split("").map((lettre, i) => {
            return (
              <AnimatedLetter key={i} index={i}>
                {lettre}
              </AnimatedLetter>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

export default Hero;

export const AnimatedLetter = ({ children, index }) => {
  return (
    <motion.span
      className="inline-block leading-none "
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        delay: index * 0.1,
        duration: 0.8,
      }}
    >
      {children}
    </motion.span>
  );
};
