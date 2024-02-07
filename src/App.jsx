import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import { useState } from "react";
import Image from "./components/Image";
import Navbar from "./components/Navbar";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <AnimatePresence>
      {!isComplete ? (
        <Loader setIsComplete={setIsComplete} />
      ) : (
        <motion.div className="relative h-[200vh]">
          <Navbar/>
          <Image />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
