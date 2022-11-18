var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/@swc/helpers/lib/_extends.js
var require_extends = __commonJS({
  "../../node_modules/@swc/helpers/lib/_extends.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _extends;
    function _extends() {
      return extends_.apply(this, arguments);
    }
    function extends_() {
      extends_ = Object.assign || function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      };
      return extends_.apply(this, arguments);
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_interop_require_default.js
var require_interop_require_default = __commonJS({
  "../../node_modules/@swc/helpers/lib/_interop_require_default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireDefault;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }
});

// ../../node_modules/@swc/helpers/lib/_interop_require_wildcard.js
var require_interop_require_wildcard = __commonJS({
  "../../node_modules/@swc/helpers/lib/_interop_require_wildcard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireWildcard;
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _getRequireWildcardCache(nodeInterop1) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop1);
    }
  }
});

// ../../node_modules/next/dist/shared/lib/side-effect.js
var require_side_effect = __commonJS({
  "../../node_modules/next/dist/shared/lib/side-effect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = SideEffect;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _react = _interop_require_wildcard(__require("react"));
    function SideEffect(props) {
      const { headManager, reduceComponentsToState } = props;
      function emitChange() {
        if (headManager && headManager.mountedInstances) {
          const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
          headManager.updateHead(reduceComponentsToState(headElements, props));
        }
      }
      if (isServer) {
        var ref;
        headManager == null ? void 0 : (ref = headManager.mountedInstances) == null ? void 0 : ref.add(props.children);
        emitChange();
      }
      useClientOnlyLayoutEffect(() => {
        var ref1;
        headManager == null ? void 0 : (ref1 = headManager.mountedInstances) == null ? void 0 : ref1.add(props.children);
        return () => {
          var ref2;
          headManager == null ? void 0 : (ref2 = headManager.mountedInstances) == null ? void 0 : ref2.delete(props.children);
        };
      });
      useClientOnlyLayoutEffect(() => {
        if (headManager) {
          headManager._pendingUpdate = emitChange;
        }
        return () => {
          if (headManager) {
            headManager._pendingUpdate = emitChange;
          }
        };
      });
      useClientOnlyEffect(() => {
        if (headManager && headManager._pendingUpdate) {
          headManager._pendingUpdate();
          headManager._pendingUpdate = null;
        }
        return () => {
          if (headManager && headManager._pendingUpdate) {
            headManager._pendingUpdate();
            headManager._pendingUpdate = null;
          }
        };
      });
      return null;
    }
    var isServer = typeof window === "undefined";
    var useClientOnlyLayoutEffect = isServer ? () => {
    } : _react.useLayoutEffect;
    var useClientOnlyEffect = isServer ? () => {
    } : _react.useEffect;
  }
});

