import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="absolute top-28  left-0 w-full bottom-0 2xl:bottom-24 z-20 leading-none ">
      <div className="flex justify-between items-center ">
        <div className=" w-full">
          <h1 className="text-[200px] 2xl:text-[240px] font-medium tracking-tighter overflow-hidden flex flex-nowrap">
            {"brand".split("").map((lettre, i) => {
              return (
                <AnimatedLetter key={i} index={i}>
                  {lettre}
                </AnimatedLetter>
              );
            })}
          </h1>
        </div>
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
        animate={{ x: "-50%" }}
        transition={{
          duration: 5,
          delay: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="relative w-[200vw]"
      >
        <p className="absolute h-fit left-1/4 -translate-x-1/2 text-[200px] 2xl:text-[240px] font-medium tracking-tighter flex flex-nowrap overflow-y-hidden">
          {"experience".split("").map((lettre, i) => {
            return (
              <AnimatedLetter key={i} index={i}>
                {lettre}
              </AnimatedLetter>
            );
          })}
        </p>
        <p className="absolute left-[75%] -translate-x-1/2 top-0 text-[200px]  2xl:text-[240px] font-medium tracking-tighter flex flex-nowrap overflow-y-hidden">
          experience
        </p>
      </motion.div>

      <div className="absolute bottom-0 w-full  flex justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          className="mr-16 flex flex-col justify-center items-center bg-white p-11 rounded-full gap-y-1 font-medium"
        >
          <p>scroll</p>
          <p>dwon</p>
        </motion.div>
        <div className="overflow-hidden pr-1">
          <p className="text-[200px] 2xl:text-[240px] font-medium tracking-tighter">
            {"studio".split("").map((lettre, i) => {
              return (
                <AnimatedLetter key={i} index={i}>
                  {lettre}
                </AnimatedLetter>
              );
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

export const AnimatedLetter = ({ children, index }) => {
  return (
    <motion.span
      className="inline-block"
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
