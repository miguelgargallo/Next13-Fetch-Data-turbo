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
      }),
      /* @__PURE__ */ jsx2("div", {
        className: "hidden sm:block",
        children: /* @__PURE__ */ jsxs2("div", {
          className: "items-center justify-center flex w-full",
          children: [
            /* @__PURE__ */ jsx2("a", {
              href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden p-2 md:block",
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
              className: "hidden p-2 md:block",
              children: /* @__PURE__ */ jsx2("picture", {
                children: /* @__PURE__ */ jsx2("img", {
                  src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                  alt: "Landscape picture",
                  width: 40,
                  height: 20
                })
              })
            })
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
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
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
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
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
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
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
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
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
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS5),
      children: /* @__PURE__ */ jsx7("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-orange-500"
      })
    })
  });
};

// src/Version.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Version = () => {
  return /* @__PURE__ */ jsx8("button", {
    className: "hidden rounded-full bg-black py-2 px-4 text-xs font-bold text-white md:block",
    children: /* @__PURE__ */ jsx8("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v1.4.5 Support"
    })
  });
};

// src/Menu.tsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
{
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
}
var Menu = () => {
  return /* @__PURE__ */ jsxs3("div", {
    className: "flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500",
    children: [
      /* @__PURE__ */ jsxs3("div", {
        className: "flex flex-row",
        children: [
          /* @__PURE__ */ jsx9("a", {
            href: "https://hns.pencil.li",
            className: "text-1xl flex flex-row items-center justify-center font-bold text-white",
            children: /* @__PURE__ */ jsx9("picture", {
              children: /* @__PURE__ */ jsxs3("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "150",
                height: "25",
                viewBox: "0 0 2344 678",
                children: [
                  /* @__PURE__ */ jsxs3("defs", {
                    children: [
                      /* @__PURE__ */ jsxs3("linearGradient", {
                        id: "a",
                        x1: "0%",
                        x2: "100%",
                        y1: "50%",
                        y2: "50%",
                        children: [
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "0%",
                            "stop-color": "#B620E0"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "16.68%",
                            "stop-color": "#6236FF"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "33.433%",
                            "stop-color": "#0091FF"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "49.949%",
                            "stop-color": "#6DD400"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "66.61%",
                            "stop-color": "#F7B500"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "83.281%",
                            "stop-color": "#FA6400"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "100%",
                            "stop-color": "#E02020"
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxs3("linearGradient", {
                        id: "b",
                        x1: "100%",
                        x2: "0%",
                        y1: "50%",
                        y2: "50%",
                        children: [
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "0%",
                            "stop-color": "#E02020"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "16.719%",
                            "stop-color": "#FA6400"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "33.39%",
                            "stop-color": "#F7B500"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "50.051%",
                            "stop-color": "#6DD400"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "66.567%",
                            "stop-color": "#0091FF"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "83.32%",
                            "stop-color": "#6236FF"
                          }),
                          /* @__PURE__ */ jsx9("stop", {
                            offset: "100%",
                            "stop-color": "#B620E0"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs3("g", {
                    fill: "none",
                    "fill-rule": "evenodd",
                    transform: "translate(-151 -173)",
                    children: [
                      /* @__PURE__ */ jsx9("path", {
                        fill: "url(#a)",
                        d: "M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z",
                        transform: "matrix(0 -1 -1 0 980 980)"
                      }),
                      /* @__PURE__ */ jsx9("path", {
                        fill: "url(#b)",
                        d: "M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z",
                        transform: "matrix(0 -1 -1 0 905.5 905.5)"
                      }),
                      /* @__PURE__ */ jsx9("path", {
                        fill: "url(#a)",
                        d: "M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z",
                        transform: "matrix(0 -1 -1 0 842.5 842.5)"
                      }),
                      /* @__PURE__ */ jsx9("path", {
                        fill: "url(#b)",
                        d: "M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z",
                        transform: "matrix(0 -1 -1 0 779 779)"
                      }),
                      /* @__PURE__ */ jsx9("path", {
                        fill: "url(#a)",
                        d: "M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z",
                        transform: "matrix(0 -1 -1 0 715.5 715.5)"
                      }),
                      /* @__PURE__ */ jsx9("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "500",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx9("tspan", {
                          x: "993.25",
                          y: "697",
                          children: "Pencil"
                        })
                      }),
                      /* @__PURE__ */ jsx9("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "100",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx9("tspan", {
                          x: "690.95",
                          y: "829",
                          children: "\xA9"
                        })
                      }),
                      /* @__PURE__ */ jsx9("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "75",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx9("tspan", {
                          x: "2386.5",
                          y: "248",
                          children: "TM"
                        })
                      })
                    ]
                  })
                ]
              })
            })
          }),
          " ",
          /* @__PURE__ */ jsx9("button", {
            className: "rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx9("a", {
              href: "/",
              children: "Explorer"
            })
          }),
          /* @__PURE__ */ jsx9("button", {
            className: "rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx9("a", {
              href: "/domains",
              children: "Domains"
            })
          }),
          /* @__PURE__ */ jsx9("button", {
            className: "hidden sm:block rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx9("a", {
              href: "/developer",
              children: "Developer"
            })
          }),
          /* @__PURE__ */ jsx9("button", {
            className: "hidden sm:block rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx9("a", {
              href: "/office",
              children: "Office"
            })
          }),
          /* @__PURE__ */ jsx9("button", {
            className: "hidden sm:block rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx9("a", {
              href: "/support-tos",
              children: "Support"
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx9(Version, {}),
      /* @__PURE__ */ jsx9("button", {
        className: "hidden py-2 px-4 font-bold text-white md:block",
        children: /* @__PURE__ */ jsx9("a", {
          href: "http://twitter.com/miguelgargallo",
          target: "_blank",
          rel: "noopener noreferrer",
          children: "Twitter"
        })
      }),
      /* @__PURE__ */ jsx9("div", {
        className: "mt-2",
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /* @__PURE__ */ jsx9("a", {
          href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "hidden p-2 md:block",
          children: /* @__PURE__ */ jsx9("picture", {
            children: /* @__PURE__ */ jsx9("img", {
              src: "https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social",
              alt: "Landscape picture",
              width: 100,
              height: 20
            })
          })
        })
      }),
      /* @__PURE__ */ jsx9("button", {
        className: "rounded-xl px-8 font-bold text-white hidden sm:block",
        children: /* @__PURE__ */ jsx9("a", {
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

// src/Card.tsx
import { jsx as jsx10, jsxs as jsxs4 } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsx10("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsxs4("div", {
      className: "overflow-hidden bg-white shadow sm:rounded-lg",
      children: [
        /* @__PURE__ */ jsxs4("div", {
          className: "px-4 py-5 sm:px-6",
          children: [
            /* @__PURE__ */ jsx10("a", {
              href: "https://hns.pencil.li",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "p-2",
              children: /* @__PURE__ */ jsx10("picture", {
                children: /* @__PURE__ */ jsxs4("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "150",
                  height: "25",
                  viewBox: "0 0 2344 678",
                  children: [
                    /* @__PURE__ */ jsxs4("defs", {
                      children: [
                        /* @__PURE__ */ jsxs4("linearGradient", {
                          id: "a",
                          x1: "0%",
                          x2: "100%",
                          y1: "50%",
                          y2: "50%",
                          children: [
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "0%",
                              "stop-color": "#B620E0"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "16.68%",
                              "stop-color": "#6236FF"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "33.433%",
                              "stop-color": "#0091FF"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "49.949%",
                              "stop-color": "#6DD400"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "66.61%",
                              "stop-color": "#F7B500"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "83.281%",
                              "stop-color": "#FA6400"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "100%",
                              "stop-color": "#E02020"
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxs4("linearGradient", {
                          id: "b",
                          x1: "100%",
                          x2: "0%",
                          y1: "50%",
                          y2: "50%",
                          children: [
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "0%",
                              "stop-color": "#E02020"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "16.719%",
                              "stop-color": "#FA6400"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "33.39%",
                              "stop-color": "#F7B500"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "50.051%",
                              "stop-color": "#6DD400"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "66.567%",
                              "stop-color": "#0091FF"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "83.32%",
                              "stop-color": "#6236FF"
                            }),
                            /* @__PURE__ */ jsx10("stop", {
                              offset: "100%",
                              "stop-color": "#B620E0"
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs4("g", {
                      fill: "none",
                      "fill-rule": "evenodd",
                      transform: "translate(-151 -173)",
                      children: [
                        /* @__PURE__ */ jsx10("path", {
                          fill: "url(#a)",
                          d: "M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z",
                          transform: "matrix(0 -1 -1 0 980 980)"
                        }),
                        /* @__PURE__ */ jsx10("path", {
                          fill: "url(#b)",
                          d: "M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z",
                          transform: "matrix(0 -1 -1 0 905.5 905.5)"
                        }),
                        /* @__PURE__ */ jsx10("path", {
                          fill: "url(#a)",
                          d: "M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z",
                          transform: "matrix(0 -1 -1 0 842.5 842.5)"
                        }),
                        /* @__PURE__ */ jsx10("path", {
                          fill: "url(#b)",
                          d: "M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z",
                          transform: "matrix(0 -1 -1 0 779 779)"
                        }),
                        /* @__PURE__ */ jsx10("path", {
                          fill: "url(#a)",
                          d: "M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z",
                          transform: "matrix(0 -1 -1 0 715.5 715.5)"
                        }),
                        /* @__PURE__ */ jsx10("text", {
                          fill: "#6CD300",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "500",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx10("tspan", {
                            x: "993.25",
                            y: "697",
                            children: "Pencil"
                          })
                        }),
                        /* @__PURE__ */ jsx10("text", {
                          fill: "#1C78FF",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "100",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx10("tspan", {
                            x: "690.95",
                            y: "829",
                            children: "\xA9"
                          })
                        }),
                        /* @__PURE__ */ jsx10("text", {
                          fill: "#F75B04",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "75",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx10("tspan", {
                            x: "2386.5",
                            y: "248",
                            children: "TM"
                          })
                        })
                      ]
                    })
                  ]
                })
              })
            }),
            /* @__PURE__ */ jsx10("h3", {
              className: "text-lg font-medium leading-6 text-gray-900",
              children: "Pencil Domains"
            }),
            /* @__PURE__ */ jsx10("p", {
              className: "mt-1 max-w-2xl text-sm text-gray-500",
              children: "Pencil Domains is a domain name registrar that allows you to register in this new namespace."
            })
          ]
        }),
        /* @__PURE__ */ jsx10("div", {
          className: "border-t border-gray-200",
          children: /* @__PURE__ */ jsxs4("dl", {
            children: [
              /* @__PURE__ */ jsxs4("div", {
                className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                children: [
                  /* @__PURE__ */ jsx10("dt", {
                    className: "text-sm font-medium text-gray-500",
                    children: "Blockchain"
                  }),
                  /* @__PURE__ */ jsx10("dd", {
                    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                    children: "Handshake"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs4("div", {
                className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                children: [
                  /* @__PURE__ */ jsx10("dt", {
                    className: "text-sm font-medium text-gray-500",
                    children: "Domain Owner"
                  }),
                  /* @__PURE__ */ jsx10("dd", {
                    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                    children: "Custody"
                  })
                ]
              })
            ]
          })
        })
      ]
    })
  });
};

// src/DomainsAll.tsx
import { jsx as jsx11, jsxs as jsxs5 } from "react/jsx-runtime";
var DomainsAll = () => {
  return /* @__PURE__ */ jsx11("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx11("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs5("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".es\xF1"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".madrd"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".bcln"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".valenc"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".mestalla"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".isbals"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".cil"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".catc"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".teide"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".granca"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".tenef"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".elhie"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".lagmr"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".laplm"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-xl font-bold text-black",
                children: ".lagraciosa"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".fuertev"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".lnzrt"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Andorra"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".andors"
              }),
              " ",
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Blocks"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".\u{1F9CA}\u{1F9CA}"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs5("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx11("p", {
                children: /* @__PURE__ */ jsx11("a", {
                  className: "font-slim text-xl text-black",
                  children: "Metaverse"
                })
              }),
              /* @__PURE__ */ jsx11("a", {
                className: "text-2xl font-bold text-black",
                children: ".myplot"
              }),
              /* @__PURE__ */ jsx11("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx11("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          })
        ]
      })
    })
  });
};

// src/DomainsGeo.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var DomainsGeo = () => {
  return /* @__PURE__ */ jsx12("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx12("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs6("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".es\xF1"
              }),
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".madrd"
              }),
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".bcln"
              }),
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".valenc"
              }),
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".mestalla"
              }),
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".isbals"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".cil"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".catc"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".teide"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".granca"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".tenef"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".elhie"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".lagmr"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".laplm"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-xl font-bold text-black",
                children: ".lagraciosa"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".fuertev"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".lnzrt"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs6("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx12("p", {
                children: /* @__PURE__ */ jsx12("a", {
                  className: "font-slim text-xl text-black",
                  children: "Andorra"
                })
              }),
              /* @__PURE__ */ jsx12("a", {
                className: "text-2xl font-bold text-black",
                children: ".andors"
              }),
              " ",
              /* @__PURE__ */ jsx12("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx12("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          })
        ]
      })
    })
  });
};

