/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { Menu } from "ui";
import { TitlePylar } from "ui";
import { Footer } from "ui";
import { MenuPylar } from "ui";

export default function Home() {
  console.log("✅ Pylar AI");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pylar AI by Pencil</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />
      <MenuPylar />
      <main>
      <TitlePylar />
        <div className="pylarDiv">
        <img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Fetch-Data-turbo/main/Data.pylar/Images/Pylar-v1.0/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLpA_RealESRGAN_x4plus.jpeg"
            alt="Pylar AI"
          />
          <img
            className="pylarDimension"
            src="https://raw.githubusercontent.com/miguelgargallo/Next13-Fetch-Data-turbo/main/Data.pylar/Images/Pylar-v1.1/A_photography_of_the_earth__from_the_moon_on_a_fis_AAAGOLjw_RealESRGAN_x4plus.jpeg"
            alt="Pylar AI"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
