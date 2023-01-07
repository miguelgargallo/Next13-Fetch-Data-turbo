import { motion } from "framer-motion";
import Link from "next/link";

export const TitleShaky = () => {
  return (
    <div>
      <h1 className="py-8 text-center text-5xl font-bold">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          S
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
        >
          h
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.5 }}
        >
          a
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          k
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.5 }}
        >
          y
        </motion.span>
        <a> </a>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.5 }}
        >
          A
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.5 }}
        >
          p
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.5 }}
        >
          p
        </motion.span>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="py-8 text-center text-2xl font-bold text-gray-900"
      >
        <h2
          className="py-8 text-center text-3xl font-bold text-gray-900"
        >The Explorer App</h2>
        <p>Find any domain info in seconds!</p>
      </motion.div>
      <div className="container mx-auto">
        <div className="flex flex-row items-center justify-center">
          <div className="col-span-2 py-8 text-center text-2xl font-bold text-gray-900 p-2">
            <img
              src="https://pbs.twimg.com/media/Fl0BlptXwAAkWuR?format=jpg&name=large"
              alt="Shaky App"
              width={500}
              height={500}
              className="rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
          <div className="col-span-2 py-8 text-center text-2xl font-bold text-gray-900 p-2">
            <img
              src="https://pbs.twimg.com/media/Fl0Bn_oWIAs9HWQ?format=jpg&name=large"
              alt="Shaky App"
              width={500}
              height={500}
              className="rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            />
          </div>
        </div >
      </div >
      <div className="flex flex-row items-center justify-center">
        <div className="col-span-2 py-8 text-center text-2xl font-bold text-gray-900 p-2">
          <img
            src="https://pbs.twimg.com/media/Fl0BsnWWIA8-1Ky?format=jpg&name=large"
            alt="Shaky App"
            width={500}
            height={500}
            className="rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </div>
        <div className="col-span-2 py-8 text-center text-2xl font-bold text-gray-900 p-2">
          <img
            src="https://pbs.twimg.com/media/Fl0BuWIWIBEeGKF?format=jpg&name=large"
            alt="Shaky App"
            width={500}
            height={500}
            className="rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1.5 }}
        className="py-8 text-center text-2xl font-bold text-gray-900"
      >
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <a
            href="https://drive.google.com/drive/folders/1SbWpymjRzmQMSFwP7AT5vb4zeCIxL0FE?usp=share_link"
            download="Google Drive"
            className="text-white"
            target="_blank"
            rel="noreferrer"
          >
            Download - Google Drive
          </a>
        </button>
        <p className="text-sm m-2 p-2 text-blue-500">By clicking the button, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use and Data Law Regulation Locally.</p>

        <div className="flex flex-row items-center justify-center">
          <h2 className="py-8 text-center text-3xl font-bold text-gray-900"
          >Check MD2 File</h2>
        </div>
        <h4 className="py-8 text-center text-sm font-bold text-gray-900">
          Disclaimer, when you open on Windows there is a prompt, say yes, open anywhay option, here down below we scanned publicly the program, we invite you to do so If you want!</h4>
        <div className="flex flex-row items-center justify-center">
          <button className="m-2 bg-green-300 hover:bg-green-700 text-white font-bold p-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a
              href="https://opentip.kaspersky.com/366FE0D9ECCB1B3FC99B650DF22FE8EDBAE5E6414A0AD147E164FA1E6C380259/results?tab=upload"
              download="Google Drive"
              className="text-black text-sm justify-center items-center flex"
              target="_blank"
              rel="noreferrer"
            >
              ✅ -kaspersky 🛡️ 0 Vulnerarivilities
            </a>
          </button>
          <button className="m-2 bg-green-300 hover:bg-green-700 text-white font-bold p-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a
              href="https://www.hybrid-analysis.com/sample/366fe0d9eccb1b3fc99b650df22fe8edbae5e6414a0ad147e164fa1e6c380259"
              download="Google Drive"
              className="text-black text-sm justify-center items-center flex"
              target="_blank"
              rel="noreferrer"
            >
              ✅ Hybrid Analysis 🛡️ 100% Clean
            </a>
          </button>
          <button className="m-2 bg-green-300 hover:bg-green-700 text-white font-bold p-2 rounded-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            <a
              href="https://metadefender.opswat.com/results/file/bzIzMDEwN05YcXRraEJQSE1vREhXOFN1Z0U/regular/overview"
              download="Google Drive"
              className="text-black text-sm justify-center items-center flex"
              target="_blank"
              rel="noreferrer"
            >
              ✅ MetaDefender 🛡️ 0 Suspicious Activites
            </a>
          </button>
        </div>
      </motion.div>

    </div>
  );
};