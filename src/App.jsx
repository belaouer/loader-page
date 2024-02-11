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
          <Hero />
          <Image />
        </>
      )}
    </AnimatePresence>
  );
}

export default App;
