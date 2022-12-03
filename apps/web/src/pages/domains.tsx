import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { TitleExplorer } from "ui";
import { Card } from "ui";
import { DomainsAll } from "ui";
import { MenuDomains } from "ui";

export default function Domains() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuDomains />
      <TitleExplorer />
      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Pencil Domains, The Fastest Domains.™
      </a>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <DomainsAll />
        <Card />
      </main>
      <Footer />
    </div>
  );
}
