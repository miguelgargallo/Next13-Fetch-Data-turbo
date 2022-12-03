/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { MenuPylar } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";

export default function Home() {
  console.log("✅ Pylar AI");
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
        <h1 className="py-8 text-center text-4xl font-bold">
          <span className="text-blue-500">Py</span>thon{" "}
          <span className="text-blue-500">L</span>earning{" "}
          <span className="text-blue-500">A</span>rtificial{" "}
          <span className="text-blue-500">R</span>esearch&trade;{" "}
          <span className="text-black"> </span>
          <span className="text-blue-500">A</span>rtificial{" "}
          <span className="text-blue-500">I</span>ntelligence{" "}
        </h1>
      </main>
      <Footer />
    </div>
  );
}
