import { Version } from "./Version";
import { Supermenu } from "./Supermenu";
import { motion, useScroll } from "framer-motion";
import "./styles.css";
import { MenuLogo } from "ui";

{
  // show hour and minute locale
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
export const Menu = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="hidden sm:block">
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
<MenuLogo />
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500">
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
          <Version />
        </div>
      </div>
    </div>
  );
};
