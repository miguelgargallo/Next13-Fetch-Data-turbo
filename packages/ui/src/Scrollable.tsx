import { motion, useScroll } from "framer-motion";
import "./styles.css";

export const Scrollable = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
};
