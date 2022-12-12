import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { MenuLogo } from "./MenuLogo";

export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500">
        <MenuLogo />
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/explorer">Explorer</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains">Domains</a>
        </button>
        <button className="hidden rounded-xl py-2 px-4 font-bold text-white sm:block">
          <a href="/corporate">Corporate</a>
        </button>
        <div
          className="hidden py-2 px-4 font-bold text-white md:block"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <button className="hidden py-2 px-4 font-bold text-white md:block">
            <a
              href="http://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
