import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { PencilLogo } from "./PencilLogo";
import { PylarLogo } from "./PylarLogo";
import { SuperdataLogo } from "./SuperdataLogo";

export const Supermenu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-black to-black">
        <PencilLogo />
        <PylarLogo />
        <SuperdataLogo />
      </div>
    </div>
  );
};
