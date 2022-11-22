export const MenuDevs = () => {
  return (
    <div className="flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block">
      <div className="flex flex-row">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/developer">Home</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/developer-launch">Launch your TLD</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/developer-agreement">Agreement</a>
        </button>
      </div>
    </div>
  );
};
