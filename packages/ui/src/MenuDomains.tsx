export const MenuDomains = () => {
  return (
    <div className="flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block">
      <div className="flex flex-row">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains">All Domains</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains-geographic">Geographic</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains-blockchain">Blockchain</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains-metaverse">Metaverse</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains-new">New</a>
        </button>
      </div>
    </div>
  );
};
