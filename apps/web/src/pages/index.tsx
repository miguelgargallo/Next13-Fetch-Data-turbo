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
import { generateJSXMeshGradient } from "meshgrad";

const ELEMENTSDIAMOND = 25;
const ELEMENTSGOLD = 12;
const ELEMENTSSILVER = 7;
const ELEMENTSBRONZE = 3;
const ELEMENTSWHITE = 1;

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
                  <defs></defs>
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
                            style={generateJSXMeshGradient(ELEMENTSDIAMOND)}
                          >
                            <a className="tld_title_diamond">
                              <svg>
                                {" "}
                                <path
                                  d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                                  id="Fill-1"
                                  className="justify-center"
                                ></path>
                              </svg>
                              .{word}
                            </a>
                            <p className="tld_card_diamond">
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
                              style={generateJSXMeshGradient(ELEMENTSGOLD)}
                            >
                              <a className="tld_card_gold">
                                <svg>
                                  {" "}
                                  <path
                                    d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                                    id="Fill-1"
                                    className="justify-center"
                                  ></path>
                                </svg>
                                .{word}
                              </a>

                              <p className="tld_gold_text"> a 🥇 Gold TLD.</p>
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
                              style={generateJSXMeshGradient(ELEMENTSSILVER)}
                            >
                              <a className="tld_card_silver">
                                <svg>
                                  {" "}
                                  <path
                                    d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                                    id="Fill-1"
                                    className="justify-center"
                                  ></path>
                                </svg>
                                .{word}
                              </a>
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
                              style={generateJSXMeshGradient(ELEMENTSBRONZE)}
                            >
                              <a className="tld_title_bronze">
                                <svg>
                                  {" "}
                                  <path
                                    d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                                    id="Fill-1"
                                    className="justify-center"
                                  ></path>
                                </svg>
                                .{word}
                              </a>
                              <GradientBronze />
                              <p className="tld_bronze_text">
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
                      <a className="tld_title_white"><svg>
                                {" "}
                                <path
                                  d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                                  id="Fill-1"
                                  className="justify-center"
                                ></path>
                              </svg>
                              .{word}</a>
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

/* // comienzo_a_buscar al inicio

const word = [
  "a",
  "á",
  "b",
  "c",
  "d",
  "e",
  "é",
  "f",
  "g",
  "h",
  "i",
  "í",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "ú",
  "ü",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// La 'a' tiene más de 30 resultados con lo que se expande

// EXAPEND: a

const a_word = [
  "aá",
  "ab",
  "ac",
  "ad",
  "ae",
  "aé",
  "af",
  "ag",
  "ah",
  "ai",
  "aí",
  "aj",
  "ak",
  "al",
  "am",
  "an",
  "añ",
  "ao",
  "aó",
  "ap",
  "aq",
  "ar",
  "as",
  "at",
  "au",
  "aú",
  "aü",
  "av",
  "aw",
  "ax",
  "ay",
  "az",
  "á",
  "b",
  "c",
  "d",
  "e",
  "é",
  "f",
  "g",
  "h",
  "i",
  "í",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "ú",
  "ü",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Seguimos buscando consumiendo 'aa', 'aá' y en 'ab' tenemos más de 30... la expandimos

//EXAPEND: ab

const ab_word = [
  "abá",
  "abb",
  "abc",
  "abd",
  "abe",
  "abé",
  "abf",
  "abg",
  "abh",
  "abi",
  "abí",
  "abj",
  "abk",
  "abl",
  "abm",
  "abn",
  "abñ",
  "abo",
  "abó",
  "abp",
  "abq",
  "abr",
  "abs",
  "abt",
  "abu",
  "abú",
  "abü",
  "abv",
  "abw",
  "abx",
  "aby",
  "abz",
  "ac",
  "ad",
  "ae",
  "aé",
  "af",
  "ag",
  "ah",
  "ai",
  "aí",
  "aj",
  "ak",
  "al",
  "am",
  "an",
  "añ",
  "ao",
  "aó",
  "ap",
  "aq",
  "ar",
  "as",
  "at",
  "au",
  "aú",
  "aü",
  "av",
  "aw",
  "ax",
  "ay",
  "az",
  "á",
  "b",
  "c",
  "d",
  "e",
  "é",
  "f",
  "g",
  "h",
  "i",
  "í",
  "j",
  "k",
  "l",
  "m",
  "n",
  "ñ",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "ú",
  "ü",
  "v",
  "w",
  "x",
  "y",
  "z",
];
 */
