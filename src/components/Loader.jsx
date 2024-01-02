import "../styles/Loader.css";
import { motion } from "framer-motion";

const Loader = () => {
  return (
      <motion.div layoutId="loader" className="w-full h-full flex items-center justify-center">
        <div className="chaotic-orbit"></div>
      </motion.div>
  );
};
export default Loader;
