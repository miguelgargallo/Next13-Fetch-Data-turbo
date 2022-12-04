import { Menu } from "ui";

export const MenuCorporate = () => {
  return (
    <div className="flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block">
      <div className="flex flex-row">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/developer">Developer</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/office">Office</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/support">Support</a>
        </button>
        {/*         <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/blog">Blog</a>
        </button> */}
      </div>
    </div>
  );
};
