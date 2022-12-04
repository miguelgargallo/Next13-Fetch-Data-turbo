import { motion } from "framer-motion";

export const ListPylar = () => {
  return (
    <div className="mt-8 flex flex-row justify-center">
      <div className="flex w-3/4 flex-col">
        <h2 className="text-2xl font-bold">Welcome to the Pylar AI Blog</h2>
        <p className="mt-4 text-lg">
          Pylar AI is:
          <ul className="list-inside list-disc">
            <li>Generative art results</li>
            <a>
              What is generative art? Generative art is a form of art that uses
              a computer to create art. The computer is programmed to create art
              based on a set of rules.
            </a>
            <p>&nbsp;</p>
            <li>Promt Engineering design</li>
            <a>
              Promt Engineering is a form of engineering that uses a computer to
              create engineering. The computer is programmed to create
              engineering based on a set of rules.
            </a>
            <p>&nbsp;</p>
            <li>StableDiffusion 2.0 modified</li>
            <a>
              StableDiffusion 2.0 is a computer program that is used to create
              art based on a set of rules.
            </a>
            <p>&nbsp;</p>
          </ul>
        </p>
      </div>
    </div>
  );
};
