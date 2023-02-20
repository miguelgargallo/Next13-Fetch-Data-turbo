/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { Footer } from "ui";
import { Menu } from "ui";
import { SupportMenu } from "ui";
import { MenuCorporate } from "ui";

export default function SupportPP() {
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <Menu />

      <MenuCorporate />
      <SupportMenu />

      <a className="m-4 p-4 text-center text-xl font-bold text-black">
        Press Release 20 feb 2023
      </a>

      <main>
        <div className="d-md-flex flex-md-equal w-100 my-md-3 pl-md-3">
          <div className="bg-light mr-md-3 pt-md-5 px-md-5 overflow-hidden px-3 pt-3 text-left">
            <div className="my-3 p-3">
              <div className="text-center">
                <audio controls>
                  <source src="https://github.com/superdatas/blog-audios/blob/main/pencil-press-01.wav?raw=true" type="audio/wav" />
                </audio>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >Blockchain tech firm, Pencil Works, is taking a stand against plagiarism and theft of intellectual property within the Handshake community.</p>
              </div>
              <div className="text-left my-3">
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Over the past few months, the company has been engaging with the Spanish community and posing questions about the significance of software licenses. Unfortunately, it was discovered that some members of the community wants to take advantage of the open-source nature of the code in the future, using it for commercial purposes without giving credit to the developers.</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >This issue came to a head when a member of the community was found to be using logos that were similar to those of established companies, including trademarks that were not their own. Pencil Works recognizes the importance of protecting the integrity of the community and its members, and therefore will not be releasing its code publicly. However, the company is committed to educating the public and showcasing their work in other ways on the internet.</p>
              </div>
              <div>
                <p
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >The company is aware of the importance of community growth but believes that it is essential to protect its members and themselves. By preserving their code for their secure clients and company's future, Pencil Works is taking a responsible approach to open-source technology and setting a positive example for the Handshake community and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
