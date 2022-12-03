import { motion } from "framer-motion";

export const TitlePylar = () => {
  return (
    <div>
      <h1 className="py-8 text-center text-5xl font-bold">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          P
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
        >
          y
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1.5 }}
        >
          l
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1.5 }}
        >
          a
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.5 }}
        >
          r&trade;
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          &nbsp;
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.5 }}
        >
          A
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5 }}
        >
          I
        </motion.span>
      </h1>
      <motion.h2
        className="py-8 text-center text-4xl font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.5 }}
      >
        <span className="text-blue-500">Py</span>thon{" "}
        <span className="text-blue-500">L</span>earning{" "}
        <span className="text-blue-500">A</span>rtificial{" "}
        <span className="text-blue-500">R</span>esearch&trade;{" "}
        <span className="text-black"> </span>
        <span className="text-blue-500">A</span>rtificial{" "}
        <span className="text-blue-500">I</span>ntelligence{" "}
      </motion.h2>
    </div>
  );
};
