/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { Footer } from "ui";
import { motion } from "framer-motion";

export default function Pylar() {
console.log("✅ Pylar AI");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <main>
        <div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              type: "spring",
              stiffness: 120,
            }}
            className="flex flex-col items-center justify-center text-center pt-10 pb-10"
          >
            <h1 className="text-4xl font-bold">Pylar AI</h1>
            <p className="text-xl font-normal">Pencil Domains</p>
          </motion.div>
          <h2
          className="text-4xl font-bold text-center text-gray-800 py-8"
          >
            Pylar AI
          </h2>
          <p className="m-2 text-center text-xl font-bold text-black">
            A StableDiffusion 2.0 from HugginFace modified by Pencil Domains
          </p>
          <p className="text-center text-xl font-bold text-black">
            The Fastest Domains. ™
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
