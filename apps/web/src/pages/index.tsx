import Head from "next/head";
import { useState } from "react";
import { Footer } from "ui";

export default function Home() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();

  const getData = async () => {
    const res = await fetch(`https://e.hnsfans.com/api/names/${input}`);
    const json = await res.json();
    setData(json);
  };

  return (
    <div className="bg-white">
      <Head>
        <title>Pencil Domains</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-lg bg-white">
              <div className="px-4 py-5 text-center sm:p-6">
                <h1 className="text-3xl font-bold leading-tight text-gray-900">
                  <a
                    href="https://twitter.com/pencildomains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-yellow-500"
                  >
                    Pencil
                  </a>
                  <a
                    href="https://twitter.com/pencildomains"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-500"
                  >
                    Explorer
                  </a>{" "}
                  <a className="badge m-2 bg-blue-500 py-0 px-2 text-white">
                    Alpha 1.0.13
                  </a>
                  <p className="py-4 text-sm text-gray-500">
                    Block Explorer and Naming Tool for Handshake, the
                    decentralized, open, and extensible naming system for the
                    Internet.
                  </p>
                </h1>
                <div className="mt-2 max-w-xl text-sm text-gray-500"></div>
                <div className="mt-5">
                  <div className="mt-1">
                    <div className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-blue-500 shadow-xl hover:bg-white hover:text-blue-500 hover:shadow-md md:py-4 md:px-10 md:text-lg">
                      <svg-icon
                        _ngcontent-nameplace-c17=""
                        size="44"
                        type="handshake"
                        _nghost-nameplace-c5=""
                      >
                        <svg
                          _ngcontent-nameplace-c5=""
                          class="inverted"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          xmlns="http://www.w3.org/2000/svg"
                          width="44"
                          height="44"
                          stroke="#000"
                          stroke-width="0"
                          viewBox="0 0 38.012 39.702"
                          fill="none"
                        >
                          <path
                            d="M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z"
                            fill="#000"
                            fill-rule="evenodd"
                            id="Fill-1"
                          ></path>
                        </svg>
                      </svg-icon>
                    </div>

                    <input
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-blue-500 shadow-xl hover:bg-white hover:text-blue-500 hover:shadow-md md:py-4 md:px-10 md:text-lg"
                      type="text"
                      aria-label="Type & press enter ↵"
                      placeholder="Type & press enter ↵"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          console.log(getData());
                        }
                      }}
                    />
                  </div>
                  <div className="mx-auto mt-6 grid max-w-lg gap-5 md:hidden lg:max-w-xl lg:grid-cols-1">
                    <button
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-bold text-blue-500 shadow-md hover:bg-white hover:text-blue-500 hover:shadow-xl md:py-4 md:px-10 md:text-lg"
                      onClick={() => console.log(getData())}
                    >
                      Explore Now, avoid caplocks
                    </button>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="mt-1">
                    <textarea
                      id="about"
                      name="about"
                      rows={25}
                      className="focus:border-blue-500-500 focus:ring-blue-500-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                      value={JSON.stringify(data, null, 2)}
                      readOnly
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
