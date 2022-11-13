import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const getData = async () => {
    const res = await fetch(`https://e.hnsfans.com/api/names/${input}`)
    const json = await res.json()
    setData(json)
  }
  return (
    <div>
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to,
          <a href="https://twitter.com/pencildomains"
            target="_blank"
            rel="noopener noreferrer"
          >
            HNS Pencil Search!</a>
        </h1>
        <div>
          <div>
            <h3>Down below please, input whatever you want.</h3>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={getData}>Get Results</button>
          </div>
          <div>
            <h3>Data</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </main>
      <footer>
        <a
          href="https://twitter.com/miguelgargallo"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is developed with the latest possible technologies.
          <ul>
            <li>Next 13</li>
            <li>React 18</li>
            <li>Turbo 1.6.3</li>
            <li>Node 19</li>
          </ul>
        </a>
        <a> 2022 © Pylar AI creative ML license, All Rights Reserved, developed on Sunday 13th Nov in 3 hours by Miguel Gargallo.</a>
      </footer>
    </div>
  )
}