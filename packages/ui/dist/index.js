"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button,
  Darkfooter: () => Darkfooter,
  Footer: () => Footer
});
module.exports = __toCommonJS(src_exports);

// src/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Button = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "rounded-md ",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
      href: "https://turbo.build/repo/docs",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white no-underline hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-300 md:py-3 md:px-10 md:text-lg md:leading-6",
        children: [
          "Read the docs",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent",
            children: "\u2192"
          })
        ]
      })
    })
  });
};

// src/Footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Footer = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", {
    className: "bg-white py-8 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
              href: "https://twitter.com/miguelgargallo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hover:text-blue text-indigo-600",
              children: "Miguel Gargallo"
            }),
            "."
          ]
        })
      }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("a", {
            children: [
              "2022 \xA9",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-blue text-indigo-600",
                children: "Pylar AI creative ML license"
              }),
              "."
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", {
            className: "mt-2",
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
                    src: "https://vercel.com/button",
                    alt: "Landscape picture",
                    width: 75,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
                href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", {
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

// src/Darkfooter.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Darkfooter = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("footer", {
    className: "bg-black py-8 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", {
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", {
          className: "text-white",
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
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
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("a", {
            className: "text-white",
            children: [
              "2022 \xA9",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-blue text-blue-600",
                children: "Pylar AI creative ML license"
              }),
              "."
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", {
            className: "mt-2",
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", {
                    src: "https://vercel.com/button",
                    alt: "Landscape picture",
                    width: 75,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", {
                    src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                    alt: "Landscape picture",
                    width: 40,
                    height: 20
                  })
                })
              }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("a", {
                href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "p-4",
                children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("picture", {
                  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("img", {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Darkfooter,
  Footer
});
