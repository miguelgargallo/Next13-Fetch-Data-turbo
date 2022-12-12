import { Versions } from "./Versions";

export const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center text-black">
      <div>
        <a>
          Made with ❤️ by{" "}
          <a
            href="https://twitter.com/miguelgargallo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue text-black"
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
            className="hover:text-blue text-black"
          >
            Pylar&trade; AI creative ML license
          </a>
          .
        </a>
      </div>
      <div className="hidden sm:block">
        <div className="flex w-full items-center justify-center">
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
          <Versions />
          <div
            className="hidden py-2 px-4 font-bold text-white md:block"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {" "}
            <button className="hidden py-2 px-4 font-bold text-black md:block">
              <a
                href="http://twitter.com/miguelgargallo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </button>
          </div>
        </div>

        <p
          className="text-black"
        >Pencil Domains, The Fastest Domains.™</p>
      </div>
      <p>Please do not consider the score as investment advice.</p>
    </footer>
  );
};


