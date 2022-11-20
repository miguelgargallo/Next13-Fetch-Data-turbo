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
      /* @__PURE__ */ jsx2("div", {
        children: /* @__PURE__ */ jsxs2("a", {
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
        })
      })
    ]
  });
};

// ../../node_modules/meshgrad/dist/index.mjs
var i = () => Math.round(Math.random() * 360);
var c = (n) => Math.round(Math.random() * (n * 100) % 100);
var g = (n, t, e) => Math.round(t / e * (n * 100) % 100);
var d = (n) => {
  if (!!n) {
    n = n.replace(/#/g, ""), n.length === 3 && (n = n.split("").map(function(b) {
      return b + b;
    }).join(""));
    var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(n);
    if (!!t) {
      var e = parseInt(t[1], 16), r = parseInt(t[2], 16), a = parseInt(t[3], 16);
      e /= 255, r /= 255, a /= 255;
      var o = Math.max(e, r, a), s = Math.min(e, r, a), u = (o + s) / 2;
      if (o == s)
        u = 0;
      else {
        var m = o - s;
        switch (o) {
          case e:
            u = (r - a) / m + (r < a ? 6 : 0);
            break;
          case r:
            u = (a - e) / m + 2;
            break;
          case a:
            u = (e - r) / m + 4;
            break;
        }
        u /= 6;
      }
      return u = Math.round(360 * u), u;
    }
  }
};
var p = (n, t) => Array.from({ length: n }, (e, r) => r === 0 ? `hsl(${t}, 100%, 80%)` : r < n / 1.4 ? `hsl(${t - 30 * (1 - 2 * (r % 2)) * (r > 2 ? r / 2 : r)}, 100%, ${76 - r * (1 - 2 * (r % 2)) * 1.75}%)` : `hsl(${t - 150 * (1 - 2 * (r % 2))}, 100%, ${76 - r * (1 - 2 * (r % 2)) * 1.25}%)`);
var M = (n, t, e) => Array.from({ length: n }, (r, a) => `radial-gradient(at ${e ? g(a, e, n) : c(a)}% ${e ? g(a * 10, e, n) : c(a * 10)}%, ${t[a]} 0px, transparent 50%)
`);
var f = (n, t, e) => {
  let r = p(n, t || i()), a = M(n, r, e || void 0);
  return [r[0], a.join(",")];
};
var k = (n, t, e) => {
  let [r, a] = f(n, d(t) ? d(t) : void 0, e || void 0);
  return { backgroundColor: r, backgroundImage: a };
};

// src/Gradient.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var ELEMENTS = 0;
var Gradient = () => {
  return /* @__PURE__ */ jsx3("div", {
    children: /* @__PURE__ */ jsx3("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "py-2 rounded-xl m-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS),
      children: /* @__PURE__ */ jsx3("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-current"
      })
    })
  });
};

// src/GradientDiamond.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var ELEMENTS2 = 10;
var GradientDiamond = () => {
  return /* @__PURE__ */ jsx4("div", {
    children: /* @__PURE__ */ jsx4("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "py-2 rounded-xl m-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS2),
      children: /* @__PURE__ */ jsx4("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-sky-500"
      })
    })
  });
};

// src/GradientGold.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
var ELEMENTS3 = 5;
var GradientGold = () => {
  return /* @__PURE__ */ jsx5("div", {
    children: /* @__PURE__ */ jsx5("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "py-2 rounded-xl m-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS3),
      children: /* @__PURE__ */ jsx5("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-yellow-500"
      })
    })
  });
};

// src/GradientSilver.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var ELEMENTS4 = 3;
var GradientSilver = () => {
  return /* @__PURE__ */ jsx6("div", {
    children: /* @__PURE__ */ jsx6("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "py-2 rounded-xl m-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS4),
      children: /* @__PURE__ */ jsx6("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-gray-500"
      })
    })
  });
};

// src/GradientBronze.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var ELEMENTS5 = 1;
var GradientBronze = () => {
  return /* @__PURE__ */ jsx7("div", {
    children: /* @__PURE__ */ jsx7("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "py-2 rounded-xl m-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS5),
      children: /* @__PURE__ */ jsx7("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-orange-500"
      })
    })
  });
};

// src/Menu.tsx
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
{
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
}
var Menu = () => {
  return /* @__PURE__ */ jsxs3("div", {
    className: "flex flex-row items-center justify-between justify-items-center bg-gradient-to-r from-blue-400 to-blue-500",
    children: [
      /* @__PURE__ */ jsx8("div", {
        className: "flex flex-row items-center justify-between",
        children: /* @__PURE__ */ jsx8("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx8("a", {
            href: "/",
            children: "Pencil Explorer"
          })
        })
      }),
      /* @__PURE__ */ jsx8("button", {
        className: "hidden rounded-full bg-black py-2 px-4 text-xs font-bold text-white md:block",
        children: /* @__PURE__ */ jsx8("a", {
          href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "v1.3.1 Menu"
        })
      }),
      /* @__PURE__ */ jsx8("button", {
        className: "hidden py-2 px-4 font-bold text-white md:block",
        children: /* @__PURE__ */ jsx8("a", {
          href: "http://twitter.com/miguelgargallo",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Twitter"
        })
      }),
      /* @__PURE__ */ jsxs3("div", {
        className: "mt-2",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: [
          /* @__PURE__ */ jsx8("a", {
            href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden p-2 md:block",
            children: /* @__PURE__ */ jsx8("picture", {
              children: /* @__PURE__ */ jsx8("img", {
                src: "https://vercel.com/button",
                alt: "Landscape picture",
                width: 75,
                height: 20
              })
            })
          }),
          /* @__PURE__ */ jsx8("a", {
            href: "https://huggingface.co/spaces/superdatas/LICENSE",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden p-2 md:block",
            children: /* @__PURE__ */ jsx8("picture", {
              children: /* @__PURE__ */ jsx8("img", {
                src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                alt: "Landscape picture",
                width: 40,
                height: 20
              })
            })
          }),
          /* @__PURE__ */ jsx8("a", {
            href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hidden p-2 md:block",
            children: /* @__PURE__ */ jsx8("picture", {
              children: /* @__PURE__ */ jsx8("img", {
                src: "https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social",
                alt: "Landscape picture",
                width: 100,
                height: 20
              })
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx8("button", {
        className: "rounded-xl py-2 px-4 font-bold text-white",
        children: /* @__PURE__ */ jsx8("a", {
          href: "/",
          children: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric"
          })
        })
      })
    ]
  });
};
export {
  Button,
  Footer,
  Gradient,
  GradientBronze,
  GradientDiamond,
  GradientGold,
  GradientSilver,
  Menu
};
