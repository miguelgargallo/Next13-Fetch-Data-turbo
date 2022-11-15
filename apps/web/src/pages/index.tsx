import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`https://e.hnsfans.com/api/names/${input}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="px-4 py-5 text-center sm:p-6">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  <a
                    href="https://twitter.com/pencildomains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue text-indigo-600"
                  >
                    Pencil Explorer
                  </a>{" "}
                  <a className="badge m-2 bg-green-200 py-0 px-2 text-black">
                    Alpha v1.0.5
                  </a>
                  <p className="py-4 text-sm text-gray-500">
                    Block Explorer and Naming Tool for Handshake, the
                    decentralized, open, and extensible naming system for the
                    Internet.
                  </p>
                </h1>
                <div className="mt-2 max-w-xl text-sm text-gray-500"></div>
                <div className="mt-5">
                  <div className="mt-1">
                    <input
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-black shadow-xl hover:bg-white hover:text-black hover:shadow-md md:py-4 md:px-10 md:text-lg"
                      type="text"
                      aria-label="Type & press enter ↵"
                      placeholder="Type & press enter ↵"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          getData();
                        }
                      }}
                    />
                  </div>
                  <div className="mx-auto mt-6 grid max-w-lg gap-5 md:hidden lg:max-w-xl lg:grid-cols-1">
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-bold text-black shadow-md hover:bg-white hover:text-black hover:shadow-xl md:py-4 md:px-10 md:text-lg"
                      onClick={getData}
                    >
                      Explore Now, avoid caplocks
                    </button>
                  </div>
                  <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-xl lg:grid-cols-1"></div>
                </div>
                <div className="mt-5">
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={25}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={JSON.stringify(data, null, 2)}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
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
              className=""
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
          </div>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://huggingface.co/spaces/superdatas/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className=""
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
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <a
              href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo"
              target="_blank"
              rel="noopener noreferrer"
              className=""
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
        </div>
      </footer>
    </div>
  );
}
