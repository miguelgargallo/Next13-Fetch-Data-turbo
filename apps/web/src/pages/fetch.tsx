import Head from "next/head";
import { SetStateAction, useState } from "react";
import { Footer } from "ui";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`https://api.niami.io/hsd/${input}`);
    const json = await res.json();
    setData(json);
  };

  const handleChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setInput(e.target.value);
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
                    Alpha v1.0.11
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
                          console.log(getData());
                        }
                      }}
                    />
                  </div>
                  <div className="mt-5">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="px-4 py-5 sm:p-6">
                        <h3 className="text-lg font-medium leading-6 text-gray-900"></h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {void console.log(JSON.stringify(data))}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mt-6 grid max-w-lg gap-5 md:hidden lg:max-w-xl lg:grid-cols-1">
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-bold text-black shadow-md hover:bg-white hover:text-black hover:shadow-xl md:py-4 md:px-10 md:text-lg"
                      onClick={() => {
                        void console.log(JSON.stringify(data));
                      }}
                    >
                      Explore Now, avoid caplocks
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={25}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      value={void console.log(JSON.stringify(data))}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