// src/MenuDomains.tsx
import { jsx as jsx13, jsxs as jsxs7 } from "react/jsx-runtime";
var MenuDomains = () => {
  return /* @__PURE__ */ jsx13("div", {
    className: "hidden sm:block flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500",
    children: /* @__PURE__ */ jsxs7("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx13("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx13("a", {
            href: "/domains",
            children: "All Domains"
          })
        }),
        /* @__PURE__ */ jsx13("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx13("a", {
            href: "/domains-geographic",
            children: "Geographic"
          })
        }),
        /* @__PURE__ */ jsx13("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx13("a", {
            href: "/domains-blockchain",
            children: "Blockchain"
          })
        }),
        /* @__PURE__ */ jsx13("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx13("a", {
            href: "/domains-metaverse",
            children: "Metaverse"
          })
        }),
        /* @__PURE__ */ jsx13("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx13("a", {
            href: "/domains-new",
            children: "New"
          })
        })
      ]
    })
  });
};

// src/DomainsBlocks.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var DomainsBlocks = () => {
  return /* @__PURE__ */ jsx14("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx14("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsx14("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: /* @__PURE__ */ jsxs8("div", {
          className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
          children: [
            /* @__PURE__ */ jsx14("p", {
              children: /* @__PURE__ */ jsx14("a", {
                className: "font-slim text-xl text-black",
                children: "Blocks"
              })
            }),
            /* @__PURE__ */ jsx14("a", {
              className: "text-2xl font-bold text-black",
              children: ".\u{1F9CA}\u{1F9CA}"
            }),
            /* @__PURE__ */ jsx14("p", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
              children: /* @__PURE__ */ jsx14("a", {
                className: "text-sm text-black",
                children: "soon"
              })
            })
          ]
        })
      })
    })
  });
};

