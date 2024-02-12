import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import { useState } from "react";
import Image from "./components/Image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <AnimatePresence>
      {!isComplete ? (
        <Loader setIsComplete={setIsComplete} key="loader" />
      ) : (
        <>
          <Navbar />
          <section className=" w-full h-[70%] 2xl:h-[80%] absolute z-20 top-20 ">
            <Hero />
          </section>
          <Image />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
