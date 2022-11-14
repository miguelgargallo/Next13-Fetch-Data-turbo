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
      <main className="mx-auto w-auto bg-white bg-white px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="bg-white text-center"></div>
        <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-xl lg:grid-cols-1">
          <h1 className="bg-white text-center text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
            Pencil
            <a
              className="hover:text blue-900 font-extrabold text-blue-700"
              href="https://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;Explorer
            </a>
          </h1>
        </div>
        <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-xl lg:grid-cols-1">
          <input
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-black shadow-xl hover:bg-white hover:text-black hover:shadow-md md:py-4 md:px-10 md:text-lg"
            type="text"
            aria-label="Type and press enter, avoid caplocks"
            placeholder="Type and press ente, avoid caplocks"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                getData();
              }
            }}
          />
        </div>
        <div
          className="
        mx-auto mt-6 grid max-w-lg gap-5 md:hidden lg:max-w-xl lg:grid-cols-1"
        >
          <button
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-bold text-black shadow-md hover:bg-white hover:text-black hover:shadow-xl md:py-4 md:px-10 md:text-lg"
            onClick={getData}
          >
            Search Results
          </button>
        </div>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <div className="rounded-lg shadow-lg overflow-hidden sm:mx-1 sm:flex">
            <div className="p-4 bg-white">
              <p className="text-base leading-6 font-semibold text-black">
              </p>
              <p className="mt-1 text-lg leading-5 font-semibold text-black">
              .{data.name}
      
              </p>
            </div>
          </div> 
        </div>
        <div className="snap-y snap-mandatory">
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          
          <pre>{JSON.stringify(data, null, 6)}</pre>
          <div>
          </div>
        </div>
        </div>
          </main>
      <footer className="mx-auto w-auto bg-white px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="text-center">
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Made with ❤️ by{" "}
            <a
              className="hover:text blue-900 font-extrabold text-blue-700"
              href="https://twitter.com/miguelgargallo"
              target="_blank"
              rel="noopener noreferrer"
            >
              @miguelgargallo
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
