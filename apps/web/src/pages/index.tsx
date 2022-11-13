import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await fetch(`https://e.hnsfans.com/api/names/${input}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white dark:bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto w-auto bg-white px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <div className="text-center">
          <h1 className="hidden text-4xl font-bold tracking-tight text-black shadow-sm sm:text-5xl md:inline md:text-6xl">
          Welcome to
            <a
              className="hover:text blue-900 hidden font-extrabold text-blue-700 md:inline"
              href="https://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; Pencil Explorer!
            </a>
          </h1>

          <h1 className="text-4xl font-bold tracking-tight text-black shadow-sm sm:text-5xl md:hidden md:text-6xl">
          Welcome to
            <a
              className="hover:text blue-900 font-extrabold text-blue-700 md:hidden"
              href="https://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; Pencil Explorer!
            </a>
          </h1>
        </div>

        <div className="mx-auto mt-6 grid hidden max-w-lg gap-5 md:inline lg:max-w-xl lg:grid-cols-2">
          <input
            className="
            flex hidden
            w-full
            items-center
            justify-center rounded-md
            border
            border-transparent bg-white px-8
            py-3 text-base
            font-bold text-black
            shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl md:inline md:py-4
            md:px-10 md:text-lg"
            type="text"
            aria-label="Filter names"
            placeholder="Filter names..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            className="
            flex hidden
            w-full
            items-center
            justify-center rounded-md
            border
            border-transparent bg-white px-8
            py-3 text-base
            font-bold text-black
            shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl md:inline md:py-4
            md:px-10 md:text-lg"
            onClick={getData}
          >
            Get Results
          </button>
        </div>

        <div className="mx-auto mt-6 grid max-w-lg gap-5 md:hidden lg:max-w-xl lg:grid-cols-2">
          <input
            className="
            flex
            w-full
            items-center
            justify-center rounded-md
            border
            border-transparent bg-white px-8
            py-3 text-base
            font-bold text-black
            shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl md:hidden md:py-4
            md:px-10 md:text-lg"
            type="text"
            aria-label="Filter names"
            placeholder="Filter names..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="
            flex
            w-full
            items-center
            justify-center rounded-md
            border
            border-transparent bg-white px-8
            py-3 text-base
            font-bold text-black
            shadow-sm
            hover:bg-white
            hover:text-black
            hover:shadow-xl md:hidden md:py-4
            md:px-10 md:text-lg"
            onClick={getData}
          >
            Get Results
          </button>
        </div>

        <div className="mx-auto mt-6 hidden sm:inline">
          <div className="">
            <pre>{JSON.stringify(data, null, 6)}</pre>
          </div>
        </div>

        <div className="mx-auto mt-6 sm:hidden">
          <div className="">
            <p>{JSON.stringify(data, null, 6)}</p>
          </div>
        </div>
      </main>
      <footer className="hidden md:inline">
        <div className="">
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

      <footer className="md:hidden">
        <div className="">
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

          <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
            <a
              className="hover:text blue-900 font-extrabold text-blue-700"
              href="https://twitter.com/pencildomains"
              target="_blank"
              rel="noopener noreferrer"
            >
              @pencildomains
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
