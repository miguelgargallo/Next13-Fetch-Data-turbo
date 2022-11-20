{
  // show hour and minute locale
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
export const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-between justify-items-center bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="flex flex-row items-center justify-between">
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">Explorer</a>
        </button>
        <button className="hidden rounded-full bg-black py-2 px-4 text-xs font-bold text-white md:block">
          <a href="http://github.com/miguelgargallo/next13-Fetch-Data-turbo">
            v1.2.9
          </a>
        </button>

      </div>
      <button className="rounded-xl py-2 px-4 font-bold text-white">
      <div className="hidden md:block">
        <a className="rounded-xl py-2 px-4 font-bold text-white">

        Handshake Block Explorer & Grading
        </a>
        </div>
      </button>
            <button className="rounded-xl py-2 px-4 font-bold text-white">
        <a href="/">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </a>
      </button>

    </div>
  );
};
