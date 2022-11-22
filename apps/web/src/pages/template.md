import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";

export default function Domains() {
return (

<div className="min-w-screen flex min-h-screen flex-col bg-white">
<Head>
<title>Pencil Domains</title>
<link rel="icon" href="./favicon.ico" />
</Head>
<Menu />
<a className="font-slim m-2 text-center text-3xl text-gray-900">
Handshake Blocks and Ranking Names.
</a>
<main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-7xl overflow-hidden rounded-lg py-2 py-2 px-4 text-center sm:p-2">
{/_ Content Goes Here _/}
</div>
</main>
<Footer />
</div>
);
}
