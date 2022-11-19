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
    <div className="container">
      <Head>
        <title>Handshake Name Lookup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">Handshake Name Lookup</h1>

        <p className="description">
          Enter a Handshake name to see its owner and value.
        </p>

        <div className="grid">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={getData}>Lookup</button>
        </div>
        
        {data && (
          <div className="grid">
            <div>Owner: {data.owner}</div>
            <div>Value: {data.value}</div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
