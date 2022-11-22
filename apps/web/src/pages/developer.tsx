import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { MenuDevs } from "ui";
import { MenuCorporate } from "ui";

export default function Developer() {
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
        <div className="m-2 rounded-lg bg-white p-4 shadow-md">
          <h3 className="text-2xl font-bold text-black">Pencil Domains</h3>
          <p className="text-gray-600">
            Pencil Domains is a decentralized domain name system (DNS) that
            allows you to register your own TLDs and subdomains.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 py-8">
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="text-2xl font-bold text-black">Developers cut</h3>
            <p className="text-gray-600">
              Developers cut 75% Pencil 25% Every SLDs sell.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="text-2xl font-bold text-black">Revenue Tuesdays</h3>
            <p className="text-gray-600">
              Revenue every 80$ or in $HNS on Tuesdays.
            </p>
          </div>
          <div className="rounded-lg bg-white p-4 shadow-md">
            <h3 className="text-2xl font-bold text-black">Send the TLD</h3>
            <p className="text-gray-600">Send the TLD & Contact Twitter now.</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <iframe
            width="1120"
            height="630"
            src="https://www.youtube.com/embed/Kxh3C1m4j-k"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="shadow-bg m-12 w-full rounded-lg bg-black p-4 shadow-md hover:shadow-2xl"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}
