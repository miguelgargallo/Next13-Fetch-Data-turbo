import React, { useState } from 'react';
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
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing{' '}
          <code>pages/index.js</code>
        </p>

        <div>
          <div>
            <h3>Input</h3>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={getData}>Get Data</button>
          </div>
          <div>
            <h3>Data</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
        </a>
      </footer>
    </div>
  )
}
