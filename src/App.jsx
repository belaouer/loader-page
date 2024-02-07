import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import { useState } from "react";
import Image from "./components/Image";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <AnimatePresence>
      {!isComplete ? (
        <Loader setIsComplete={setIsComplete} />
      ) : (
        <motion.div className="relative h-[200vh]">
          <Image />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
