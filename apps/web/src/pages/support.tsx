/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";
import { MenuCorporate } from "ui";
import { SupportMenu } from "ui";

export default function Support() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuCorporate />
      <SupportMenu />
      <a className="m-4 p-4 text-center text-xl font-bold text-black"></a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg py-2 py-2 px-4 text-center sm:p-2">
          <div className="mt-6 py-2 text-center"></div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
