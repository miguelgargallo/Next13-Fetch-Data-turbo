import Head from "next/head";
import { useState } from "react";
import { Footer } from "ui";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`https://e.hnsfans.com/api/names/${input}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-2">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-lg">
              <div className="px-4 py-2 text-center sm:p-2">
                <h1 className="h1">
                  <a
                    href="https://twitter.com/pencildomains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-yellow-500"
                  >
                    Pencil Explorer
                    <a>
                      <a
                        href="https://handshake.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg:hidden p-2"
                      ></a>
                      <a className="bg:hidden p-2 font-light text-gray-500 hover:text-gray-600">
                        for
                      </a>
                      <picture>
                        <img
                          src="https://handshake.org/images/landing/logo-dark.svg"
                          alt="Landscape picture"
                          width={95}
                          height={20}
                          className="bg:hidden m-2 inline-block p-2"
                        />
                      </picture>
                    </a>
                    <p className="py-2 text-sm text-gray-500">
                      Block Explorer and Naming Tool for Handshake, the
                      decentralized, open, and extensible naming system for the
                      Internet.
                    </p>
                  </a>
                  <a
                    href="https://twitter.com/pencildomains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-500"
                  ></a>
                  <div className="m-8 rounded-xl px-2 py-2 text-sm font-light shadow-md hover:shadow-xl">
                    <a className="pill m-2 bg-blue-500 px-2 text-white">
                      {" "}
                      <a
                        href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-200"
                      >
                        <a>v 1.1.0</a>
                      </a>
                    </a>
                    <a>
                      This is a big update, with a lot of new features. We have redesigned the UI and make able to categorize and filter the domain extension by levels.
                    </a>
                  </div>
                </h1>
                <div className="py-2 text-center">
                  <div className="mt-2 max-w-xl text-sm text-gray-500"></div>
                  <div className="mt-5">
                    <div className="mt-1">
                      <input
                        className="flex w-full items-center justify-center rounded-md px-8 py-2 text-center text-base font-bold text-blue-500 hover:text-blue-500 shadow-xl hover:shadow-md md:py-2 md:px-10 md:text-lg"
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
                    <div className="mt-1 py-2">
                      <p className="text-sm text-gray-500">
                        {input.length > 0 && input.length < 8 && (
                          <div>
                            .{input} has {input.length} characters, this is
                            <a>
                              {input.length > 0 && input.length < 4 && (
                                <a className="tld_diamond">
                                  {" "}
                                  a 💎 Diamond TLD.
                                </a>
                              )}
                            </a>
                            <a>
                              {input.length > 3 && input.length < 6 && (
                                <a className="tld_gold">
                                  {" "}
                                  a 🥇 Gold TLD.
                                </a>
                              )}
                            </a>
                            <a>
                              {input.length > 5 && input.length < 7 && (
                                <a className="tld_silver">
                                  {" "}
                                  a 🥈 Silver TLD.
                                </a>
                              )}
                            </a>
                            <a>
                              {input.length > 6 && input.length < 8 && (
                                <a className="tld_bronze">
                                  {" "}
                                  a 🥉 Bronze TLD.
                                </a>
                              )}
                            </a>
                          </div>
                        )}
                      </p>
                      <p className="text-sm text-gray-500">
                        {input.length > 7 && (
                          <a>
                            This is longer than 7 characters, if you strongly
                            believe in this name, please consider{" "}
                            <a
                              href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hyperlink_issue"
                            >
                              opening an issue
                            </a>{" "}
                            to discuss it.
                          </a>
                        )}
                      </p>

                      <div className="button">
                        <button
                          className="button_content"
                          onClick={() => console.log(getData())}
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
                          rows={20}
                          className="shadow-xl hover:shadow:md focus:ring-blue-500 mt-1 block w-full rounded-md shadow-sm sm:text-sm"
                          value={JSON.stringify(data, null, 2)}
                          readOnly
                        />
                      </div>
                    </div>
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
