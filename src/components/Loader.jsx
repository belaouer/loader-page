import { motion } from "framer-motion";
import Image1 from "../assets/image-1.jpg";
import Image2 from "../assets/image-2.jpg";
import Image3 from "../assets/image-3.jpg";
import Image4 from "../assets/image-4.jpg";
import Image5 from "../assets/image-5.jpg";

const containerVariant = {
  visible: { transition: { staggerChildren: 0.35 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMainVariant = {
  hidden: { opacity: 0, y: 200 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: [0.33, 1, 0.68, 1] },
  },
  exit: {
    opacity: 0,
    y: "100%",
    transition: {
      duration: 1.5,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Loader = ({ setIsComplete }) => {
  return (
    <motion.div className="w-screen h-screen ">
      <motion.div
        variants={containerVariant}
        onAnimationComplete={() => setIsComplete(true)}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="relative  w-full h-full overflow-hidden flex justify-center items-center"
      >
        <motion.div
          variants={itemVariant}
          className="absolute  xl:w-[300px] 2xl:w-[400px] left-[16%] bottom-[14%]"
        >
          <img src={Image1} />
        </motion.div>
        <motion.div
          variants={itemMainVariant}
          className="overflow-x-hidden w-screen h-screen flex justify-center items-center z-10"
        >
          <motion.img src={Image2} className="xl:w-[600px] 2xl:w-[800px]" />
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="absolute xl:w-[200px] 2xl:w-[300px] right-[12%] top-[8%]"
        >
          <img src={Image3} />
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="absolute xl:w-[300px] 2xl:w-[400px]  right-[20%] bottom-[10%] z-20"
        >
          <img src={Image4} />
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="absolute xl:w-[200px]  2xl:w-[280px] left-[14%] top-[12%]"
        >
          <img src={Image5} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
