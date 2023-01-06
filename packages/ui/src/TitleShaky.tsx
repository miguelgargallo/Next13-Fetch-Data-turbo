import { motion } from "framer-motion";

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
      </motion.div>
    </div >
  );
};