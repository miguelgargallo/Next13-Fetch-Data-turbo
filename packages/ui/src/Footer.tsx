export const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center">
      <div>
        <a>
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/miguelgargallo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue text-indigo-600"
          >
            Miguel Gargallo
          </a>
          .
        </a>
      </div>
      <div>
        <a>
          2022 ©{" "}
          <a
            href="https://huggingface.co/spaces/superdatas/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue text-indigo-600"
          >
            Pylar AI creative ML license
          </a>
          .
        </a>
      </div>
      <div className="hidden sm:block">
        <div className="flex w-full items-center justify-center">
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
        </div>
      </div>
      <p>Please do not consider the score as investment advice.</p>
    </footer>
  );
};
