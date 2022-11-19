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

// src/Footer.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs2("footer", {
    className: "bg-black py-8 text-center",
    children: [
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          className: "text-white",
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ jsx2("a", {
              href: "https://twitter.com/miguelgargallo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-blue-600",
              children: "Miguel Gargallo"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ jsxs2("div", {
        children: [
          /* @__PURE__ */ jsxs2("a", {
            className: "text-white",
            children: [
              "2022 \xA9",
              " ",
              /* @__PURE__ */ jsx2("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-blue text-blue-600",
                children: "Pylar AI creative ML license"
              }),
              "."
            ]
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "mt-2",
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ jsx2("a", {
                href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ jsx2("picture", {
                  children: /* @__PURE__ */ jsx2("img", {
                    src: "https://vercel.com/button",
                    alt: "Landscape picture",
                    width: 75,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ jsx2("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ jsx2("picture", {
                  children: /* @__PURE__ */ jsx2("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ jsx2("a", {
                href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ jsx2("picture", {
                  children: /* @__PURE__ */ jsx2("img", {
                    src: "https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social",
                    alt: "Landscape picture",
                    width: 100,
                    height: 20
                  })
                })
              })
            ]
          })
        ]
      })
    ]
  });
};
export {
  Button,
  Footer
};
