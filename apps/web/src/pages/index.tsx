import Head from "next/head";
import { useState } from "react";
import Style from "./index.module.css";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

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
            <div className="overflow-hidden rounded-lg bg-white shadow">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  <a
                    href="https://hns.pencil.li"
                    className="hover:text-blue text-indigo-600"
                  >
                    Pencil Explorer
                  </a>{" "}
                </h1>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <h4 className="text-2xl font-light leading-tight text-gray-900">
                    Pencil Explorer is a tool to explore the Handshake
                    blockchain, and to find out more about the domains you own.
                  </h4>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="about"
                      id="about"
                      aria-label="Type and press enter, avoid caplocks"
                      placeholder="Type and press enter, avoid caplocks"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-black shadow-xl hover:bg-white hover:text-black hover:shadow-md md:py-4 md:px-10 md:text-lg"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                  </div>
                  <div className="mt-2">
                    <button
                      type="button"
                      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={getData}
                    >
                      Search
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Domain Info
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Domain info will appear here."
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
    </div>
  );
}
