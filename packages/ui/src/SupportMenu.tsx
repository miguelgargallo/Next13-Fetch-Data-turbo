export const SupportMenu = () => {
  return (
    <div className="flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block">
      <div className="flex flex-row">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/support-tos">Terms Of Service</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/support-pp">Privacy Policy</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/support-answers">Answers</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/support-trademarks">Trademarks</a>
        </button>
      </div>
    </div>
  );
};
