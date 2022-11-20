import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { MenuDevs } from "ui";

export default function DeveloperAgreement() {
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

      </main>
      <Footer />
    </div>
  );
}
