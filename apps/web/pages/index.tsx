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
    <main className="m-8 space-x-4 p-8 text-white">
      <h1 className="m-8 p-8 text-white">
        Welcome to
        <a
          className=""
          href="https://twitter.com/pencildomains"
          target="_blank"
          rel="noopener noreferrer"
        >
          &nbsp; Pencil Explorer!
        </a>
      </h1>
      <div className="mx-auto mt-6 grid hidden max-w-lg gap-5 space-x-4 md:inline lg:max-w-xl lg:grid-cols-2">
        <input
          className="p-1 text-black"
          type="text"
          aria-label="Filter names"
          placeholder="Filter names..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          className="
          
        "
          onClick={getData}
        >
          Get Results
        </button>
      </div>

      <div className="m-8">
        <a className="text-white">{JSON.stringify(data, null, 2)}</a>
      </div>

      <footer className="">
        <div className="">
          <p className="">
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
    </main>
  );
}