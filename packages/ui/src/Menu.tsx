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
          <a href="/">Pencil Explorer</a>
        </button>
      </div>
      <button className="hidden rounded-full bg-black py-2 px-4 text-xs font-bold text-white md:block">
        <a
          href="http://github.com/miguelgargallo/next13-Fetch-Data-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          v1.3.1 Menu
        </a>
      </button>
      <button className="hidden py-2 px-4 font-bold text-white md:block">
        <a
          href="http://twitter.com/miguelgargallo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </button>
      <div
        className="mt-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-2 md:block"
        >
          <picture>
            <img
              src="https://vercel.com/button"
              alt="Landscape picture"
              width={75}
              height={20}
            />
          </picture>
        </a>
        <a
          href="https://huggingface.co/spaces/superdatas/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-2 md:block"
        >
          <picture>
            <img
              src="https://huggingface.co/front/assets/huggingface_logo.svg"
              alt="Landscape picture"
              width={40}
              height={20}
            />
          </picture>
        </a>
        <a
          href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-2 md:block"
        >
          <picture>
            <img
              src="https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social"
              alt="Landscape picture"
              width={100}
              height={20}
            />
          </picture>
        </a>
      </div>
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
