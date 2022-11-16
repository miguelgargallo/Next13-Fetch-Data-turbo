// src/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Button = () => {
  return /* @__PURE__ */ jsx("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ jsx("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ jsxs("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ jsx("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Head.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Head = () => {
  /* @__PURE__ */ jsx2("div", {
    children: /* @__PURE__ */ jsxs2(Head, {
      children: [
        /* @__PURE__ */ jsx2("title", {
          children: "Pencil Domains"
        }),
        /* @__PURE__ */ jsx2("link", {
          rel: "icon",
          href: "/favicon.ico"
        })
      ]
    })
  });
};

// src/Search.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Search = () => {
  /* @__PURE__ */ jsx3("div", {
    className: "mt-1",
    children: /* @__PURE__ */ jsx3("input", {
      className: "flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-center text-base font-bold text-black shadow-xl hover:bg-white hover:text-black hover:shadow-md md:py-4 md:px-10 md:text-lg",
      type: "text",
      "aria-label": "Type & press enter \u21B5",
      placeholder: "Type & press enter \u21B5",
      value: input,
      onChange: (e) => setInput(e.target.value),
      onKeyPress: (e) => {
        if (e.key === "Enter") {
          getData();
        }
      }
    })
  });
};
export {
  Button,
  Head,
  Search
};
