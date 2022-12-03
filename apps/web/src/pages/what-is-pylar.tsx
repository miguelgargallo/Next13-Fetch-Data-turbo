/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { MenuPylar } from "ui";
import { TitlePylar } from "ui";
import { ListPylar } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

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
        <ListPylar />
        
      </main>
      <Footer />
    </div>
  );
}