// src/DomainsMeta.tsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var DomainsMeta = () => {
  return /* @__PURE__ */ jsx15("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx15("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsx15("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: /* @__PURE__ */ jsxs9("div", {
          className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
          children: [
            /* @__PURE__ */ jsx15("p", {
              children: /* @__PURE__ */ jsx15("a", {
                className: "font-slim text-xl text-black",
                children: "Metaverse"
              })
            }),
            /* @__PURE__ */ jsx15("a", {
              className: "text-2xl font-bold text-black",
              children: ".myplot"
            }),
            /* @__PURE__ */ jsx15("p", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
              children: /* @__PURE__ */ jsx15("a", {
                className: "text-sm text-black",
                children: "soon"
              })
            })
          ]
        })
      })
    })
  });
};

// src/DomainsNew.tsx
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var DomainsNew = () => {
  return /* @__PURE__ */ jsx16("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx16("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs10("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs10("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx16("p", {
                children: /* @__PURE__ */ jsx16("a", {
                  className: "font-slim text-xl text-black",
                  children: "Education"
                })
              }),
              /* @__PURE__ */ jsx16("a", {
                className: "text-2xl font-bold text-black",
                children: ".eedu"
              }),
              /* @__PURE__ */ jsx16("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx16("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs10("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx16("p", {
                children: /* @__PURE__ */ jsx16("a", {
                  className: "font-slim text-xl text-black",
                  children: "Finance"
                })
              }),
              /* @__PURE__ */ jsx16("a", {
                className: "text-2xl font-bold text-black",
                children: ".fincy"
              }),
              /* @__PURE__ */ jsx16("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx16("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs10("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx16("p", {
                children: /* @__PURE__ */ jsx16("a", {
                  className: "font-slim text-xl text-black",
                  children: "Virtual FX"
                })
              }),
              /* @__PURE__ */ jsx16("a", {
                className: "text-2xl font-bold text-black",
                children: ".virtualfx"
              }),
              /* @__PURE__ */ jsx16("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx16("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs10("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx16("p", {
                children: /* @__PURE__ */ jsx16("a", {
                  className: "font-slim text-xl text-black",
                  children: "Startups"
                })
              }),
              /* @__PURE__ */ jsx16("a", {
                className: "text-2xl font-bold text-black",
                children: "..nextco"
              }),
              /* @__PURE__ */ jsx16("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx16("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          })
        ]
      })
    })
  });
};

