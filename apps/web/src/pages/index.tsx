/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";
import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useState,
} from "react";
import { GradientWhite } from "ui";
import { GradientDiamond } from "ui";
import { GradientGold } from "ui";
import { GradientSilver } from "ui";
import { GradientBronze } from "ui";
import { motion } from "framer-motion";

export default function Home() {
  // word a word and find the definition
  const [word, setWord] = useState<string>("");
  const [definition, setDefinition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

// const fetch data but if no data is found then return a sentence "no data found"

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      if (data.title === "No Definitions Found") {
        setDefinition("No data found");
      } else {
        setDefinition(data[0].meanings[0].definitions[0].definition);
      }
    } catch (error) {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <div>
          <div className="flex flex-col items-center justify-center py-16 px-20 text-center">
            <a href="https://hns.pencil.li" className="">
              <picture>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300" /* 150 x 2 = 300 */
                  height="50" /* 25 x 2 = 50 */
                  viewBox="0 0 2344 678"
                >
                  <defs>
                    <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                      <stop offset="0%" stop-color="#B620E0"></stop>
                      <stop offset="16.68%" stop-color="#6236FF"></stop>
                      <stop offset="33.433%" stop-color="#0091FF"></stop>
                      <stop offset="49.949%" stop-color="#6DD400"></stop>
                      <stop offset="66.61%" stop-color="#F7B500"></stop>
                      <stop offset="83.281%" stop-color="#FA6400"></stop>
                      <stop offset="100%" stop-color="#E02020"></stop>
                    </linearGradient>
                    <linearGradient id="b" x1="100%" x2="0%" y1="50%" y2="50%">
                      <stop offset="0%" stop-color="#E02020"></stop>
                      <stop offset="16.719%" stop-color="#FA6400"></stop>
                      <stop offset="33.39%" stop-color="#F7B500"></stop>
                      <stop offset="50.051%" stop-color="#6DD400"></stop>
                      <stop offset="66.567%" stop-color="#0091FF"></stop>
                      <stop offset="83.32%" stop-color="#6236FF"></stop>
                      <stop offset="100%" stop-color="#B620E0"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    fill="#be0aff"
                    fill-rule="evenodd"
                    transform="translate(-151 -173)"
                  >
                    <path
                      fill="#be0aff"
                      d="M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z"
                      transform="matrix(0 -1 -1 0 980 980)"
                    ></path>
                    <path
                      fill="#147df5"
                      d="M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z"
                      transform="matrix(0 -1 -1 0 905.5 905.5)"
                    ></path>
                    <path
                      fill="#0aff99"
                      d="M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z"
                      transform="matrix(0 -1 -1 0 842.5 842.5)"
                    ></path>
                    <path
                      fill="#deff0a"
                      d="M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z"
                      transform="matrix(0 -1 -1 0 779 779)"
                    ></path>
                    <path
                      fill="#ff0000"
                      d="M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z"
                      transform="matrix(0 -1 -1 0 715.5 715.5)"
                    ></path>
                    <text
                      fill="#000000"
                      font-family="Roboto, sans-serif"
                      font-size="500"
                      font-weight="500"
                    >
                      <tspan x="993.25" y="697">
                        Pencil
                      </tspan>
                    </text>
                    <text
                      fill="#000000"
                      font-family="Roboto, sans-serif"
                      font-size="100"
                      font-weight="500"
                    >
                      <tspan x="690.95" y="829">
                        ©
                      </tspan>
                    </text>
                    <text
                      fill="#000000"
                      font-family="Roboto, sans-serif"
                      font-size="75"
                      font-weight="500"
                    >
                      <tspan x="2386.5" y="248">
                        TM
                      </tspan>
                    </text>
                  </g>
                </svg>
              </picture>
            </a>
          </div>
          <p className="m-2 text-center text-xl font-bold text-black">
            8 Million TLDs on the Blockchain!
          </p>
          <p className="text-center text-xl font-bold text-black">
            The Fastest Domains. ™
          </p>
          <div className="hidden md:block">
            <div className="flex flex-row justify-center">
              <div className="flex justify-center">
                <div className="mt-6 py-2 text-center">
                  <table className="table-auto">
                    <thead>
                      <tr>
                        <th className="px-4 py-2">TLD</th>
                        <th className="px-4 py-2">Definition Lenght</th>
                        <th className="px-4 py-2">Short or Long definition</th>
                        <th className="px-4 py-2">Word Lenght</th>
                        <th className="px-4 py-2">Short or Long word</th>
                        <th className="px-4 py-2">Definition</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border px-4 py-2">
                          <input
                            type="text"
                            className="m-2 rounded-md border border-gray-300 px-4 py-2 text-black"
                            value={word}
                            onChange={(e) => setWord(e.target.value)}
                            onClick={fetchData}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                fetchData();
                              }
                            }}
                          />
                          <button
                            className="m-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                            onClick={fetchData}
                            onKeyPress={(e) => {
                              if (e.key === "Enter") {
                                fetchData();
                              }
                            }}
                          >
                            Get Punctuation
                          </button>
                        </td>
                        <td className="border px-4 py-2">
                          {definition.length}
                        </td>
                        <td className="border px-4 py-2">
                          {definition.split(" ").length < 10 ? (
                            <p className="font-regular py-8 text-center text-xl text-black">
                              This is a short definition
                            </p>
                          ) : (
                            <p className="font-regular py-8 text-center text-xl text-black">
                              This is a long word
                            </p>
                          )}
                        </td>
                        <td className="border px-4 py-2">{word.length}</td>
                        <td className="border px-4 py-2">
                          {word.length < 7 ? (
                            <p className="font-regular py-8 text-center text-xl text-black">
                              This is a short word
                            </p>
                          ) : (
                            <p className="font-regular py-8 text-center text-xl text-black">
                              This is a long word
                            </p>
                          )}
                        </td>
                        <td className="border px-4 py-2">
                          {definition && (
                            <p className="font-regular py-8 text-center text-xl text-black">
                              {loading && <p>Loading...</p>}
                              {definition}
                            </p>
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex flex-row justify-center">
              <div className="flex justify-center sm:hidden">
                <div className="mt-6 py-2 text-center">
                  <input
                    type="text"
                    className="m-2 rounded-md border border-gray-300 px-4 py-2 text-black"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    onClick={fetchData}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        fetchData();
                      }
                    }}
                  />
                  <button
                    className="m-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                    onClick={fetchData}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        fetchData();
                      }
                    }}
                  >
                    Get Punctuation
                  </button>
                  {word.length < 7 ? (
                    <p className="font-regular py-8 text-center text-xl text-black">
                      This is a short word ({word.length})
                    </p>
                  ) : (
                    <p className="font-regular py-8 text-center text-xl text-black">
                      This is a long word
                    </p>
                  )}
                  {definition.split(" ").length < 10 ? (
                    <p className="font-regular py-8 text-center text-xl text-black">
                      This is a short definition
                    </p>
                  ) : (
                    <p className="font-regular py-8 text-center text-xl text-black">
                      This is a long word ({definition.length})
                    </p>
                  )}
                  {definition && (
                    <p className="font-regular py-8 text-center text-xl text-black">
                      {loading && <p>Loading...</p>}
                      {definition}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="flex justify-center">
              <div className="mt-6 py-2 text-center">
                <div className="mt-1 flex flex-row py-2">
                  <a>
                    {word.length > 0 && word.length < 4 && (
                      <div>
                        <a className="tld_diamond">
                          {" "}
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ ease: "easeOut", duration: 2 }}
                            className="tld_diamond_div"
                          >
                            <a className="tld_title_diamond">.{word}</a>
                            <GradientDiamond />
                            <p className="tlg_diamond_text">
                              {" "}
                              is a 💎 Diamond TLD.{" "}
                            </p>
                          </motion.div>
                        </a>
                      </div>
                    )}
                  </a>
                  <a>
                    {word.length > 3 &&
                      word.length < 7 &&
                      definition.length > 0 && (
                      /* definition.length < 100 && ( */
                        <div>
                          <a className="tld_gold">
                            {" "}
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ ease: "easeOut", duration: 2 }}
                              className="tld_gold_div"
                            >
                              <a className="tld_title_gold">.{word}</a>

                              <GradientGold />
                              <p className="tlg_gold_text"> a 🥇 Gold TLD.</p>
                            </motion.div>
                          </a>
                        </div>
                      )}
                  </a>
                  <a>
                    {word.length > 6 &&
                      word.length < 10 &&
                      definition.length > 0 && (
                      /* definition.length < 100 && ( */
                      <div>
                          <a className="tld_silver">
                            {" "}
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ ease: "easeOut", duration: 2 }}
                              className="tld_silver_div"
                            >
                              <a className="tld_title_silver">.{word}</a>
                              <GradientSilver />
                              <p className="tld_silver_text">
                                {" "}
                                a 🥈 Silver TLD.
                              </p>
                            </motion.div>
                          </a>
                        </div>
                      )}
                  </a>
                  <a>
                    {word.length > 9 &&
                      word.length < 13 &&
                      definition.length > 0 && (
                      /* definition.length < 100 && ( */
                      <div>
                          <a className="tld_bronze">
                            {" "}
                            <motion.div
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ ease: "easeOut", duration: 2 }}
                              className="tld_bronze_div"
                            >
                              <a className="tld_title_bronze">.{word}</a>
                              <GradientBronze />
                              <p className="tlg_bronze_text">
                                {" "}
                                a 🥉 Bronze TLD.{" "}
                              </p>
                            </motion.div>
                          </a>
                        </div>
                      )}
                  </a>
                </div>
              </div>
              {/*  <a>
                {definition.length < 1 && (
                    <div className="tld_white_div">
                      <a className="tld_title_white">.{word}</a>
                      <GradientWhite />
                      <p className="tld_white_text"> is a 🎁 new TLD.</p>
                    </div>
                  )}
              </a> */}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
