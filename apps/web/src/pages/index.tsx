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
    <div
      className="bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white mx-auto w-auto bg-white px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="bg-white text-center">
          <h1 className="bg-white text-4xl font-bold tracking-tight text-black shadow-sm sm:text-5xl md:text-6xl">
            Welcome to
            <a
              className="hover:text blue-900 font-extrabold text-blue-700"
              href="https://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp;HNS Pencil Search!
            </a>
          </h1>
          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            Search for your favorite HNS domains!
          </p>
        </div>
        <div className="mx-auto mt-6 grid max-w-lg gap-5 lg:max-w-xl lg:grid-cols-2">
          <input
            className="
            flex w-full
            items-center
            justify-center
            rounded-md border
            border-transparent
            bg-white px-8 py-3
            text-base font-bold
            text-black shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl
            md:py-4 md:px-10 md:text-lg"
            type="text"
            aria-label="Filter names"
            placeholder="Filter names..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="
            flex w-full
            items-center
            justify-center
            rounded-md border
            border-transparent
            bg-white px-8 py-3
            text-base font-bold
            text-black shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl
            md:py-4 md:px-10 md:text-lg"
            onClick={getData}
          >
            Get Results
          </button>
        </div>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <pre>{JSON.stringify(data, null, 6)}</pre>
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
