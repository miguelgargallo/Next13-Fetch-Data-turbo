/* eslint-disable react/jsx-no-comment-textnodes */ import { useState } from "react";
import { GradientWhite } from "ui";
import { GradientDiamond } from "ui";
import { GradientGold } from "ui";
import { GradientSilver } from "ui";
import { GradientBronze } from "ui";

export default function Fetcher() {
  const [word, setWord] = useState<string>("");
  const [definition, setDefinition] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchDefinition = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const data = await response.json();
      setDefinition(data[0].meanings[0].definitions[0].definition);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);

    if (definition === "") {
      return null;
    }
    return <p>{definition}</p>;
  };

  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-row justify-center">
          <div className="flex justify-center sm:hidden">
            <div className="mt-6 py-2 text-center">
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">TLD</th>
                    <th className="px-4 py-2">Definition Lenght</th>
                    <th className="px-4 py-2">Short or Long definition</th>
                    <th className="px-4 py-2">Word Lenght</th>
                    <th className="px-4 py-2">Short or Long word</th>
                    <th className="px-4 py-2">Definition</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">
                      <input
                        type="text"
                        className="m-2 rounded-md border border-gray-300 px-4 py-2 text-black"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        onClick={fetchDefinition}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            fetchDefinition();
                          }
                        }}
                      />
                      <button
                        className="m-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                        onClick={fetchDefinition}
                        onKeyPress={(e) => {
                          if (e.key === "Enter") {
                            fetchDefinition();
                          }
                        }}
                      >
                        Get Punctuation
                      </button>
                    </td>
                    <td className="border px-4 py-2">{definition.length}</td>
                    <td className="border px-4 py-2">
                      {definition.split(" ").length < 10 ? (
                        <p className="font-regular py-8 text-center text-xl text-black">
                          This is a short definition
                        </p>
                      ) : (
                        <p className="font-regular py-8 text-center text-xl text-black">
                          This is a long word
                        </p>
                      )}
                    </td>
                    <td className="border px-4 py-2">{word.length}</td>
                    <td className="border px-4 py-2">
                      {word.length < 7 ? (
                        <p className="font-regular py-8 text-center text-xl text-black">
                          This is a short word
                        </p>
                      ) : (
                        <p className="font-regular py-8 text-center text-xl text-black">
                          This is a long word
                        </p>
                      )}
                    </td>
                    <td className="border px-4 py-2">
                      {definition && (
                        <p className="font-regular py-8 text-center text-xl text-black">
                          {loading && <p>Loading...</p>}
                          {definition}
                        </p>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className="flex flex-row justify-center">
          <div className="flex justify-center sm:hidden">
            <div className="mt-6 py-2 text-center">
              <input
                type="text"
                className="m-2 rounded-md border border-gray-300 px-4 py-2 text-black"
                value={word}
                onChange={(e) => setWord(e.target.value)}
                onClick={fetchDefinition}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    fetchDefinition();
                  }
                }}
              />
              <button
                className="m-2 rounded-md bg-blue-500 px-4 py-2 text-white"
                onClick={fetchDefinition}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    fetchDefinition();
                  }
                }}
              >
                Get Punctuation
              </button>
              {word.length < 7 ? (
                <p className="font-regular py-8 text-center text-xl text-black">
                  This is a short word ({word.length})
                </p>
              ) : (
                <p className="font-regular py-8 text-center text-xl text-black">
                  This is a long word
                </p>
              )}
              {definition.split(" ").length < 10 ? (
                <p className="font-regular py-8 text-center text-xl text-black">
                  This is a short definition
                </p>
              ) : (
                <p className="font-regular py-8 text-center text-xl text-black">
                  This is a long word ({definition.length})
                </p>
              )}
              {definition && (
                <p className="font-regular py-8 text-center text-xl text-black">
                  {loading && <p>Loading...</p>}
                  {definition}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center sm:hidden">
          <div className="mt-6 py-2 text-center">
            <div className="mt-1 flex flex-row py-2">
              {word.length > 0 && word.length < 8 && (
                <div>
                  <a>
                    {word.length > 0 && word.length < 4 && (
                      <div>
                        <a className="tld_diamond">
                          {" "}
                          <div
                            /*                               animate={{ scale: [1, 1.1, 1] }}
                              transition={{ ease: "easeOut", duration: 2 }}
 */ className="tld_diamond_div"
                          >
                            <a className="tld_title_diamond">.{word}</a>
                            <GradientDiamond /> is a 💎 Diamond TLD.
                            <p className="tld_white py-8">
                              <p>
                                {word.indexOf(word) !== -1
                                  ? "Is a valid TLD, number " +
                                    word.indexOf(word)
                                  : "Could be a valid"}
                              </p>
                              <a
                                href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-yellow-500"
                              >
                                {" "}
                                <a className="hyperlink_issue">
                                  Register Today
                                </a>
                              </a>
                              <p>and has {word.length} characters</p>
                            </p>{" "}
                          </div>
                        </a>
                      </div>
                    )}
                  </a>
                  <a>
                    {word.length > 3 && word.length < 6 && (
                      <div>
                        <a className="tld_gold">
                          {" "}
                          <div className="tld_gold_div">
                            <a className="tld_title_gold">.{word}</a>
                            <GradientGold /> a 🥇 Gold TLD.
                            <p className="tld_white py-8">
                              <p>
                                {word.indexOf(word) !== -1
                                  ? "Is a valid TLD, number " +
                                    word.indexOf(word)
                                  : "Could be a valid"}
                              </p>
                              <a
                                href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-yellow-500"
                              >
                                {" "}
                                <a className="hyperlink_issue">
                                  Register Today
                                </a>
                              </a>
                              <p>and has {word.length} characters</p>
                            </p>{" "}
                          </div>
                        </a>
                      </div>
                    )}
                  </a>
                  <a>
                    {word.length > 5 && word.length < 7 && (
                      <div>
                        <a className="tld_silver">
                          {" "}
                          <div className="tld_silver_div">
                            <a className="tld_title_silver">.{word}</a>
                            <GradientSilver /> a 🥈 Silver TLD.
                            <p className="tld_white py-8">
                              <p>
                                {word.indexOf(word) !== -1
                                  ? "Is a valid TLD, number " +
                                    word.indexOf(word)
                                  : "Could be a valid"}
                              </p>
                              <a
                                href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-yellow-500"
                              >
                                {" "}
                                <a className="hyperlink_issue">
                                  Register Today
                                </a>
                              </a>
                              <p>and has {word.length} characters</p>
                            </p>
                          </div>
                        </a>
                      </div>
                    )}
                  </a>
                  <a>
                    {word.length > 6 && word.length < 8 && (
                      <div>
                        <a className="tld_bronze">
                          {" "}
                          <div className="tld_bronze_div">
                            <a className="tld_title_bronze">.{word}</a>
                            <GradientBronze /> a 🥉 Bronze TLD.
                            <p className="tld_white py-8">
                              <p>
                                {word.indexOf(word) !== -1
                                  ? "Is a valid TLD, number " +
                                    word.indexOf(word)
                                  : "Could be a valid"}
                              </p>
                              <a
                                href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-yellow-500"
                              >
                                {" "}
                                <a className="hyperlink_issue">
                                  Register Today
                                </a>
                              </a>
                              <p>and has {word.length} characters</p>
                            </p>{" "}
                          </div>
                        </a>
                      </div>
                    )}
                  </a>
                </div>
              )}
            </div>

            <a>
              {word.length > 7 && (
                <div className="tld_white_div">
                  <a className="tld_title_white">.{word}</a>
                  <GradientWhite /> is a 🎁 New TLD.
                  <p className="tld_white py-8">
                    <p>
                      {word.indexOf(word) !== -1
                        ? "Is a valid TLD, number " + word.indexOf(word)
                        : "Could be a valid"}
                    </p>
                    <a
                      href="https://github.com/miguelgargallo/Next13-Fetch-Data-turbo/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-yellow-500"
                    >
                      {" "}
                      <a className="hyperlink_issue">Register Today</a>
                    </a>
                    <p>and has {word.length} characters</p>
                  </p>
                </div>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