// ../../node_modules/next/dist/shared/lib/amp-context.js
var require_amp_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/amp-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.AmpStateContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(__require("react"));
    var AmpStateContext = _react.default.createContext({});
    exports.AmpStateContext = AmpStateContext;
    if (process.env.NODE_ENV !== "production") {
      AmpStateContext.displayName = "AmpStateContext";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/head-manager-context.js
var require_head_manager_context = __commonJS({
  "../../node_modules/next/dist/shared/lib/head-manager-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HeadManagerContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(__require("react"));
    var HeadManagerContext = _react.default.createContext({});
    exports.HeadManagerContext = HeadManagerContext;
    if (process.env.NODE_ENV !== "production") {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// ../../node_modules/next/dist/shared/lib/amp-mode.js
var require_amp_mode = __commonJS({
  "../../node_modules/next/dist/shared/lib/amp-mode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isInAmpMode = isInAmpMode;
    function isInAmpMode({ ampFirst = false, hybrid = false, hasQuery = false } = {}) {
      return ampFirst || hybrid && hasQuery;
    }
  }
});

// ../../node_modules/next/dist/shared/lib/utils/warn-once.js
var require_warn_once = __commonJS({
  "../../node_modules/next/dist/shared/lib/utils/warn-once.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.warnOnce = void 0;
    var warnOnce = (_) => {
    };
    if (process.env.NODE_ENV !== "production") {
      const warnings = /* @__PURE__ */ new Set();
      exports.warnOnce = warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
    exports.warnOnce = warnOnce;
  }
});

// ../../node_modules/next/dist/shared/lib/head.js
var require_head = __commonJS({
  "../../node_modules/next/dist/shared/lib/head.js"(exports, module) {
    "use strict";
    "use client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.defaultHead = defaultHead;
    exports.default = void 0;
    var _extends = require_extends().default;
    var _interop_require_default = require_interop_require_default().default;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _react = _interop_require_wildcard(__require("react"));
    var _sideEffect = _interop_require_default(require_side_effect());
    var _ampContext = require_amp_context();
    var _headManagerContext = require_head_manager_context();
    var _ampMode = require_amp_mode();
    var _warnOnce = require_warn_once();
    function defaultHead(inAmpMode = false) {
      const head = [
        /* @__PURE__ */ _react.default.createElement("meta", {
          charSet: "utf-8"
        })
      ];
      if (!inAmpMode) {
        head.push(/* @__PURE__ */ _react.default.createElement("meta", {
          name: "viewport",
          content: "width=device-width"
        }));
      }
      return head;
    }
    function onlyReactElement(list, child) {
      if (typeof child === "string" || typeof child === "number") {
        return list;
      }
      if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
          if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
            return fragmentList;
          }
          return fragmentList.concat(fragmentChild);
        }, []));
      }
      return list.concat(child);
    }
    var METATYPES = [
      "name",
      "httpEquiv",
      "charSet",
      "itemProp"
    ];
    function unique() {
      const keys = /* @__PURE__ */ new Set();
      const tags = /* @__PURE__ */ new Set();
      const metaTypes = /* @__PURE__ */ new Set();
      const metaCategories = {};
      return (h) => {
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
          hasKey = true;
          const key = h.key.slice(h.key.indexOf("$") + 1);
          if (keys.has(key)) {
            isUnique = false;
          } else {
            keys.add(key);
          }
        }
        switch (h.type) {
          case "title":
          case "base":
            if (tags.has(h.type)) {
              isUnique = false;
            } else {
              tags.add(h.type);
            }
            break;
          case "meta":
            for (let i = 0, len = METATYPES.length; i < len; i++) {
              const metatype = METATYPES[i];
              if (!h.props.hasOwnProperty(metatype))
                continue;
              if (metatype === "charSet") {
                if (metaTypes.has(metatype)) {
                  isUnique = false;
                } else {
                  metaTypes.add(metatype);
                }
              } else {
                const category = h.props[metatype];
                const categories = metaCategories[metatype] || /* @__PURE__ */ new Set();
                if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                  isUnique = false;
                } else {
                  categories.add(category);
                  metaCategories[metatype] = categories;
                }
              }
            }
            break;
        }
        return isUnique;
      };
    }
    function reduceComponents(headChildrenElements, props) {
      const { inAmpMode } = props;
      return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i) => {
        const key = c.key || i;
        if (process.env.NODE_ENV !== "development" && process.env.__NEXT_OPTIMIZE_FONTS && !inAmpMode) {
          if (c.type === "link" && c.props["href"] && [
            "https://fonts.googleapis.com/css",
            "https://use.typekit.net/"
          ].some((url) => c.props["href"].startsWith(url))) {
            const newProps = _extends({}, c.props || {});
            newProps["data-href"] = newProps["href"];
            newProps["href"] = void 0;
            newProps["data-optimized-fonts"] = true;
            return /* @__PURE__ */ _react.default.cloneElement(c, newProps);
          }
        }
        if (process.env.NODE_ENV === "development") {
          if (c.type === "script" && c.props["type"] !== "application/ld+json") {
            const srcMessage = c.props["src"] ? `<script> tag with src="${c.props["src"]}"` : `inline <script>`;
            (0, _warnOnce).warnOnce(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. 
See more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
          } else if (c.type === "link" && c.props["rel"] === "stylesheet") {
            (0, _warnOnce).warnOnce(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props["href"]}"). Use Document instead. 
See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
          }
        }
        return /* @__PURE__ */ _react.default.cloneElement(c, {
          key
        });
      });
    }
    function Head2({ children }) {
      const ampState = (0, _react).useContext(_ampContext.AmpStateContext);
      const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
      return /* @__PURE__ */ _react.default.createElement(_sideEffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager,
        inAmpMode: (0, _ampMode).isInAmpMode(ampState)
      }, children);
    }
    var _default = Head2;
    exports.default = _default;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// ../../node_modules/next/head.js
var require_head2 = __commonJS({
  "../../node_modules/next/head.js"(exports, module) {
    module.exports = require_head();
  }
});

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
    className: "bg-white py-8 text-center",
    children: [
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsxs2("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ jsx2("a", {
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
      /* @__PURE__ */ jsxs2("div", {
        children: [
          /* @__PURE__ */ jsxs2("a", {
            children: [
              "2022 \xA9",
              " ",
              /* @__PURE__ */ jsx2("a", {
                href: "https://huggingface.co/spaces/superdatas/LICENSE",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-blue text-indigo-600",
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

// src/Favicon.tsx
var import_head = __toESM(require_head2());
import { jsx as jsx3 } from "react/jsx-runtime";
var Favicon = () => {
  return /* @__PURE__ */ jsx3(import_head.default, {
    children: /* @__PURE__ */ jsx3("link", {
      rel: "icon",
      href: "/favicon.ico"
    })
  });
};
export {
  Button,
  Favicon,
  Footer
};
