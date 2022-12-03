/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { MenuPylar } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";

export default function Home() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuPylar />
      <main>
        <TitlePylar />
        <a
          className="flex items-center justify-center py-8"
          href="https://huggingface.co/spaces/superdatas/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            View License
          </button>
        </a>
      </main>
      <Footer />
    </div>
  );
}
