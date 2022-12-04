import { Menu } from "ui";

export const MenuPylar = () => {
  return (
    <div className="flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block">
      <div className="flex flex-row">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/blog">Our Daily Work</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/what-is-pylar">What is Pylar AI</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/pylar-license">License</a>
        </button>
      </div>
    </div>
  );
};
