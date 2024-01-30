import { AnimatePresence, motion } from "framer-motion";
import Loader from "./components/Loader";
import {useState } from "react";
import Image from "./components/Image";

function App() {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <AnimatePresence>
      {!isComplete ? (
        <motion.div key="test">
          <Loader setIsComplete={setIsComplete} />
        </motion.div>
      ) : (
        <Image />
      )}
    </AnimatePresence>
  );
}

export default App;
