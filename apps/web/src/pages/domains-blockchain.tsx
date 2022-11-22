import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { Card } from "ui";
import { DomainsBlocks } from "ui";
import { MenuDomains } from "ui";

export default function DomainsBlockchain() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuDomains />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Pencil Domains, The Fastest Domains.™
      </a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DomainsBlocks />
        <Card />
      </main>
      <Footer />
    </div>
  );
}
