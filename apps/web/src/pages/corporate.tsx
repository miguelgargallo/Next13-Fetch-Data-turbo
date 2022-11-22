/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";
import { MenuCorporate } from "ui";

export default function Home() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <Menu />
      <MenuCorporate />

      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        25819 names on this amazing Handshake Blocks and Ranking Names portal.
      </a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <a href="/developer">
              <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                Developer
              </button>
            </a>
          </div>
          <div className="col-span-1">
            <a href="/office">
              <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                Office
              </button>
            </a>
          </div>
          <div className="col-span-1">
            <a href="/support">
              <button className="rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-100">
                Support
              </button>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
