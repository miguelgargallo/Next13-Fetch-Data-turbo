import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { MenuDevs } from "ui";

export default function Developer() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuDevs />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Every reason to turn your TLD into a Business.™
      </a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="text-2xl font-bold text-gray-800">
              Developers cut 75% Pencil 25% Every SLDs sell.
            </h3>
            <h3 className="text-2xl font-bold text-gray-800">
              Revenue every 80$ or in $HNS on Tuesdays.
            </h3>
            <h3 className="text-2xl font-bold text-gray-800">
              Send the TLD & Contact Twitter now.
            </h3>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