// src/MenuDevs.tsx
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var MenuDevs = () => {
  return /* @__PURE__ */ jsx17("div", {
    className: "hidden sm:block flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500",
    children: /* @__PURE__ */ jsxs11("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx17("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx17("a", {
            href: "/developer",
            children: "Home"
          })
        }),
        /* @__PURE__ */ jsx17("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx17("a", {
            href: "/developer-launch",
            children: "Launch your TLD"
          })
        }),
        /* @__PURE__ */ jsx17("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx17("a", {
            href: "/developer-agreement",
            children: "Agreement"
          })
        })
      ]
    })
  });
};

// src/SupportMenu.tsx
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
var SupportMenu = () => {
  return /* @__PURE__ */ jsx18("div", {
    className: "hidden sm:block flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500",
    children: /* @__PURE__ */ jsxs12("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx18("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx18("a", {
            href: "/support-tos",
            children: "Terms Of Service"
          })
        }),
        /* @__PURE__ */ jsx18("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx18("a", {
            href: "/support-pp",
            children: "Privacy Policy"
          })
        }),
        /* @__PURE__ */ jsx18("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx18("a", {
            href: "/support-answers",
            children: "Answers"
          })
        }),
        /* @__PURE__ */ jsx18("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx18("a", {
            href: "/support-trademarks",
            children: "Trademarks"
          })
        })
      ]
    })
  });
};
export {
  Button,
  Card,
  DomainsAll,
  DomainsBlocks,
  DomainsGeo,
  DomainsMeta,
  DomainsNew,
  Footer,
  Gradient,
  GradientBronze,
  GradientDiamond,
  GradientGold,
  GradientSilver,
  Menu,
  MenuDevs,
  MenuDomains,
  SupportMenu,
  Version
};
