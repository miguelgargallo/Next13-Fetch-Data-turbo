{
  // show hour and minute locale
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}
export const Menu = () => {
  return (
    <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500">
      <div className="flex flex-row">
        <a
          href="https://hns.pencil.li"
          className="text-1xl flex flex-row items-center justify-center font-bold text-white"
        >
          <picture>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="25"
              viewBox="0 0 2344 678"
            >
              <defs>
                <linearGradient id="a" x1="0%" x2="100%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#B620E0"></stop>
                  <stop offset="16.68%" stop-color="#6236FF"></stop>
                  <stop offset="33.433%" stop-color="#0091FF"></stop>
                  <stop offset="49.949%" stop-color="#6DD400"></stop>
                  <stop offset="66.61%" stop-color="#F7B500"></stop>
                  <stop offset="83.281%" stop-color="#FA6400"></stop>
                  <stop offset="100%" stop-color="#E02020"></stop>
                </linearGradient>
                <linearGradient id="b" x1="100%" x2="0%" y1="50%" y2="50%">
                  <stop offset="0%" stop-color="#E02020"></stop>
                  <stop offset="16.719%" stop-color="#FA6400"></stop>
                  <stop offset="33.39%" stop-color="#F7B500"></stop>
                  <stop offset="50.051%" stop-color="#6DD400"></stop>
                  <stop offset="66.567%" stop-color="#0091FF"></stop>
                  <stop offset="83.32%" stop-color="#6236FF"></stop>
                  <stop offset="100%" stop-color="#B620E0"></stop>
                </linearGradient>
              </defs>
              <g
                fill="none"
                fill-rule="evenodd"
                transform="translate(-151 -173)"
              >
                <path
                  fill="url(#a)"
                  d="M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z"
                  transform="matrix(0 -1 -1 0 980 980)"
                ></path>
                <path
                  fill="url(#b)"
                  d="M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z"
                  transform="matrix(0 -1 -1 0 905.5 905.5)"
                ></path>
                <path
                  fill="url(#a)"
                  d="M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z"
                  transform="matrix(0 -1 -1 0 842.5 842.5)"
                ></path>
                <path
                  fill="url(#b)"
                  d="M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z"
                  transform="matrix(0 -1 -1 0 779 779)"
                ></path>
                <path
                  fill="url(#a)"
                  d="M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z"
                  transform="matrix(0 -1 -1 0 715.5 715.5)"
                ></path>
                <text
                  fill="#FFF"
                  font-family="Roboto, sans-serif"
                  font-size="500"
                  font-weight="500"
                >
                  <tspan x="993.25" y="697">
                    Pencil
                  </tspan>
                </text>
                <text
                  fill="#FFF"
                  font-family="Roboto, sans-serif"
                  font-size="100"
                  font-weight="500"
                >
                  <tspan x="690.95" y="829">
                    ©
                  </tspan>
                </text>
                <text
                  fill="#FFF"
                  font-family="Roboto, sans-serif"
                  font-size="75"
                  font-weight="500"
                >
                  <tspan x="2386.5" y="248">
                    TM
                  </tspan>
                </text>
              </g>
            </svg>
          </picture>
        </a>{" "}
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/">Explorer</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/domains">Domains</a>
        </button>
        <button className="rounded-xl py-2 px-4 font-bold text-white">
          <a href="/developer">Developer</a>
        </button>
      </div>
      <button className="hidden rounded-full bg-black py-2 px-4 text-xs font-bold text-white md:block">
        <a
          href="http://github.com/miguelgargallo/next13-Fetch-Data-turbo"
          target="_blank"
          rel="noopener noreferrer"
        >
          v1.4.2 Devs
        </a>
      </button>
      <button className="hidden py-2 px-4 font-bold text-white md:block">
        <a
          href="http://twitter.com/miguelgargallo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </button>
      <div
        className="mt-2"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <a
          href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden p-2 md:block"
        >
          <picture>
            <img
              src="https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social"
              alt="Landscape picture"
              width={100}
              height={20}
            />
          </picture>
        </a>
      </div>
      <button className="rounded-xl px-8 font-bold text-white hidden sm:block">
        <a href="/">
          {new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
          })}
        </a>
      </button>
    </div>
  );
};
