import Head from "next/head";
import { Analytics } from "ui";

export const Head = () => {
  return (
    <div className="shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl">
      <Head>
        <Analytics />
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
    </div>
  );
};
