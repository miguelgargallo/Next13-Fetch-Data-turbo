import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { MenuDevs } from "ui";
import { MenuCorporate } from "ui";

export default function DeveloperLaunch() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuCorporate />

      <MenuDevs />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Every reason to turn your TLD into a Business.™
      </a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <a className="m-4 p-4 text-center text-xl font-bold text-black">
            We do not use emails. I agree Pencil Developer Program License
            Agreement.
          </a>
          <div className="m-4 p-4 text-center text-xl font-bold text-black">
            <button
              className="shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6"
              onClick={() => {
                window.open("https://twitter.com/pencildomains");
              }}
            >
              Direct Message
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
