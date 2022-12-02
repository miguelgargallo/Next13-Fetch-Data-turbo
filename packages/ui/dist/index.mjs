var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb2, mod) => function __require() {
  return mod || (0, cb2[__getOwnPropNames(cb2)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var memoize_esm_default;
var init_memoize_esm = __esm({
  "../../node_modules/@emotion/memoize/dist/memoize.esm.js"() {
    memoize_esm_default = memoize;
  }
});

// ../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js
var is_prop_valid_esm_exports = {};
__export(is_prop_valid_esm_exports, {
  default: () => is_prop_valid_esm_default
});
var reactPropsRegex, index, is_prop_valid_esm_default;
var init_is_prop_valid_esm = __esm({
  "../../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js"() {
    init_memoize_esm();
    reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
    index = memoize_esm_default(
      function(prop) {
        return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
      }
    );
    is_prop_valid_esm_default = index;
  }
});

// ../../node_modules/popmotion/node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "../../node_modules/popmotion/node_modules/tslib/tslib.js"(exports, module) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __spreadArray3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __classPrivateFieldIn3;
    var __createBinding3;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id2, v) {
          return exports2[id2] = previous ? previous(id2, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      __extends3 = function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
          s = arguments[i2];
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2))
              t[p2] = s[p2];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
            t[p2] = s[p2];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
            if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
              t[p2[i2]] = s[p2[i2]];
          }
        return t;
      };
      __decorate3 = function(decorators, target, key, desc) {
        var c3 = arguments.length, r = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r = (c3 < 3 ? d2(r) : c3 > 3 ? d2(target, key, r) : d2(target, key)) || r;
        return c3 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param3 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata3 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f2, y, t, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f2 = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar3 = function(m, o) {
        for (var p2 in m)
          if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o, p2))
            __createBinding3(o, m, p2);
      };
      __createBinding3 = Object.create ? function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m, k2);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o[k22] = m[k2];
      };
      __values3 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i2 >= o.length)
                o = void 0;
              return { value: o && o[i2++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i2 = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i2.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i2["return"]))
              m.call(i2);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread3 = function() {
        for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
          ar = ar.concat(__read3(arguments[i2]));
        return ar;
      };
      __spreadArrays3 = function() {
        for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s += arguments[i2].length;
        for (var r = Array(s), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)
            r[k2] = a2[j];
        return r;
      };
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
            if (ar || !(i2 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i2);
              ar[i2] = from[i2];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await3 = function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      };
      __asyncGenerator3 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n) {
          if (g2[n])
            i2[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g2[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v) {
          if (f2(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator3 = function(o) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n, f2) {
          i2[n] = o[n] ? function(v) {
            return (p2 = !p2) ? { value: __await3(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
          } : f2;
        }
      };
      __asyncValues3 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i2;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n) {
          i2[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d2, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject3 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar3 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding3(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault3 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet3 = function(receiver, state, kind, f2) {
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
      };
      __classPrivateFieldSet3 = function(receiver, state, value, kind, f2) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn3 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn3);
    });
  }
});

// ../../node_modules/tslib/tslib.js
var require_tslib2 = __commonJS({
  "../../node_modules/tslib/tslib.js"(exports, module) {
    var __extends3;
    var __assign3;
    var __rest3;
    var __decorate3;
    var __param3;
    var __metadata3;
    var __awaiter3;
    var __generator3;
    var __exportStar3;
    var __values3;
    var __read3;
    var __spread3;
    var __spreadArrays3;
    var __spreadArray3;
    var __await3;
    var __asyncGenerator3;
    var __asyncDelegator3;
    var __asyncValues3;
    var __makeTemplateObject3;
    var __importStar3;
    var __importDefault3;
    var __classPrivateFieldGet3;
    var __classPrivateFieldSet3;
    var __classPrivateFieldIn3;
    var __createBinding3;
    (function(factory) {
      var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id2, v) {
          return exports2[id2] = previous ? previous(id2, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p2 in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p2))
            d2[p2] = b2[p2];
      };
      __extends3 = function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
      __assign3 = Object.assign || function(t) {
        for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
          s = arguments[i2];
          for (var p2 in s)
            if (Object.prototype.hasOwnProperty.call(s, p2))
              t[p2] = s[p2];
        }
        return t;
      };
      __rest3 = function(s, e) {
        var t = {};
        for (var p2 in s)
          if (Object.prototype.hasOwnProperty.call(s, p2) && e.indexOf(p2) < 0)
            t[p2] = s[p2];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s); i2 < p2.length; i2++) {
            if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p2[i2]))
              t[p2[i2]] = s[p2[i2]];
          }
        return t;
      };
      __decorate3 = function(decorators, target, key, desc) {
        var c3 = arguments.length, r = c3 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d2;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i2 = decorators.length - 1; i2 >= 0; i2--)
            if (d2 = decorators[i2])
              r = (c3 < 3 ? d2(r) : c3 > 3 ? d2(target, key, r) : d2(target, key)) || r;
        return c3 > 3 && r && Object.defineProperty(target, key, r), r;
      };
      __param3 = function(paramIndex, decorator) {
        return function(target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata3 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter3 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator3 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f2, y, t, g2;
        return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
          return this;
        }), g2;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f2)
            throw new TypeError("Generator is already executing.");
          while (g2 && (g2 = 0, op[0] && (_ = 0)), _)
            try {
              if (f2 = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f2 = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __exportStar3 = function(m, o) {
        for (var p2 in m)
          if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(o, p2))
            __createBinding3(o, m, p2);
      };
      __createBinding3 = Object.create ? function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        var desc = Object.getOwnPropertyDescriptor(m, k2);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = { enumerable: true, get: function() {
            return m[k2];
          } };
        }
        Object.defineProperty(o, k22, desc);
      } : function(o, m, k2, k22) {
        if (k22 === void 0)
          k22 = k2;
        o[k22] = m[k2];
      };
      __values3 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i2 = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i2 >= o.length)
                o = void 0;
              return { value: o && o[i2++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read3 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i2 = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i2.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i2["return"]))
              m.call(i2);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread3 = function() {
        for (var ar = [], i2 = 0; i2 < arguments.length; i2++)
          ar = ar.concat(__read3(arguments[i2]));
        return ar;
      };
      __spreadArrays3 = function() {
        for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++)
          s += arguments[i2].length;
        for (var r = Array(s), k2 = 0, i2 = 0; i2 < il; i2++)
          for (var a2 = arguments[i2], j = 0, jl = a2.length; j < jl; j++, k2++)
            r[k2] = a2[j];
        return r;
      };
      __spreadArray3 = function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i2 = 0, l = from.length, ar; i2 < l; i2++) {
            if (ar || !(i2 in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i2);
              ar[i2] = from[i2];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      __await3 = function(v) {
        return this instanceof __await3 ? (this.v = v, this) : new __await3(v);
      };
      __asyncGenerator3 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g2 = generator.apply(thisArg, _arguments || []), i2, q = [];
        return i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2;
        function verb(n) {
          if (g2[n])
            i2[n] = function(v) {
              return new Promise(function(a2, b2) {
                q.push([n, v, a2, b2]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g2[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await3 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f2, v) {
          if (f2(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator3 = function(o) {
        var i2, p2;
        return i2 = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i2[Symbol.iterator] = function() {
          return this;
        }, i2;
        function verb(n, f2) {
          i2[n] = o[n] ? function(v) {
            return (p2 = !p2) ? { value: __await3(o[n](v)), done: n === "return" } : f2 ? f2(v) : v;
          } : f2;
        }
      };
      __asyncValues3 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i2;
        return m ? m.call(o) : (o = typeof __values3 === "function" ? __values3(o) : o[Symbol.iterator](), i2 = {}, verb("next"), verb("throw"), verb("return"), i2[Symbol.asyncIterator] = function() {
          return this;
        }, i2);
        function verb(n) {
          i2[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d2, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d2 });
          }, reject);
        }
      };
      __makeTemplateObject3 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      };
      __importStar3 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k2 in mod)
            if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
              __createBinding3(result, mod, k2);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      __importDefault3 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet3 = function(receiver, state, kind, f2) {
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f2 : kind === "a" ? f2.call(receiver) : f2 ? f2.value : state.get(receiver);
      };
      __classPrivateFieldSet3 = function(receiver, state, value, kind, f2) {
        if (kind === "m")
          throw new TypeError("Private method is not writable");
        if (kind === "a" && !f2)
          throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f2 : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f2.call(receiver, value) : f2 ? f2.value = value : state.set(receiver, value), value;
      };
      __classPrivateFieldIn3 = function(state, receiver) {
        if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
          throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
      };
      exporter("__extends", __extends3);
      exporter("__assign", __assign3);
      exporter("__rest", __rest3);
      exporter("__decorate", __decorate3);
      exporter("__param", __param3);
      exporter("__metadata", __metadata3);
      exporter("__awaiter", __awaiter3);
      exporter("__generator", __generator3);
      exporter("__exportStar", __exportStar3);
      exporter("__createBinding", __createBinding3);
      exporter("__values", __values3);
      exporter("__read", __read3);
      exporter("__spread", __spread3);
      exporter("__spreadArrays", __spreadArrays3);
      exporter("__spreadArray", __spreadArray3);
      exporter("__await", __await3);
      exporter("__asyncGenerator", __asyncGenerator3);
      exporter("__asyncDelegator", __asyncDelegator3);
      exporter("__asyncValues", __asyncValues3);
      exporter("__makeTemplateObject", __makeTemplateObject3);
      exporter("__importStar", __importStar3);
      exporter("__importDefault", __importDefault3);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet3);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet3);
      exporter("__classPrivateFieldIn", __classPrivateFieldIn3);
    });
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

// ../../node_modules/meshgrad/dist/index.mjs
var i = () => Math.round(Math.random() * 360);
var c = (n) => Math.round(Math.random() * (n * 100) % 100);
var g = (n, t, e) => Math.round(t / e * (n * 100) % 100);
var d = (n) => {
  if (!!n) {
    n = n.replace(/#/g, ""), n.length === 3 && (n = n.split("").map(function(b2) {
      return b2 + b2;
    }).join(""));
    var t = /^([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})[\da-z]{0,0}$/i.exec(n);
    if (!!t) {
      var e = parseInt(t[1], 16), r = parseInt(t[2], 16), a2 = parseInt(t[3], 16);
      e /= 255, r /= 255, a2 /= 255;
      var o = Math.max(e, r, a2), s = Math.min(e, r, a2), u = (o + s) / 2;
      if (o == s)
        u = 0;
      else {
        var m = o - s;
        switch (o) {
          case e:
            u = (r - a2) / m + (r < a2 ? 6 : 0);
            break;
          case r:
            u = (a2 - e) / m + 2;
            break;
          case a2:
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
var M = (n, t, e) => Array.from({ length: n }, (r, a2) => `radial-gradient(at ${e ? g(a2, e, n) : c(a2)}% ${e ? g(a2 * 10, e, n) : c(a2 * 10)}%, ${t[a2]} 0px, transparent 50%)
`);
var f = (n, t, e) => {
  let r = p(n, t || i()), a2 = M(n, r, e || void 0);
  return [r[0], a2.join(",")];
};
var k = (n, t, e) => {
  let [r, a2] = f(n, d(t) ? d(t) : void 0, e || void 0);
  return { backgroundColor: r, backgroundImage: a2 };
};

// src/Version.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var ELEMENTS = 8;
var Version = () => {
  return /* @__PURE__ */ jsx2("button", {
    className: "m-2 hidden rounded-full py-2 px-4 text-xs font-bold text-black shadow-md hover:shadow-xl md:block",
    style: k(ELEMENTS),
    children: /* @__PURE__ */ jsx2("a", {
      href: "http://github.com/miguelgargallo/next13-Fetch-Data-turbo",
      target: "_blank",
      rel: "noopener noreferrer",
      children: "v1.8.6"
    })
  });
};

// ../../node_modules/framer-motion/dist/es/motion/index.mjs
import * as React from "react";
import { forwardRef, useContext as useContext4 } from "react";

// ../../node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
import { createContext } from "react";
var MotionConfigContext = createContext({
  transformPagePoint: (p2) => p2,
  isStatic: false,
  reducedMotion: "never"
});

// ../../node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
import { createContext as createContext2, useContext } from "react";
var MotionContext = createContext2({});
function useVisualElementContext() {
  return useContext(MotionContext).visualElement;
}

// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
import { useContext as useContext2, useRef, useEffect as useEffect2 } from "react";

// ../../node_modules/framer-motion/dist/es/context/PresenceContext.mjs
import { createContext as createContext3 } from "react";
var PresenceContext = createContext3(null);

// ../../node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
import { useLayoutEffect, useEffect } from "react";

// ../../node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// ../../node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect;

// ../../node_modules/framer-motion/dist/es/context/LazyContext.mjs
import { createContext as createContext4 } from "react";
var LazyContext = createContext4({ strict: false });

// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement) {
  const parent = useVisualElementContext();
  const lazyContext = useContext2(LazyContext);
  const presenceContext = useContext2(PresenceContext);
  const reducedMotionConfig = useContext2(MotionConfigContext).reducedMotion;
  const visualElementRef = useRef();
  createVisualElement = createVisualElement || lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent,
      props,
      presenceId: presenceContext ? presenceContext.id : void 0,
      blockInitialAnimation: presenceContext ? presenceContext.initial === false : false,
      reducedMotionConfig
    });
  }
  const visualElement = visualElementRef.current;
  useIsomorphicLayoutEffect(() => {
    visualElement && visualElement.render();
  });
  useEffect2(() => {
    if (visualElement && visualElement.animationState) {
      visualElement.animationState.animateChanges();
    }
  });
  useIsomorphicLayoutEffect(() => () => visualElement && visualElement.notify("Unmount"), []);
  return visualElement;
}

// ../../node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
import { useCallback } from "react";

// ../../node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// ../../node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement, externalRef) {
  return useCallback(
    (instance) => {
      instance && visualState.mount && visualState.mount(instance);
      if (visualElement) {
        instance ? visualElement.mount(instance) : visualElement.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    [visualElement]
  );
}

// ../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
import { useContext as useContext3, useMemo } from "react";

// ../../node_modules/framer-motion/dist/es/render/utils/is-variant-label.mjs
function isVariantLabel(v) {
  return typeof v === "string" || Array.isArray(v);
}

// ../../node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// ../../node_modules/framer-motion/dist/es/render/utils/is-controlling-variants.mjs
var variantProps = [
  "initial",
  "animate",
  "exit",
  "whileHover",
  "whileDrag",
  "whileTap",
  "whileFocus",
  "whileInView"
];
function isControllingVariants(props) {
  return isAnimationControls(props.animate) || variantProps.some((name) => isVariantLabel(props[name]));
}
function isVariantNode(props) {
  return Boolean(isControllingVariants(props) || props.variants);
}

// ../../node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (isControllingVariants(props)) {
    const { initial, animate: animate3 } = props;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate3) ? animate3 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// ../../node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  const { initial, animate: animate3 } = getCurrentTreeVariants(props, useContext3(MotionContext));
  return useMemo(() => ({ initial, animate: animate3 }), [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate3)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// ../../node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var createDefinition = (propNames) => ({
  isEnabled: (props) => propNames.some((name) => !!props[name])
});
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};

// ../../node_modules/framer-motion/dist/es/motion/features/load-features.mjs
function loadFeatures(features) {
  for (const key in features) {
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// ../../node_modules/framer-motion/dist/es/utils/use-constant.mjs
import { useRef as useRef2 } from "react";
function useConstant(init) {
  const ref = useRef2(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// ../../node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// ../../node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(() => {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// ../../node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
import { createContext as createContext5 } from "react";
var LayoutGroupContext = createContext5({});

// ../../node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
import React__default from "react";
var VisualElementHandler = class extends React__default.Component {
  getSnapshotBeforeUpdate() {
    const { visualElement, props } = this.props;
    if (visualElement)
      visualElement.setProps(props);
    return null;
  }
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
};

// ../../node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
import { createContext as createContext6 } from "react";
var SwitchLayoutGroupContext = createContext6({});

// ../../node_modules/framer-motion/dist/es/motion/utils/symbol.mjs
var motionComponentSymbol = Symbol.for("motionComponentSymbol");

// ../../node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent({ preloadedFeatures, createVisualElement, projectionNodeConstructor, useRender, useVisualState, Component }) {
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    const configAndProps = __spreadProps(__spreadValues(__spreadValues({}, useContext4(MotionConfigContext)), props), {
      layoutId: useLayoutId(props)
    });
    const { isStatic } = configAndProps;
    let features = null;
    const context = useCreateMotionContext(props);
    const projectionId = isStatic ? void 0 : useProjectionId();
    const visualState = useVisualState(props, isStatic);
    if (!isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, configAndProps, createVisualElement);
      const lazyStrictMode = useContext4(LazyContext).strict;
      const initialLayoutGroupConfig = useContext4(SwitchLayoutGroupContext);
      if (context.visualElement) {
        features = context.visualElement.loadFeatures(
          configAndProps,
          lazyStrictMode,
          preloadedFeatures,
          projectionId,
          projectionNodeConstructor || featureDefinitions.projectionNodeConstructor,
          initialLayoutGroupConfig
        );
      }
    }
    return React.createElement(
      VisualElementHandler,
      { visualElement: context.visualElement, props: configAndProps },
      features,
      React.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, isStatic, context.visualElement))
    );
  }
  const ForwardRefComponent = forwardRef(MotionComponent);
  ForwardRefComponent[motionComponentSymbol] = Component;
  return ForwardRefComponent;
}
function useLayoutId({ layoutId }) {
  const layoutGroupId = useContext4(LayoutGroupContext).id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// ../../node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig = {}) {
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  const componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: (_target, key) => {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// ../../node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];

// ../../node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}

// ../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
import { createElement as createElement2 } from "react";

// ../../node_modules/framer-motion/dist/es/render/html/use-props.mjs
import { useMemo as useMemo2 } from "react";

// ../../node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// ../../node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformPropOrder = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
];
var transformProps = new Set(transformPropOrder);

// ../../node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, { layout, layoutId }) {
  return transformProps.has(key) || key.startsWith("origin") || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// ../../node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = (value) => !!(value === null || value === void 0 ? void 0 : value.getVelocity);

// ../../node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
var sortTransformProps = (a2, b2) => transformPropOrder.indexOf(a2) - transformPropOrder.indexOf(b2);
function buildTransform({ transform, transformKeys: transformKeys2 }, { enableHardwareAcceleration = true, allowTransformNone = true }, transformIsDefault, transformTemplate) {
  let transformString = "";
  transformKeys2.sort(sortTransformProps);
  for (const key of transformKeys2) {
    transformString += `${translateAlias[key] || key}(${transform[key]}) `;
  }
  if (enableHardwareAcceleration && !transform.z) {
    transformString += "translateZ(0)";
  }
  transformString = transformString.trim();
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}

// ../../node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
function isCSSVariable(key) {
  return key.startsWith("--");
}

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = (value, type) => {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// ../../node_modules/style-value-types/dist/es/utils.mjs
var clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function isString(v) {
  return typeof v === "string";
}

// ../../node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// ../../node_modules/style-value-types/dist/es/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// ../../node_modules/style-value-types/dist/es/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString(v))
    return v;
  const [a2, b2, c3, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c3),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// ../../node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// ../../node_modules/style-value-types/dist/es/color/rgba.mjs
var clampRgbUnit = clamp(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// ../../node_modules/style-value-types/dist/es/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g2 = "";
  let b2 = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g2 = v.substr(3, 2);
    b2 = v.substr(5, 2);
    a2 = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g2 = v.substr(2, 1);
    b2 = v.substr(3, 1);
    a2 = v.substr(4, 1);
    r += r;
    g2 += g2;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g2, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// ../../node_modules/style-value-types/dist/es/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// ../../node_modules/style-value-types/dist/es/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i2 = 0; i2 < numValues; i2++) {
      output = output.replace(i2 < numColors ? colorToken : numberToken, i2 < numColors ? color.transform(v2[i2]) : sanitize(v2[i2]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// ../../node_modules/style-value-types/dist/es/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
  const functions = v.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = __spreadProps(__spreadValues({}, number), {
  transform: Math.round
});

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// ../../node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  const { style, vars, transform, transformKeys: transformKeys2, transformOrigin } = state;
  transformKeys2.length = 0;
  let hasTransform2 = false;
  let hasTransformOrigin = false;
  let transformIsNone = true;
  for (const key in latestValues) {
    const value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    const valueType = numberValueTypes[key];
    const valueAsType = getValueAsType(value, valueType);
    if (transformProps.has(key)) {
      hasTransform2 = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== (valueType.default || 0))
        transformIsNone = false;
    } else if (key.startsWith("origin")) {
      hasTransformOrigin = true;
      transformOrigin[key] = valueAsType;
    } else {
      style[key] = valueAsType;
    }
  }
  if (!latestValues.transform) {
    if (hasTransform2 || transformTemplate) {
      style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
    } else if (style.transform) {
      style.transform = "none";
    }
  }
  if (hasTransformOrigin) {
    const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
    style.transformOrigin = `${originX} ${originY} ${originZ}`;
  }
}

// ../../node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = () => ({
  style: {},
  transform: {},
  transformKeys: [],
  transformOrigin: {},
  vars: {}
});

// ../../node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (const key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues({ transformTemplate }, visualState, isStatic) {
  return useMemo2(() => {
    const state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    return Object.assign({}, state.vars, state.style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  const styleProp = props.style || {};
  const style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  return props.transformValues ? props.transformValues(style) : style;
}
function useHTMLProps(props, visualState, isStatic) {
  const htmlProps = {};
  const style = useStyle(props, visualState, isStatic);
  if (props.drag && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : `pan-${props.drag === "x" ? "y" : "x"}`;
  }
  htmlProps.style = style;
  return htmlProps;
}

// ../../node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var animationProps = [
  "animate",
  "exit",
  "variants",
  "whileHover",
  "whileTap",
  "whileFocus",
  "whileDrag",
  "whileInView"
];
var tapProps = ["whileTap", "onTap", "onTapStart", "onTapCancel"];
var panProps = ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"];
var inViewProps = [
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport"
];
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "onHoverStart",
  "onHoverEnd",
  "layoutScroll",
  ...inViewProps,
  ...tapProps,
  ...animationProps,
  ...panProps
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

// ../../node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = (key) => !isValidMotionProp(key);
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = (key) => key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
}
try {
  loadExternalIsValidProp((init_is_prop_valid_esm(), __toCommonJS(is_prop_valid_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  const filteredProps = {};
  for (const key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// ../../node_modules/framer-motion/dist/es/render/svg/use-props.mjs
import { useMemo as useMemo3 } from "react";

// ../../node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return `${pxOriginX} ${pxOriginY}`;
}

// ../../node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
  attrs.pathLength = 1;
  const keys2 = useDashCase ? dashKeys : camelKeys;
  attrs[keys2.offset] = px.transform(-offset);
  const pathLength = px.transform(length);
  const pathSpacing = px.transform(spacing);
  attrs[keys2.array] = `${pathLength} ${pathSpacing}`;
}

// ../../node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var _b = _a, {
    attrX,
    attrY,
    originX,
    originY,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0
  } = _b, latest = __objRest(_b, [
    "attrX",
    "attrY",
    "originX",
    "originY",
    "pathLength",
    "pathSpacing",
    "pathOffset"
  ]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  const { attrs, style, dimensions } = state;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// ../../node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = () => __spreadProps(__spreadValues({}, createHtmlRenderState()), {
  attrs: {}
});

// ../../node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState) {
  const visualProps = useMemo3(() => {
    const state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __spreadProps(__spreadValues({}, state.attrs), {
      style: __spreadValues({}, state.style)
    });
  }, [visualState]);
  if (props.style) {
    const rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __spreadValues(__spreadValues({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

// ../../node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps = false) {
  const useRender = (Component, props, projectionId, ref, { latestValues }, isStatic) => {
    const useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    const visualProps = useVisualProps(props, latestValues, isStatic);
    const filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    const elementProps = __spreadProps(__spreadValues(__spreadValues({}, filteredProps), visualProps), {
      ref
    });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return createElement2(Component, elementProps);
  };
  return useRender;
}

// ../../node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var camelToDash = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

// ../../node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, { style, vars }, styleProp, projection) {
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (const key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// ../../node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);

// ../../node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (const key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// ../../node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props) {
  const { style } = props;
  const newValues = {};
  for (const key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// ../../node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props) {
  const newValues = scrapeMotionValuesFromProps(props);
  for (const key in props) {
    if (isMotionValue(props[key])) {
      const targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
import { useContext as useContext5 } from "react";

// ../../node_modules/framer-motion/dist/es/render/utils/resolve-variants.mjs
function resolveVariantFromProps(props, definition, custom, currentValues = {}, currentVelocity = {}) {
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = props.variants && props.variants[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}

// ../../node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = (v) => {
  return Array.isArray(v);
};

// ../../node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = (v) => {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = (v) => {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// ../../node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  const unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// ../../node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState({ scrapeMotionValuesFromProps: scrapeMotionValuesFromProps3, createRenderState, onMount }, props, context, presenceContext) {
  const state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = (instance) => onMount(props, instance, state);
  }
  return state;
}
var makeUseVisualState = (config) => (props, isStatic) => {
  const context = useContext5(MotionContext);
  const presenceContext = useContext5(PresenceContext);
  const make = () => makeState(config, props, context, presenceContext);
  return isStatic ? make() : useConstant(make);
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  const values = {};
  const motionValues = scrapeMotionValues(props);
  for (const key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  let { initial, animate: animate3 } = props;
  const isControllingVariants$1 = isControllingVariants(props);
  const isVariantNode$1 = isVariantNode(props);
  if (context && isVariantNode$1 && !isControllingVariants$1 && props.inherit !== false) {
    if (initial === void 0)
      initial = context.initial;
    if (animate3 === void 0)
      animate3 = context.animate;
  }
  let isInitialAnimationBlocked = presenceContext ? presenceContext.initial === false : false;
  isInitialAnimationBlocked = isInitialAnimationBlocked || initial === false;
  const variantToSet = isInitialAnimationBlocked ? animate3 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    const list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach((definition) => {
      const resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      const _a = resolved, { transitionEnd, transition } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
      for (const key in target) {
        let valueTarget = target[key];
        if (Array.isArray(valueTarget)) {
          const index2 = isInitialAnimationBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key] = valueTarget;
        }
      }
      for (const key in transitionEnd)
        values[key] = transitionEnd[key];
    });
  }
  return values;
}

// ../../node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: (props, instance, { renderState, latestValues }) => {
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// ../../node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// ../../node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component, { forwardMotionProps = false }, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  const baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __spreadProps(__spreadValues({}, baseConfig), {
    preloadedFeatures,
    useRender: createUseRender(forwardMotionProps),
    createVisualElement,
    projectionNodeConstructor,
    Component
  });
}

// ../../node_modules/framer-motion/dist/es/render/utils/types.mjs
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// ../../node_modules/framer-motion/dist/es/events/use-dom-event.mjs
import { useEffect as useEffect3 } from "react";
function addDomEvent(target, eventName, handler, options = { passive: true }) {
  target.addEventListener(eventName, handler, options);
  return () => target.removeEventListener(eventName, handler);
}
function useDomEvent(ref, eventName, handler, options) {
  useEffect3(() => {
    const element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// ../../node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
function useFocusGesture({ whileFocus, visualElement }) {
  const { animationState } = visualElement;
  const onFocus = () => {
    animationState && animationState.setActive(AnimationType.Focus, true);
  };
  const onBlur = () => {
    animationState && animationState.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement, "blur", whileFocus ? onBlur : void 0);
}

// ../../node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  const hasTouches = !!event.touches;
  return hasTouches;
}

// ../../node_modules/framer-motion/dist/es/events/event-info.mjs
function filterPrimaryPointer(eventHandler) {
  return (event) => {
    const isMouseEvent2 = event instanceof MouseEvent;
    const isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType = "page") {
  const primaryTouch = e.touches[0] || e.changedTouches[0];
  const point2 = primaryTouch || defaultPagePoint;
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function pointFromMouse(point2, pointType = "page") {
  return {
    x: point2[pointType + "X"],
    y: point2[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType = "page") {
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = (handler, shouldFilterPrimaryPointer = false) => {
  const listener = (event) => handler(event, extractEventInfo(event));
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

// ../../node_modules/framer-motion/dist/es/events/utils.mjs
var supportsPointerEvents = () => isBrowser && window.onpointerdown === null;
var supportsTouchEvents = () => isBrowser && window.ontouchstart === null;
var supportsMouseEvents = () => isBrowser && window.onmousedown === null;

// ../../node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

// ../../node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  let lock = null;
  return () => {
    const openLock = () => {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  let lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    const openHorizontal = globalHorizontalLock();
    const openVertical = globalVerticalLock();
    if (openHorizontal && openVertical) {
      lock = () => {
        openHorizontal();
        openVertical();
      };
    } else {
      if (openHorizontal)
        openHorizontal();
      if (openVertical)
        openVertical();
    }
  }
  return lock;
}
function isDragActive() {
  const openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// ../../node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
function createHoverEvent(visualElement, isActive, callback) {
  return (event, info) => {
    if (!isMouseEvent(event) || isDragActive())
      return;
    if (visualElement.animationState) {
      visualElement.animationState.setActive(AnimationType.Hover, isActive);
    }
    callback && callback(event, info);
  };
}
function useHoverGesture({ onHoverStart, onHoverEnd, whileHover, visualElement }) {
  usePointerEvent(visualElement, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement, true, onHoverStart) : void 0, { passive: !onHoverStart });
  usePointerEvent(visualElement, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
}

// ../../node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
import { useRef as useRef3 } from "react";

// ../../node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = (parent, child) => {
  if (!child) {
    return false;
  } else if (parent === child) {
    return true;
  } else {
    return isNodeOrChild(parent, child.parentElement);
  }
};

// ../../node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
import { useEffect as useEffect4 } from "react";
function useUnmountEffect(callback) {
  return useEffect4(() => () => callback(), []);
}

// ../../node_modules/popmotion/node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn
} = import_tslib.default;

// ../../node_modules/hey-listen/dist/hey-listen.es.js
var warning = function() {
};
var invariant = function() {
};
if (process.env.NODE_ENV !== "production") {
  warning = function(check, message) {
    if (!check && typeof console !== "undefined") {
      console.warn(message);
    }
  };
  invariant = function(check, message) {
    if (!check) {
      throw new Error(message);
    }
  };
}

// ../../node_modules/popmotion/dist/es/utils/clamp.mjs
var clamp2 = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp2(minDamping, maxDamping, dampingRatio);
  duration = clamp2(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c3 = Math.exp(-delta);
      return safeMin - a2 / b2 * c3;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d2 = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f2 = Math.exp(-delta);
      const g2 = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d2 - e) * f2) / g2;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i2 = 1; i2 < rootIterations; i2++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// ../../node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys2) {
  return keys2.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from, to] = [to, from];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
var zero = (_t) => 0;

// ../../node_modules/popmotion/dist/es/utils/progress.mjs
var progress = (from, to, value) => {
  const toFromDifference = to - from;
  return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

// ../../node_modules/popmotion/dist/es/utils/mix.mjs
var mix = (from, to, progress3) => -progress3 * from + progress3 * to + from;

// ../../node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p2, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p2 + (q - p2) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p2 + (q - p2) * (2 / 3 - t) * 6;
  return p2;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p2 = 2 * lightness - q;
    red = hueToRgb(p2, q, hue + 1 / 3);
    green = hueToRgb(p2, q, hue);
    blue = hueToRgb(p2, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// ../../node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from, to, v) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from, to) => {
  let fromColorType = getColorType(from);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// ../../node_modules/popmotion/dist/es/utils/inc.mjs
var isNum = (v) => typeof v === "number";

// ../../node_modules/popmotion/dist/es/utils/pipe.mjs
var combineFunctions = (a2, b2) => (v) => b2(a2(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// ../../node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from, to) => {
  const output = [...from];
  const numValues = output.length;
  const blendValue = from.map((fromThis, i2) => getMixer(fromThis, to[i2]));
  return (v) => {
    for (let i2 = 0; i2 < numValues; i2++) {
      output[i2] = blendValue[i2](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i2 = 0; i2 < numValues; i2++) {
    if (numNumbers || typeof parsed[i2] === "number") {
      numNumbers++;
    } else {
      if (parsed[i2].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p2) => `${p2 > 0 ? target : origin}`;
  }
};

// ../../node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from, to) => (p2) => mix(from, to, p2);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i2 = 0; i2 < numMixers; i2++) {
    let mixer = mixerFactory(output[i2], output[i2 + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i2] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from, to], [mixer]) {
  return (v) => mixer(progress(from, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i2 = 1;
      for (; i2 < inputLength; i2++) {
        if (input[i2] > v || i2 === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i2 - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp2(input[0], input[inputLength - 1], v)) : interpolator;
}

// ../../node_modules/popmotion/dist/es/easing/utils.mjs
var reverseEasing = (easing) => (p2) => 1 - easing(1 - p2);
var mirrorEasing = (easing) => (p2) => p2 <= 0.5 ? easing(2 * p2) / 2 : (2 - easing(2 * (1 - p2))) / 2;
var createExpoIn = (power) => (p2) => Math.pow(p2, power);
var createBackIn = (power) => (p2) => p2 * p2 * ((power + 1) * p2 - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p2) => (p2 *= 2) < 1 ? 0.5 * backEasing(p2) : 0.5 * (2 - Math.pow(2, -10 * (p2 - 1)));
};

// ../../node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p2) => p2;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p2) => 1 - Math.sin(Math.acos(p2));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p2) => {
  if (p2 === 1 || p2 === 0)
    return p2;
  const p22 = p2 * p2;
  return p2 < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p22 : p2 < BOUNCE_SECOND_THRESHOLD ? 9.075 * p22 - 9.9 * p2 + 3.4 : p2 < BOUNCE_THIRD_THRESHOLD ? ca * p22 - cb * p2 + cc : 10.8 * p2 * p2 - 20.52 * p2 + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p2) => p2 < 0.5 ? 0.5 * (1 - bounceOut(1 - p2 * 2)) : 0.5 * bounceOut(p2 * 2 - 1) + 0.5;

// ../../node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i2) => i2 !== 0 ? i2 / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ from = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from };
  const values = Array.isArray(to) ? to : [from, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// ../../node_modules/popmotion/dist/es/animations/generators/decay.mjs
function decay({ velocity = 0, from = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from };
  let amplitude = power * velocity;
  const ideal = from + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// ../../node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys2 = new Set(Object.keys(config));
  if (keys2.has("ease") || keys2.has("duration") && !keys2.has("dampingRatio")) {
    return keyframes;
  } else if (keys2.has("dampingRatio") || keys2.has("stiffness") || keys2.has("mass") || keys2.has("damping") || keys2.has("restSpeed") || keys2.has("restDelta")) {
    return spring;
  }
  return keyframes;
}

// ../../node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// ../../node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i2 = 0; i2 < numToRun; i2++) {
          const callback = toRun[i2];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// ../../node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// ../../node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function loopElapsed(elapsed, duration, delay2 = 0) {
  return elapsed - duration - delay2;
}
function reverseElapsed(elapsed, duration, delay2 = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay2) : duration - (elapsed - duration) + delay2;
}
function hasRepeatDelayElapsed(elapsed, duration, delay2, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay2 : elapsed <= -delay2;
}

// ../../node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from, to)) {
    interpolateFromNumber = interpolate([0, 100], [from, to], {
      clamp: false
    });
    from = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// ../../node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function boundaryNearest(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from)) {
    startSpring({ from, velocity, to: boundaryNearest(from) });
  } else {
    let target = power * velocity + from;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// ../../node_modules/popmotion/dist/es/utils/is-point.mjs
var isPoint = (point2) => point2.hasOwnProperty("x") && point2.hasOwnProperty("y");

// ../../node_modules/popmotion/dist/es/utils/is-point-3d.mjs
var isPoint3D = (point2) => isPoint(point2) && point2.hasOwnProperty("z");

// ../../node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// ../../node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c2 = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c2(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c2(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i2 = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i2 < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i2 = 0; i2 < newtonIterations; ++i2) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i2 = 0; i2 < kSplineTableSize; ++i2) {
    sampleValues[i2] = calcBezier(i2 * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// ../../node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function useTapGesture({ onTap, onTapStart, onTapCancel, whileTap, visualElement }) {
  const hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  const isPressing = useRef3(false);
  const cancelPointerEndListeners = useRef3(null);
  const eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
  };
  function removePointerEndListener() {
    cancelPointerEndListeners.current && cancelPointerEndListeners.current();
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    removePointerEndListener();
    isPressing.current = false;
    visualElement.animationState && visualElement.animationState.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement.current, event.target) ? onTapCancel && onTapCancel(event, info) : onTap && onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel && onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    visualElement.animationState && visualElement.animationState.setActive(AnimationType.Tap, true);
    onTapStart && onTapStart(event, info);
  }
  usePointerEvent(visualElement, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
  useUnmountEffect(removePointerEndListener);
}

// ../../node_modules/framer-motion/dist/es/utils/process.mjs
var defaultEnvironment = "production";
var env = typeof process === "undefined" || process.env === void 0 ? defaultEnvironment : process.env.NODE_ENV || defaultEnvironment;

// ../../node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
import { useRef as useRef4, useEffect as useEffect5 } from "react";

// ../../node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// ../../node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = (entry) => {
  const callback = observerCallbacks.get(entry.target);
  callback && callback(entry);
};
var fireAllObserverCallbacks = (entries) => {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var _b = _a, { root } = _b, options = __objRest(_b, ["root"]);
  const lookupRoot = root || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  const rootObservers = observers.get(lookupRoot);
  const key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __spreadValues({ root }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  const rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return () => {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// ../../node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport({ visualElement, whileInView, onViewportEnter, onViewportLeave, viewport = {} }) {
  const state = useRef4({
    hasEnteredView: false,
    isInView: false
  });
  let shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  const useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement, { root, margin: rootMargin, amount = "some", once }) {
  useEffect5(() => {
    if (!shouldObserve || !visualElement.current)
      return;
    const options = {
      root: root === null || root === void 0 ? void 0 : root.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    const intersectionCallback = (entry) => {
      const { isIntersecting } = entry;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      if (visualElement.animationState) {
        visualElement.animationState.setActive(AnimationType.InView, isIntersecting);
      }
      const props = visualElement.getProps();
      const callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback && callback(entry);
    };
    return observeIntersection(visualElement.current, options, intersectionCallback);
  }, [shouldObserve, root, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement, { fallback = true }) {
  useEffect5(() => {
    if (!shouldObserve || !fallback)
      return;
    if (env !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(() => {
      state.hasEnteredView = true;
      const { onViewportEnter } = visualElement.getProps();
      onViewportEnter && onViewportEnter(null);
      if (visualElement.animationState) {
        visualElement.animationState.setActive(AnimationType.InView, true);
      }
    });
  }, [shouldObserve]);
}

// ../../node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
var makeRenderlessComponent = (hook) => (props) => {
  hook(props);
  return null;
};

// ../../node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// ../../node_modules/framer-motion/dist/es/motion/features/animations.mjs
import { useEffect as useEffect7, useContext as useContext7 } from "react";

// ../../node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
import { useContext as useContext6, useId, useEffect as useEffect6 } from "react";
function usePresence() {
  const context = useContext6(PresenceContext);
  if (context === null)
    return [true, null];
  const { isPresent, onExitComplete, register } = context;
  const id2 = useId();
  useEffect6(() => register(id2), []);
  const safeToRemove = () => onExitComplete && onExitComplete(id2);
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// ../../node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  const prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (let i2 = 0; i2 < prevLength; i2++) {
    if (prev[i2] !== next[i2])
      return false;
  }
  return true;
}

// ../../node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = (seconds) => seconds * 1e3;

// ../../node_modules/framer-motion/dist/es/animation/utils/easing.mjs
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = (definition) => {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
    const [x1, y1, x2, y2] = definition;
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, `Invalid easing type '${definition}'`);
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = (ease) => {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// ../../node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = (key, value) => {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// ../../node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = () => ({
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
});
var criticallyDampedSpring = (to) => ({
  type: "spring",
  stiffness: 550,
  damping: to === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
});
var linearTween = () => ({
  type: "keyframes",
  ease: "linear",
  duration: 0.3
});
var keyframes2 = (values) => ({
  type: "keyframes",
  duration: 0.8,
  values
});
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = (valueKey, to) => {
  let transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes2;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __spreadValues({ to }, transitionFactory(to));
};

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = __spreadProps(__spreadValues({}, numberValueTypes), {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = (key) => defaultValueTypes[key];

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  let defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// ../../node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// ../../node_modules/framer-motion/dist/es/utils/delay.mjs
function delay(callback, timeout) {
  const start = performance.now();
  const checkElapsed = ({ timestamp }) => {
    const elapsed = timestamp - start;
    if (elapsed >= timeout) {
      cancelSync.read(checkElapsed);
      callback(elapsed - timeout);
    }
  };
  es_default.read(checkElapsed, true);
  return () => cancelSync.read(checkElapsed);
}

// ../../node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined(_a) {
  var _b = _a, { when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from } = _b, transition = __objRest(_b, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var _b = _a, { ease, times, yoyo, flip, loop } = _b, transition = __objRest(_b, ["ease", "times", "yoyo", "flip", "loop"]);
  const options = __spreadValues({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  const valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = [...options.to];
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  if (Array.isArray(options.to) && transition.duration === void 0) {
    transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __spreadValues(__spreadValues({}, transition), getDefaultTransition(key, options.to));
  }
  return __spreadValues(__spreadValues({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  const valueTransition = getValueTransition(transition, key) || {};
  let origin = valueTransition.from !== void 0 ? valueTransition.from : value.get();
  const isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  const isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${key} from "${origin}" to "${target}". ${origin} is not an animatable value - to enable this animation set ${origin} to a value animatable to ${target} via the \`style\` property.`);
  function start() {
    const options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: (v) => value.set(v)
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__spreadValues(__spreadValues({}, options), valueTransition)) : animate(__spreadProps(__spreadValues({}, getPopmotionAnimationOptions(valueTransition, options, key)), {
      onUpdate: (v) => {
        options.onUpdate(v);
        valueTransition.onUpdate && valueTransition.onUpdate(v);
      },
      onComplete: () => {
        options.onComplete();
        valueTransition.onComplete && valueTransition.onComplete();
      }
    }));
  }
  function set() {
    const finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    valueTransition.onUpdate && valueTransition.onUpdate(finalTarget);
    valueTransition.onComplete && valueTransition.onComplete();
    return { stop: () => {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition = {}) {
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start((onComplete) => {
    let controls;
    const animation = getAnimation(key, value, target, transition, onComplete);
    const delayBy = getDelayFromTransition(transition, key);
    const start = () => controls = animation();
    let cancelDelay;
    if (delayBy) {
      cancelDelay = delay(start, secondsToMilliseconds(delayBy));
    } else {
      start();
    }
    return () => {
      cancelDelay && cancelDelay();
      controls && controls.stop();
    };
  });
}

// ../../node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = (v) => /^\-?\d*\.?\d+$/.test(v);

// ../../node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = (v) => /^0[^.\s]+$/.test(v);

// ../../node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  if (arr.indexOf(item) === -1)
    arr.push(item);
}
function removeItem(arr, item) {
  const index2 = arr.indexOf(item);
  if (index2 > -1)
    arr.splice(index2, 1);
}

// ../../node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = class {
  constructor() {
    this.subscriptions = [];
  }
  add(handler) {
    addUniqueItem(this.subscriptions, handler);
    return () => removeItem(this.subscriptions, handler);
  }
  notify(a2, b2, c3) {
    const numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c3);
    } else {
      for (let i2 = 0; i2 < numSubscriptions; i2++) {
        const handler = this.subscriptions[i2];
        handler && handler(a2, b2, c3);
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};

// ../../node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = (value) => {
  return !isNaN(parseFloat(value));
};
var MotionValue = class {
  constructor(init) {
    this.version = "7.6.7";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = (v, render = true) => {
      this.prev = this.current;
      this.current = v;
      const { delta, timestamp } = getFrameData();
      if (this.lastUpdated !== timestamp) {
        this.timeDelta = delta;
        this.lastUpdated = timestamp;
        es_default.postRender(this.scheduleVelocityCheck);
      }
      if (this.prev !== this.current) {
        this.updateSubscribers.notify(this.current);
      }
      if (this.velocityUpdateSubscribers.getSize()) {
        this.velocityUpdateSubscribers.notify(this.getVelocity());
      }
      if (render) {
        this.renderSubscribers.notify(this.current);
      }
    };
    this.scheduleVelocityCheck = () => es_default.postRender(this.velocityCheck);
    this.velocityCheck = ({ timestamp }) => {
      if (timestamp !== this.lastUpdated) {
        this.prev = this.current;
        this.velocityUpdateSubscribers.notify(this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  onChange(subscription) {
    return this.updateSubscribers.add(subscription);
  }
  clearListeners() {
    this.updateSubscribers.clear();
  }
  onRenderRequest(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  }
  attach(passiveEffect) {
    this.passiveEffect = passiveEffect;
  }
  set(v, render = true) {
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }
  start(animation) {
    this.stop();
    return new Promise((resolve) => {
      this.hasAnimated = true;
      this.stopAnimation = animation(resolve);
    }).then(() => this.clearAnimation());
  }
  stop() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  }
  isAnimating() {
    return !!this.stopAnimation;
  }
  clearAnimation() {
    this.stopAnimation = null;
  }
  destroy() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  }
};
function motionValue(init) {
  return new MotionValue(init);
}

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = (v) => (type) => type.test(v);

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: (v) => v === "auto",
  parse: (v) => v
};

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = (v) => dimensionValueTypes.find(testValueType(v));

// ../../node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = [...dimensionValueTypes, color, complex];
var findValueType = (v) => valueTypes.find(testValueType(v));

// ../../node_modules/framer-motion/dist/es/render/utils/resolve-dynamic-variants.mjs
function getCurrent(visualElement) {
  const current = {};
  visualElement.values.forEach((value, key) => current[key] = value.get());
  return current;
}
function getVelocity(visualElement) {
  const velocity = {};
  visualElement.values.forEach((value, key) => velocity[key] = value.getVelocity());
  return velocity;
}
function resolveVariant(visualElement, definition, custom) {
  const props = visualElement.getProps();
  return resolveVariantFromProps(props, definition, custom !== void 0 ? custom : props.custom, getCurrent(visualElement), getVelocity(visualElement));
}

// ../../node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement, key, value) {
  if (visualElement.hasValue(key)) {
    visualElement.getValue(key).set(value);
  } else {
    visualElement.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement, definition) {
  const resolved = resolveVariant(visualElement, definition);
  let _a = resolved ? visualElement.makeTargetAnimatable(resolved, false) : {}, { transitionEnd = {}, transition = {} } = _a, target = __objRest(_a, ["transitionEnd", "transition"]);
  target = __spreadValues(__spreadValues({}, target), transitionEnd);
  for (const key in target) {
    const value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement, key, value);
  }
}
function checkTargetForNewValues(visualElement, target, origin) {
  var _a, _b;
  const newValueKeys = Object.keys(target).filter((key) => !visualElement.hasValue(key));
  const numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (let i2 = 0; i2 < numNewValues; i2++) {
    const key = newValueKeys[i2];
    const targetValue = target[key];
    let value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement.addValue(key, motionValue(value));
    if (origin[key] === void 0) {
      origin[key] = value;
    }
    if (value !== null)
      visualElement.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  const valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement) {
  var _a;
  const origin = {};
  for (const key in target) {
    const transitionOrigin = getOriginFromTransition(key, transition);
    origin[key] = transitionOrigin !== void 0 ? transitionOrigin : (_a = visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.get();
  }
  return origin;
}

// ../../node_modules/framer-motion/dist/es/value/use-will-change/is.mjs
function isWillChangeMotionValue(value) {
  return Boolean(isMotionValue(value) && value.add);
}

// ../../node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement, definition, options = {}) {
  visualElement.notify("AnimationStart", definition);
  let animation;
  if (Array.isArray(definition)) {
    const animations2 = definition.map((variant) => animateVariant(visualElement, variant, options));
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement, definition, options);
  } else {
    const resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement, definition, options.custom) : definition;
    animation = animateTarget(visualElement, resolvedDefinition, options);
  }
  return animation.then(() => visualElement.notify("AnimationComplete", definition));
}
function animateVariant(visualElement, variant, options = {}) {
  var _a;
  const resolved = resolveVariant(visualElement, variant, options.custom);
  let { transition = visualElement.getDefaultTransition() || {} } = resolved || {};
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  const getAnimation2 = resolved ? () => animateTarget(visualElement, resolved, options) : () => Promise.resolve();
  const getChildAnimations = ((_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? (forwardDelay = 0) => {
    const { delayChildren = 0, staggerChildren, staggerDirection } = transition;
    return animateChildren(visualElement, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : () => Promise.resolve();
  const { when } = transition;
  if (when) {
    const [first, last] = when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement, definition, { delay: delay2 = 0, transitionOverride, type } = {}) {
  var _a;
  let _a2 = visualElement.makeTargetAnimatable(definition), { transition = visualElement.getDefaultTransition(), transitionEnd } = _a2, target = __objRest(_a2, ["transition", "transitionEnd"]);
  const willChange = visualElement.getValue("willChange");
  if (transitionOverride)
    transition = transitionOverride;
  const animations2 = [];
  const animationTypeState = type && ((_a = visualElement.animationState) === null || _a === void 0 ? void 0 : _a.getState()[type]);
  for (const key in target) {
    const value = visualElement.getValue(key);
    const valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    let valueTransition = __spreadValues({ delay: delay2 }, transition);
    if (visualElement.shouldReduceMotion && transformProps.has(key)) {
      valueTransition = __spreadProps(__spreadValues({}, valueTransition), {
        type: false,
        delay: 0
      });
    }
    let animation = startAnimation(key, value, valueTarget, valueTransition);
    if (isWillChangeMotionValue(willChange)) {
      willChange.add(key);
      animation = animation.then(() => willChange.remove(key));
    }
    animations2.push(animation);
  }
  return Promise.all(animations2).then(() => {
    transitionEnd && setTarget(visualElement, transitionEnd);
  });
}
function animateChildren(visualElement, variant, delayChildren = 0, staggerChildren = 0, staggerDirection = 1, options) {
  const animations2 = [];
  const maxStaggerDuration = (visualElement.variantChildren.size - 1) * staggerChildren;
  const generateStaggerDuration = staggerDirection === 1 ? (i2 = 0) => i2 * staggerChildren : (i2 = 0) => maxStaggerDuration - i2 * staggerChildren;
  Array.from(visualElement.variantChildren).sort(sortByTreeOrder).forEach((child, i2) => {
    animations2.push(animateVariant(child, variant, __spreadProps(__spreadValues({}, options), {
      delay: delayChildren + generateStaggerDuration(i2)
    })).then(() => child.notify("AnimationComplete", variant)));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
  const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// ../../node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = [...variantPriorityOrder].reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement) {
  return (animations2) => Promise.all(animations2.map(({ animation, options }) => animateVisualElement(visualElement, animation, options)));
}
function createAnimationState(visualElement) {
  let animate3 = animateList(visualElement);
  const state = createState();
  let isInitialRender = true;
  const buildResolvedTypeValues = (acc, definition) => {
    const resolved = resolveVariant(visualElement, definition);
    if (resolved) {
      const _a = resolved, { transition, transitionEnd } = _a, target = __objRest(_a, ["transition", "transitionEnd"]);
      acc = __spreadValues(__spreadValues(__spreadValues({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function setAnimateFunction(makeAnimator) {
    animate3 = makeAnimator(visualElement);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    const props = visualElement.getProps();
    const context = visualElement.getVariantContext(true) || {};
    const animations2 = [];
    const removedKeys = /* @__PURE__ */ new Set();
    let encounteredKeys = {};
    let removedVariantIndex = Infinity;
    for (let i2 = 0; i2 < numAnimationTypes; i2++) {
      const type = reversePriorityOrder[i2];
      const typeState = state[type];
      const prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      const propIsVariant = isVariantLabel(prop);
      const activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      let isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __spreadValues({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        continue;
      }
      const variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      let shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      const definitionList = Array.isArray(prop) ? prop : [prop];
      let resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      const { prevResolvedValues = {} } = typeState;
      const allKeys = __spreadValues(__spreadValues({}, prevResolvedValues), resolvedValues);
      const markToAnimate = (key) => {
        shouldAnimateType = true;
        removedKeys.delete(key);
        typeState.needsAnimating[key] = true;
      };
      for (const key in allKeys) {
        const next = resolvedValues[key];
        const prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __spreadValues(__spreadValues({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push(...definitionList.map((animation) => ({
          animation,
          options: __spreadValues({ type }, options)
        })));
      }
    }
    if (removedKeys.size) {
      const fallbackAnimation = {};
      removedKeys.forEach((key) => {
        const fallbackTarget = visualElement.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation });
    }
    let shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate3(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach((child) => {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    const animations2 = animateChanges(options, type);
    for (const key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: () => state
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (Array.isArray(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive = false) {
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  return {
    [AnimationType.Animate]: createTypeState(true),
    [AnimationType.InView]: createTypeState(),
    [AnimationType.Hover]: createTypeState(),
    [AnimationType.Tap]: createTypeState(),
    [AnimationType.Drag]: createTypeState(),
    [AnimationType.Focus]: createTypeState(),
    [AnimationType.Exit]: createTypeState()
  };
}

// ../../node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(({ visualElement, animate: animate3 }) => {
    visualElement.animationState || (visualElement.animationState = createAnimationState(visualElement));
    if (isAnimationControls(animate3)) {
      useEffect7(() => animate3.subscribe(visualElement), [animate3]);
    }
  }),
  exit: makeRenderlessComponent((props) => {
    const { custom, visualElement } = props;
    const [isPresent, safeToRemove] = usePresence();
    const presenceContext = useContext7(PresenceContext);
    useEffect7(() => {
      visualElement.isPresent = isPresent;
      const animation = visualElement.animationState && visualElement.animationState.setActive(AnimationType.Exit, !isPresent, {
        custom: presenceContext && presenceContext.custom || custom
      });
      if (animation && !isPresent) {
        animation.then(safeToRemove);
      }
    }, [isPresent]);
  })
};

// ../../node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
import { useEffect as useEffect8 } from "react";

// ../../node_modules/framer-motion/dist/es/gestures/PanSession.mjs
var PanSession = class {
  constructor(event, handlers, { transformPagePoint } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const info2 = getPanInfo(this.lastMoveEventInfo, this.history);
      const isPanStarted = this.startEvent !== null;
      const isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      const { point: point3 } = info2;
      const { timestamp: timestamp2 } = getFrameData();
      this.history.push(__spreadProps(__spreadValues({}, point3), { timestamp: timestamp2 }));
      const { onStart, onMove } = this.handlers;
      if (!isPanStarted) {
        onStart && onStart(this.lastMoveEvent, info2);
        this.startEvent = this.lastMoveEvent;
      }
      onMove && onMove(this.lastMoveEvent, info2);
    };
    this.handlePointerMove = (event2, info2) => {
      this.lastMoveEvent = event2;
      this.lastMoveEventInfo = transformPoint(info2, this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        this.handlePointerUp(event2, info2);
        return;
      }
      es_default.update(this.updatePoint, true);
    };
    this.handlePointerUp = (event2, info2) => {
      this.end();
      const { onEnd, onSessionEnd } = this.handlers;
      const panInfo = getPanInfo(transformPoint(info2, this.transformPagePoint), this.history);
      if (this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    const info = extractEventInfo(event);
    const initialInfo = transformPoint(info, this.transformPagePoint);
    const { point: point2 } = initialInfo;
    const { timestamp } = getFrameData();
    this.history = [__spreadProps(__spreadValues({}, point2), { timestamp })];
    const { onSessionStart } = handlers;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(handlers) {
    this.handlers = handlers;
  }
  end() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  }
};
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo({ point: point2 }, history) {
  return {
    point: point2,
    delta: subtractPoint(point2, lastDevicePoint(history)),
    offset: subtractPoint(point2, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  let i2 = history.length - 1;
  let timestampedPoint = null;
  const lastPoint = lastDevicePoint(history);
  while (i2 >= 0) {
    timestampedPoint = history[i2];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i2--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  const time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  const currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target = 0, maxDistance = 0.01) {
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin = 0.5) {
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent) {
  target.min = parent.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent) {
  calcRelativeAxis(target.x, relative.x, parent.x);
  calcRelativeAxis(target.y, relative.y, parent.y);
}
function calcRelativeAxisPosition(target, layout, parent) {
  target.min = layout.min - parent.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent) {
  calcRelativeAxisPosition(target.x, layout.x, parent.x);
  calcRelativeAxisPosition(target.y, layout.y, parent.y);
}

// ../../node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point2, { min, max }, elastic) {
  if (min !== void 0 && point2 < min) {
    point2 = elastic ? mix(min, point2, elastic.min) : Math.max(point2, min);
  } else if (max !== void 0 && point2 > max) {
    point2 = elastic ? mix(max, point2, elastic.max) : Math.min(point2, max);
  }
  return point2;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, { top, left, bottom, right }) {
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  let min = constraintsAxis.min - layoutAxis.min;
  let max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    [min, max] = [max, min];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  let origin = 0.5;
  const sourceLength = calcLength(source);
  const targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp2(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  const relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic = defaultElastic) {
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var createDelta = () => ({
  x: createAxisDelta(),
  y: createAxisDelta()
});
var createAxis = () => ({ min: 0, max: 0 });
var createBox = () => ({
  x: createAxis(),
  y: createAxis()
});

// ../../node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox({ top, left, right, bottom }) {
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox({ x, y }) {
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point2, transformPoint2) {
  if (!transformPoint2)
    return point2;
  const topLeft = transformPoint2({ x: point2.left, y: point2.top });
  const bottomRight = transformPoint2({ x: point2.right, y: point2.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// ../../node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale({ scale: scale2, scaleX, scaleY }) {
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function has2DTranslate(values) {
  return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
  return value && value !== "0%";
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point2, scale2, originPoint) {
  const distanceFromOrigin = point2 - originPoint;
  const scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point2, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, boxScale, originPoint);
  }
  return scalePoint(point2, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate = 0, scale2 = 1, originPoint, boxScale) {
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, { x, y }) {
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
  var _a, _b;
  const treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  let node;
  let delta;
  for (let i2 = 0; i2 < treeLength; i2++) {
    node = treePath[i2];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, [key, scaleKey, originKey]) {
  const axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  const originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys);
  transformAxis(box.y, transform, yKeys);
}

// ../../node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  const viewportBox = measureViewportBox(element, transformPagePoint);
  const { scroll: scroll2 } = rootProjectionNode2;
  if (scroll2) {
    translateAxis(viewportBox.x, scroll2.x);
    translateAxis(viewportBox.y, scroll2.y);
  }
  return viewportBox;
}

// ../../node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = class {
  constructor(visualElement) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement;
  }
  start(originEvent, { snapToCursor = false } = {}) {
    if (this.visualElement.isPresent === false)
      return;
    const onSessionStart = (event) => {
      this.stopAnimation();
      if (snapToCursor) {
        this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    const onStart = (event, info) => {
      var _a;
      const { drag: drag2, dragPropagation, onDragStart } = this.getProps();
      if (drag2 && !dragPropagation) {
        if (this.openGlobalLock)
          this.openGlobalLock();
        this.openGlobalLock = getGlobalLock(drag2);
        if (!this.openGlobalLock)
          return;
      }
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      if (this.visualElement.projection) {
        this.visualElement.projection.isAnimationBlocked = true;
        this.visualElement.projection.target = void 0;
      }
      eachAxis((axis) => {
        var _a2, _b;
        let current = this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          const measuredAxis = (_b = (_a2 = this.visualElement.projection) === null || _a2 === void 0 ? void 0 : _a2.layout) === null || _b === void 0 ? void 0 : _b.layoutBox[axis];
          if (measuredAxis) {
            const length = calcLength(measuredAxis);
            current = length * (parseFloat(current) / 100);
          }
        }
        this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a = this.visualElement.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Drag, true);
    };
    const onMove = (event, info) => {
      const { dragPropagation, dragDirectionLock, onDirectionLock, onDrag } = this.getProps();
      if (!dragPropagation && !this.openGlobalLock)
        return;
      const { offset } = info;
      if (dragDirectionLock && this.currentDirection === null) {
        this.currentDirection = getCurrentDirection(offset);
        if (this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(this.currentDirection);
        }
        return;
      }
      this.updateAxis("x", info.point, offset);
      this.updateAxis("y", info.point, offset);
      this.visualElement.render();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    const onSessionEnd = (event, info) => this.stop(event, info);
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(event, info) {
    const isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    const { velocity } = info;
    this.startAnimation(velocity);
    const { onDragEnd } = this.getProps();
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  }
  cancel() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    const { dragPropagation } = this.getProps();
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  }
  updateAxis(axis, _point, offset) {
    const { drag: drag2 } = this.getProps();
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    const axisValue = this.getAxisMotionValue(axis);
    let next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  }
  resolveConstraints() {
    const { dragConstraints, dragElastic } = this.getProps();
    const { layout } = this.visualElement.projection || {};
    const prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.layoutBox, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis((axis) => {
        if (this.getAxisMotionValue(axis)) {
          this.constraints[axis] = rebaseAxisConstraints(layout.layoutBox[axis], this.constraints[axis]);
        }
      });
    }
  }
  resolveRefConstraints() {
    const { dragConstraints: constraints, onMeasureDragConstraints } = this.getProps();
    if (!constraints || !isRefObject(constraints))
      return false;
    const constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection } = this.visualElement;
    if (!projection || !projection.layout)
      return false;
    const constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    let measuredConstraints = calcViewportConstraints(projection.layout.layoutBox, constraintsBox);
    if (onMeasureDragConstraints) {
      const userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  }
  startAnimation(velocity) {
    const { drag: drag2, dragMomentum, dragElastic, dragTransition, dragSnapToOrigin, onDragTransitionEnd } = this.getProps();
    const constraints = this.constraints || {};
    const momentumAnimations = eachAxis((axis) => {
      var _a;
      if (!shouldDrag(axis, drag2, this.currentDirection)) {
        return;
      }
      let transition = (_a = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a !== void 0 ? _a : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      const bounceStiffness = dragElastic ? 200 : 1e6;
      const bounceDamping = dragElastic ? 40 : 1e7;
      const inertia2 = __spreadValues(__spreadValues({
        type: "inertia",
        velocity: dragMomentum ? velocity[axis] : 0,
        bounceStiffness,
        bounceDamping,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10
      }, dragTransition), transition);
      return this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  }
  startAxisValueAnimation(axis, transition) {
    const axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  }
  stopAnimation() {
    eachAxis((axis) => this.getAxisMotionValue(axis).stop());
  }
  getAxisMotionValue(axis) {
    var _a, _b;
    const dragKey = "_drag" + axis.toUpperCase();
    const externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  }
  snapToCursor(point2) {
    eachAxis((axis) => {
      const { drag: drag2 } = this.getProps();
      if (!shouldDrag(axis, drag2, this.currentDirection))
        return;
      const { projection } = this.visualElement;
      const axisValue = this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        const { min, max } = projection.layout.layoutBox[axis];
        axisValue.set(point2[axis] - mix(min, max, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    var _a;
    if (!this.visualElement.current)
      return;
    const { drag: drag2, dragConstraints } = this.getProps();
    const { projection } = this.visualElement;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    const boxProgress = { x: 0, y: 0 };
    eachAxis((axis) => {
      const axisValue = this.getAxisMotionValue(axis);
      if (axisValue) {
        const latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, this.constraints[axis]);
      }
    });
    const { transformTemplate } = this.visualElement.getProps();
    this.visualElement.current.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis((axis) => {
      if (!shouldDrag(axis, drag2, null))
        return;
      const axisValue = this.getAxisMotionValue(axis);
      const { min, max } = this.constraints[axis];
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  }
  addListeners() {
    var _a;
    if (!this.visualElement.current)
      return;
    elementDragControls.set(this.visualElement, this);
    const element = this.visualElement.current;
    const stopPointerListener = addPointerEvent(element, "pointerdown", (event) => {
      const { drag: drag2, dragListener = true } = this.getProps();
      drag2 && dragListener && this.start(event);
    });
    const measureDragConstraints = () => {
      const { dragConstraints } = this.getProps();
      if (isRefObject(dragConstraints)) {
        this.constraints = this.resolveRefConstraints();
      }
    };
    const { projection } = this.visualElement;
    const stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    const stopResizeListener = addDomEvent(window, "resize", () => this.scalePositionWithinConstraints());
    const stopLayoutUpdateListener = projection.addEventListener("didUpdate", ({ delta, hasLayoutChanged }) => {
      if (this.isDragging && hasLayoutChanged) {
        eachAxis((axis) => {
          const motionValue2 = this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
      stopLayoutUpdateListener === null || stopLayoutUpdateListener === void 0 ? void 0 : stopLayoutUpdateListener();
    };
  }
  getProps() {
    const props = this.visualElement.getProps();
    const { drag: drag2 = false, dragDirectionLock = false, dragPropagation = false, dragConstraints = false, dragElastic = defaultElastic, dragMomentum = true } = props;
    return __spreadProps(__spreadValues({}, props), {
      drag: drag2,
      dragDirectionLock,
      dragPropagation,
      dragConstraints,
      dragElastic,
      dragMomentum
    });
  }
};
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold = 10) {
  let direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// ../../node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  const { dragControls: groupDragControls, visualElement } = props;
  const dragControls = useConstant(() => new VisualElementDragControls(visualElement));
  useEffect8(() => groupDragControls && groupDragControls.subscribe(dragControls), [dragControls, groupDragControls]);
  useEffect8(() => dragControls.addListeners(), [dragControls]);
}

// ../../node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
import { useRef as useRef5, useContext as useContext8, useEffect as useEffect9 } from "react";
function usePanGesture({ onPan, onPanStart, onPanEnd, onPanSessionStart, visualElement }) {
  const hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  const panSession = useRef5(null);
  const { transformPagePoint } = useContext8(MotionConfigContext);
  const handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: (event, info) => {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  useEffect9(() => {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(() => panSession.current && panSession.current.end());
}

// ../../node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// ../../node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  const match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  const [, token, fallback] = match;
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
  invariant(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
  const [token, fallback] = parseCSSVariable(current);
  if (!token)
    return;
  const resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement, _a, transitionEnd) {
  var target = __objRest(_a, []);
  const element = visualElement.current;
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __spreadValues({}, transitionEnd);
  }
  visualElement.values.forEach((value) => {
    const current = value.get();
    if (!isCSSVariable2(current))
      return;
    const resolved = getVariableValue(current, element);
    if (resolved)
      value.set(resolved);
  });
  for (const key in target) {
    const current = target[key];
    if (!isCSSVariable2(current))
      continue;
    const resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd && transitionEnd[key] === void 0) {
      transitionEnd[key] = current;
    }
  }
  return { target, transitionEnd };
}

// ../../node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = (key) => positionalKeys.has(key);
var hasPositionalKey = (target) => {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = (value, to) => {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = (v) => v === number || v === px;
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = (matrix, pos) => parseFloat(matrix.split(", ")[pos]);
var getTranslateFromMatrix = (pos2, pos3) => (_bbox, { transform }) => {
  if (transform === "none" || !transform)
    return 0;
  const matrix3d = transform.match(/^matrix3d\((.+)\)$/);
  if (matrix3d) {
    return getPosFromMatrix(matrix3d[1], pos3);
  } else {
    const matrix = transform.match(/^matrix\((.+)\)$/);
    if (matrix) {
      return getPosFromMatrix(matrix[1], pos2);
    } else {
      return 0;
    }
  }
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformPropOrder.filter((key) => !transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
  const removedTransforms = [];
  nonTranslationalTransformKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement.render();
  return removedTransforms;
}
var positionalValues = {
  width: ({ x }, { paddingLeft = "0", paddingRight = "0" }) => x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
  height: ({ y }, { paddingTop = "0", paddingBottom = "0" }) => y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
  top: (_bbox, { top }) => parseFloat(top),
  left: (_bbox, { left }) => parseFloat(left),
  bottom: ({ y }, { top }) => parseFloat(top) + (y.max - y.min),
  right: ({ x }, { left }) => parseFloat(left) + (x.max - x.min),
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = (target, visualElement, changedKeys) => {
  const originBbox = visualElement.measureViewportBox();
  const element = visualElement.current;
  const elementComputedStyle = getComputedStyle(element);
  const { display } = elementComputedStyle;
  const origin = {};
  if (display === "none") {
    visualElement.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach((key) => {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement.render();
  const targetBbox = visualElement.measureViewportBox();
  changedKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = (visualElement, target, origin = {}, transitionEnd = {}) => {
  target = __spreadValues({}, target);
  transitionEnd = __spreadValues({}, transitionEnd);
  const targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  let removedTransformValues = [];
  let hasAttemptedToRemoveTransformValues = false;
  const changedValueTypeKeys = [];
  targetPositionalKeys.forEach((key) => {
    const value = visualElement.getValue(key);
    if (!visualElement.hasValue(key))
      return;
    let from = origin[key];
    let fromType = findDimensionValueType(from);
    const to = target[key];
    let toType;
    if (isKeyframesTarget(to)) {
      const numKeyframes = to.length;
      const fromIndex = to[0] === null ? 1 : 0;
      from = to[fromIndex];
      fromType = findDimensionValueType(from);
      for (let i2 = fromIndex; i2 < numKeyframes; i2++) {
        if (!toType) {
          toType = findDimensionValueType(to[i2]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i2]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        const current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from === 0 || to === 0)) {
        if (from === 0) {
          value.set(toType.transform(from));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    const scrollY = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    const convertedTarget = convertChangedValueTypes(target, visualElement, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(([key, value]) => {
        visualElement.getValue(key).set(value);
      });
    }
    visualElement.render();
    if (isBrowser && scrollY !== null) {
      window.scrollTo({ top: scrollY });
    }
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement, target, origin, transitionEnd) : { target, transitionEnd };
}

// ../../node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = (visualElement, target, origin, transitionEnd) => {
  const resolved = resolveCSSVariables(visualElement, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement, target, origin, transitionEnd);
};

// ../../node_modules/framer-motion/dist/es/render/VisualElement.mjs
import { createElement as createElement3 } from "react";

// ../../node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs
var prefersReducedMotion = { current: null };
var hasReducedMotionListener = { current: false };

// ../../node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs
function initPrefersReducedMotion() {
  hasReducedMotionListener.current = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
    const setReducedMotionPreferences = () => prefersReducedMotion.current = motionMediaQuery.matches;
    motionMediaQuery.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}

// ../../node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  const { willChange } = next;
  for (const key in next) {
    const nextValue = next[key];
    const prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (isWillChangeMotionValue(willChange)) {
        willChange.add(key);
      }
      if (process.env.NODE_ENV === "development") {
        warnOnce(nextValue.version === "7.6.7", `Attempting to mix Framer Motion versions ${nextValue.version} with 7.6.7 may not work as expected.`);
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
      if (isWillChangeMotionValue(willChange)) {
        willChange.remove(key);
      }
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        const existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        const latestValue = element.getStaticValue(key);
        element.addValue(key, motionValue(latestValue !== void 0 ? latestValue : nextValue));
      }
    }
  }
  for (const key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// ../../node_modules/framer-motion/dist/es/render/VisualElement.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
var propEventHandlers = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "Unmount",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
var VisualElement = class {
  constructor({ parent, props, reducedMotionConfig, visualState }, options = {}) {
    this.current = null;
    this.children = /* @__PURE__ */ new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.values = /* @__PURE__ */ new Map();
    this.isPresent = true;
    this.valueSubscriptions = /* @__PURE__ */ new Map();
    this.prevMotionValues = {};
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify("Update", this.latestValues);
    this.render = () => {
      if (!this.current)
        return;
      this.triggerBuild();
      this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
    };
    this.scheduleRender = () => es_default.render(this.render, false, true);
    const { latestValues, renderState } = visualState;
    this.latestValues = latestValues;
    this.baseTarget = __spreadValues({}, latestValues);
    this.initialValues = props.initial ? __spreadValues({}, latestValues) : {};
    this.renderState = renderState;
    this.parent = parent;
    this.props = props;
    this.depth = parent ? parent.depth + 1 : 0;
    this.reducedMotionConfig = reducedMotionConfig;
    this.options = options;
    this.isControllingVariants = isControllingVariants(props);
    this.isVariantNode = isVariantNode(props);
    if (this.isVariantNode) {
      this.variantChildren = /* @__PURE__ */ new Set();
    }
    this.manuallyAnimateOnMount = Boolean(parent && parent.current);
    const _a = this.scrapeMotionValuesFromProps(props), { willChange } = _a, initialMotionValues = __objRest(_a, ["willChange"]);
    for (const key in initialMotionValues) {
      const value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
        if (isWillChangeMotionValue(willChange)) {
          willChange.add(key);
        }
      }
    }
  }
  scrapeMotionValuesFromProps(_props) {
    return {};
  }
  mount(instance) {
    var _a;
    this.current = instance;
    if (this.projection) {
      this.projection.mount(instance);
    }
    if (this.parent && this.isVariantNode && !this.isControllingVariants) {
      this.removeFromVariantTree = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.addVariantChild(this);
    }
    this.values.forEach((value, key) => this.bindToMotionValue(key, value));
    if (!hasReducedMotionListener.current) {
      initPrefersReducedMotion();
    }
    this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : prefersReducedMotion.current;
    if (this.parent)
      this.parent.children.add(this);
    this.setProps(this.props);
  }
  unmount() {
    var _a, _b, _c;
    (_a = this.projection) === null || _a === void 0 ? void 0 : _a.unmount();
    cancelSync.update(this.notifyUpdate);
    cancelSync.render(this.render);
    this.valueSubscriptions.forEach((remove) => remove());
    (_b = this.removeFromVariantTree) === null || _b === void 0 ? void 0 : _b.call(this);
    (_c = this.parent) === null || _c === void 0 ? void 0 : _c.children.delete(this);
    for (const key in this.events) {
      this.events[key].clear();
    }
    this.current = null;
  }
  bindToMotionValue(key, value) {
    const removeOnChange = value.onChange((latestValue) => {
      this.latestValues[key] = latestValue;
      this.props.onUpdate && es_default.update(this.notifyUpdate, false, true);
    });
    const removeOnRenderRequest = value.onRenderRequest(this.scheduleRender);
    this.valueSubscriptions.set(key, () => {
      removeOnChange();
      removeOnRenderRequest();
    });
  }
  sortNodePosition(other) {
    if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type)
      return 0;
    return this.sortInstanceNodePosition(this.current, other.current);
  }
  loadFeatures(renderedProps, isStrict, preloadedFeatures, projectionId, ProjectionNodeConstructor, initialLayoutGroupConfig) {
    const features = [];
    if (env !== "production" && preloadedFeatures && isStrict) {
      invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
    }
    for (let i2 = 0; i2 < numFeatures; i2++) {
      const name = featureNames[i2];
      const { isEnabled, Component } = featureDefinitions[name];
      if (isEnabled(renderedProps) && Component) {
        features.push(createElement3(Component, __spreadProps(__spreadValues({
          key: name
        }, renderedProps), {
          visualElement: this
        })));
      }
    }
    if (!this.projection && ProjectionNodeConstructor) {
      this.projection = new ProjectionNodeConstructor(projectionId, this.latestValues, this.parent && this.parent.projection);
      const { layoutId, layout, drag: drag2, dragConstraints, layoutScroll } = renderedProps;
      this.projection.setOptions({
        layoutId,
        layout,
        alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof layout === "string" ? layout : "both",
        initialPromotionConfig: initialLayoutGroupConfig,
        layoutScroll
      });
    }
    return features;
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : createBox();
  }
  getStaticValue(key) {
    return this.latestValues[key];
  }
  setStaticValue(key, value) {
    this.latestValues[key] = value;
  }
  makeTargetAnimatable(target, canMutate = true) {
    return this.makeTargetAnimatableFromInstance(target, this.props, canMutate);
  }
  setProps(props) {
    if (props.transformTemplate || this.props.transformTemplate) {
      this.scheduleRender();
    }
    this.props = props;
    for (let i2 = 0; i2 < propEventHandlers.length; i2++) {
      const key = propEventHandlers[i2];
      if (this.propEventSubscriptions[key]) {
        this.propEventSubscriptions[key]();
        delete this.propEventSubscriptions[key];
      }
      const listener = props["on" + key];
      if (listener) {
        this.propEventSubscriptions[key] = this.on(key, listener);
      }
    }
    this.prevMotionValues = updateMotionValuesFromProps(this, this.scrapeMotionValuesFromProps(props), this.prevMotionValues);
  }
  getProps() {
    return this.props;
  }
  getVariant(name) {
    var _a;
    return (_a = this.props.variants) === null || _a === void 0 ? void 0 : _a[name];
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    var _a;
    return this.isVariantNode ? this : (_a = this.parent) === null || _a === void 0 ? void 0 : _a.getClosestVariantNode();
  }
  getVariantContext(startAtParent = false) {
    var _a, _b;
    if (startAtParent)
      return (_a = this.parent) === null || _a === void 0 ? void 0 : _a.getVariantContext();
    if (!this.isControllingVariants) {
      const context2 = ((_b = this.parent) === null || _b === void 0 ? void 0 : _b.getVariantContext()) || {};
      if (this.props.initial !== void 0) {
        context2.initial = this.props.initial;
      }
      return context2;
    }
    const context = {};
    for (let i2 = 0; i2 < numVariantProps; i2++) {
      const name = variantProps2[i2];
      const prop = this.props[name];
      if (isVariantLabel(prop) || prop === false) {
        context[name] = prop;
      }
    }
    return context;
  }
  addVariantChild(child) {
    var _a;
    const closestVariantNode = this.getClosestVariantNode();
    if (closestVariantNode) {
      (_a = closestVariantNode.variantChildren) === null || _a === void 0 ? void 0 : _a.add(child);
      return () => closestVariantNode.variantChildren.delete(child);
    }
  }
  addValue(key, value) {
    if (this.hasValue(key))
      this.removeValue(key);
    this.values.set(key, value);
    this.latestValues[key] = value.get();
    this.bindToMotionValue(key, value);
  }
  removeValue(key) {
    var _a;
    this.values.delete(key);
    (_a = this.valueSubscriptions.get(key)) === null || _a === void 0 ? void 0 : _a();
    this.valueSubscriptions.delete(key);
    delete this.latestValues[key];
    this.removeValueFromRenderState(key, this.renderState);
  }
  hasValue(key) {
    return this.values.has(key);
  }
  getValue(key, defaultValue) {
    if (this.props.values && this.props.values[key]) {
      return this.props.values[key];
    }
    let value = this.values.get(key);
    if (value === void 0 && defaultValue !== void 0) {
      value = motionValue(defaultValue);
      this.addValue(key, value);
    }
    return value;
  }
  readValue(key) {
    return this.latestValues[key] !== void 0 || !this.current ? this.latestValues[key] : this.readValueFromInstance(this.current, key, this.options);
  }
  setBaseTarget(key, value) {
    this.baseTarget[key] = value;
  }
  getBaseTarget(key) {
    var _a;
    const { initial } = this.props;
    const valueFromInitial = typeof initial === "string" || typeof initial === "object" ? (_a = resolveVariantFromProps(this.props, initial)) === null || _a === void 0 ? void 0 : _a[key] : void 0;
    if (initial && valueFromInitial !== void 0) {
      return valueFromInitial;
    }
    const target = this.getBaseTargetFromProps(this.props, key);
    if (target !== void 0 && !isMotionValue(target))
      return target;
    return this.initialValues[key] !== void 0 && valueFromInitial === void 0 ? void 0 : this.baseTarget[key];
  }
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = new SubscriptionManager();
    }
    return this.events[eventName].add(callback);
  }
  notify(eventName, ...args) {
    var _a;
    (_a = this.events[eventName]) === null || _a === void 0 ? void 0 : _a.notify(...args);
  }
};
var variantProps2 = ["initial", ...variantPriorityOrder];
var numVariantProps = variantProps2.length;

// ../../node_modules/framer-motion/dist/es/render/dom/DOMVisualElement.mjs
var DOMVisualElement = class extends VisualElement {
  sortInstanceNodePosition(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  }
  removeValueFromRenderState(key, { vars, style }) {
    delete vars[key];
    delete style[key];
  }
  makeTargetAnimatableFromInstance(_a, { transformValues }, isMounted) {
    var _b = _a, { transition, transitionEnd } = _b, target = __objRest(_b, ["transition", "transitionEnd"]);
    let origin = getOrigin(target, transition || {}, this);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(this, target, origin);
      const parsed = parseDomVariant(this, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __spreadValues({
      transition,
      transitionEnd
    }, target);
  }
};

// ../../node_modules/framer-motion/dist/es/render/html/HTMLVisualElement.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var HTMLVisualElement = class extends DOMVisualElement {
  readValueFromInstance(instance, key) {
    if (transformProps.has(key)) {
      const defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      const computedStyle = getComputedStyle2(instance);
      const value = (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
      return typeof value === "string" ? value.trim() : value;
    }
  }
  measureInstanceViewportBox(instance, { transformPagePoint }) {
    return measureViewportBox(instance, transformPagePoint);
  }
  build(renderState, latestValues, options, props) {
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  }
  scrapeMotionValuesFromProps(props) {
    return scrapeMotionValuesFromProps(props);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderHTML(instance, renderState, styleProp, projection);
  }
};

// ../../node_modules/framer-motion/dist/es/render/svg/SVGVisualElement.mjs
var SVGVisualElement = class extends DOMVisualElement {
  getBaseTargetFromProps(props, key) {
    return props[key];
  }
  readValueFromInstance(instance, key) {
    var _a;
    if (transformProps.has(key)) {
      return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
    }
    key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
    return instance.getAttribute(key);
  }
  measureInstanceViewportBox() {
    return createBox();
  }
  scrapeMotionValuesFromProps(props) {
    return scrapeMotionValuesFromProps2(props);
  }
  build(renderState, latestValues, options, props) {
    buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
  }
  renderInstance(instance, renderState, styleProp, projection) {
    renderSVG(instance, renderState, styleProp, projection);
  }
};

// ../../node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = (Component, options) => {
  return isSVGComponent(Component) ? new SVGVisualElement(options, { enableHardwareAcceleration: false }) : new HTMLVisualElement(options, { enableHardwareAcceleration: true });
};

// ../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
import React__default2, { useContext as useContext9 } from "react";

// ../../node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: (latest, node) => {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    const x = pixelsToPercent(latest, node.target.x);
    const y = pixelsToPercent(latest, node.target.y);
    return `${x}% ${y}%`;
  }
};

// ../../node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var varToken = "_$css";
var correctBoxShadow = {
  correct: (latest, { treeScale, projectionDelta }) => {
    const original = latest;
    const containsCSSVariables = latest.includes("var(");
    const cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, (match) => {
        cssVariables.push(match);
        return varToken;
      });
    }
    const shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    const template = complex.createTransformer(latest);
    const offset = typeof shadow[0] !== "number" ? 1 : 0;
    const xScale = projectionDelta.x.scale * treeScale.x;
    const yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    const averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    let output = template(shadow);
    if (containsCSSVariables) {
      let i2 = 0;
      output = output.replace(varToken, () => {
        const cssVariable = cssVariables[i2];
        i2++;
        return cssVariable;
      });
    }
    return output;
  }
};

// ../../node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = class extends React__default2.Component {
  componentDidMount() {
    const { visualElement, layoutGroup, switchLayoutGroup, layoutId } = this.props;
    const { projection } = visualElement;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup.group)
        layoutGroup.group.add(projection);
      if (switchLayoutGroup && switchLayoutGroup.register && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", () => {
        this.safeToRemove();
      });
      projection.setOptions(__spreadProps(__spreadValues({}, projection.options), {
        onExitComplete: () => this.safeToRemove()
      }));
    }
    globalProjectionState.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(prevProps) {
    const { layoutDependency, visualElement, drag: drag2, isPresent } = this.props;
    const projection = visualElement.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        es_default.postRender(() => {
          var _a;
          if (!((_a = projection.getStack()) === null || _a === void 0 ? void 0 : _a.members.length)) {
            this.safeToRemove();
          }
        });
      }
    }
    return null;
  }
  componentDidUpdate() {
    const { projection } = this.props.visualElement;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  }
  componentWillUnmount() {
    const { visualElement, layoutGroup, switchLayoutGroup: promoteContext } = this.props;
    const { projection } = visualElement;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  }
  safeToRemove() {
    const { safeToRemove } = this.props;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  }
  render() {
    return null;
  }
};
function MeasureLayout(props) {
  const [isPresent, safeToRemove] = usePresence();
  const layoutGroup = useContext9(LayoutGroupContext);
  return React__default2.createElement(MeasureLayoutWithContext, __spreadProps(__spreadValues({}, props), { layoutGroup, switchLayoutGroup: useContext9(SwitchLayoutGroupContext), isPresent, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __spreadProps(__spreadValues({}, correctBorderRadius), {
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// ../../node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// ../../node_modules/framer-motion/dist/es/animation/animate.mjs
function animate2(from, to, transition = {}) {
  const value = isMotionValue(from) ? from : motionValue(from);
  startAnimation("", value, to, transition);
  return {
    stop: () => value.stop(),
    isAnimating: () => value.isAnimating()
  };
}

// ../../node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = (value) => typeof value === "string" ? parseFloat(value) : value;
var isPx = (value) => typeof value === "number" || px.test(value);
function mixValues(target, follow, lead, progress3, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(
      0,
      (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1,
      easeCrossfadeIn(progress3)
    );
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress3));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress3);
  }
  for (let i2 = 0; i2 < numBorders; i2++) {
    const borderLabel = `border${borders[i2]}Radius`;
    let followRadius = getRadius(follow, borderLabel);
    let leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    const canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress3), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress3);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return (p2) => {
    if (p2 < min)
      return 0;
    if (p2 > max)
      return 1;
    return easing(progress(min, max, p2));
  };
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point2, translate, scale2, originPoint, boxScale) {
  point2 -= translate;
  point2 = scalePoint(point2, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point2 = scalePoint(point2, 1 / boxScale, originPoint);
  }
  return point2;
}
function removeAxisDelta(axis, translate = 0, scale2 = 1, origin = 0.5, boxScale, originAxis = axis, sourceAxis = axis) {
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    const relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  let originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, [key, scaleKey, originKey], origin, sourceAxis) {
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// ../../node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}
function aspectRatio(box) {
  return calcLength(box.x) / calcLength(box.y);
}
function isCloseTo(a2, b2, max = 0.1) {
  return distance(a2, b2) <= max;
}

// ../../node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = class {
  constructor() {
    this.members = [];
  }
  add(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  }
  remove(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      const prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  }
  relegate(node) {
    const indexOfNode = this.members.findIndex((member) => node === member);
    if (indexOfNode === 0)
      return false;
    let prevLead;
    for (let i2 = indexOfNode; i2 >= 0; i2--) {
      const member = this.members[i2];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  }
  promote(node, preserveFollowOpacity) {
    var _a;
    const prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      const { crossfade } = node.options;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach((node) => {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  }
  scheduleRender() {
    this.members.forEach((node) => {
      node.instance && node.scheduleRender(false);
    });
  }
  removeLeadSnapshot() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  }
};

// ../../node_modules/framer-motion/dist/es/projection/styles/transform.mjs
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  const xTranslate = delta.x.translate / treeScale.x;
  const yTranslate = delta.y.translate / treeScale.y;
  let transform = `translate3d(${xTranslate}px, ${yTranslate}px, 0) `;
  transform += `scale(${1 / treeScale.x}, ${1 / treeScale.y}) `;
  if (latestTransform) {
    const { rotate, rotateX, rotateY } = latestTransform;
    if (rotate)
      transform += `rotate(${rotate}deg) `;
    if (rotateX)
      transform += `rotateX(${rotateX}deg) `;
    if (rotateY)
      transform += `rotateY(${rotateY}deg) `;
  }
  const elementScaleX = delta.x.scale * treeScale.x;
  const elementScaleY = delta.y.scale * treeScale.y;
  transform += `scale(${elementScaleX}, ${elementScaleY})`;
  return transform === identityProjection ? "none" : transform;
}

// ../../node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = (a2, b2) => a2.depth - b2.depth;

// ../../node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  }
  remove(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  }
  forEach(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  }
};

// ../../node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var transformAxes = ["", "X", "Y", "Z"];
var animationTarget = 1e3;
function createProjectionNode({ attachResizeListener, defaultParent, measureScroll, checkIsScrollRoot, resetTransform }) {
  return class ProjectionNode {
    constructor(elementId, latestValues = {}, parent = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent()) {
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.nodes.forEach(resolveTargetDelta);
        this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.elementId = elementId;
      this.latestValues = latestValues;
      this.root = parent ? parent.root || parent : this;
      this.path = parent ? [...parent.path, parent] : [];
      this.parent = parent;
      this.depth = parent ? parent.depth + 1 : 0;
      elementId && this.root.registerPotentialNode(elementId, this);
      for (let i2 = 0; i2 < this.path.length; i2++) {
        this.path[i2].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    addEventListener(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    }
    notifyListeners(name, ...args) {
      const subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify(...args);
    }
    hasListeners(name) {
      return this.eventHandlers.has(name);
    }
    registerPotentialNode(id2, node) {
      this.potentialNodes.set(id2, node);
    }
    mount(instance, isLayoutDirty = false) {
      var _a;
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      const { layoutId, layout, visualElement } = this.options;
      if (visualElement && !visualElement.current) {
        visualElement.mount(instance);
      }
      this.root.nodes.add(this);
      (_a = this.parent) === null || _a === void 0 ? void 0 : _a.children.add(this);
      this.elementId && this.root.potentialNodes.delete(this.elementId);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        let cancelDelay;
        const resizeUnblockUpdate = () => this.root.updateBlockedByResize = false;
        attachResizeListener(instance, () => {
          this.root.updateBlockedByResize = true;
          cancelDelay && cancelDelay();
          cancelDelay = delay(resizeUnblockUpdate, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement && (layoutId || layout)) {
        this.addEventListener("didUpdate", ({ delta, hasLayoutChanged, hasRelativeTargetChanged, layout: newLayout }) => {
          var _a2, _b, _c, _d, _e;
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0;
            this.relativeTarget = void 0;
            return;
          }
          const layoutTransition = (_b = (_a2 = this.options.transition) !== null && _a2 !== void 0 ? _a2 : visualElement.getDefaultTransition()) !== null && _b !== void 0 ? _b : defaultLayoutTransition;
          const { onLayoutAnimationStart, onLayoutAnimationComplete } = visualElement.getProps();
          const targetChanged = !this.targetLayout || !boxEquals(this.targetLayout, newLayout) || hasRelativeTargetChanged;
          const hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_c = this.resumeFrom) === null || _c === void 0 ? void 0 : _c.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = void 0;
            }
            this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            const animationOptions = __spreadProps(__spreadValues({}, getValueTransition(layoutTransition, "layout")), {
              onPlay: onLayoutAnimationStart,
              onComplete: onLayoutAnimationComplete
            });
            if (visualElement.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && this.animationProgress === 0) {
              finishAnimation(this);
            }
            this.isLead() && ((_e = (_d = this.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d));
          }
          this.targetLayout = newLayout;
        });
      }
    }
    unmount() {
      var _a, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      var _a;
      return this.isAnimationBlocked || ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimationBlocked()) || false;
    }
    startUpdate() {
      var _a;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a = this.nodes) === null || _a === void 0 ? void 0 : _a.forEach(resetRotation);
    }
    willUpdate(shouldNotifyListeners = true) {
      var _a, _b, _c;
      if (this.root.isUpdateBlocked()) {
        (_b = (_a = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (let i2 = 0; i2 < this.path.length; i2++) {
        const node = this.path[i2];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      const { layoutId, layout } = this.options;
      if (layoutId === void 0 && !layout)
        return;
      const transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    }
    didUpdate() {
      const updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    }
    clearAllSnapshots() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    }
    scheduleUpdateProjection() {
      es_default.preRender(this.updateProjection, false, true);
    }
    scheduleCheckAfterUnmount() {
      es_default.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (this.snapshot || !this.instance)
        return;
      this.snapshot = this.measure();
    }
    updateLayout() {
      var _a;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let i2 = 0; i2 < this.path.length; i2++) {
          const node = this.path[i2];
          node.updateScroll();
        }
      }
      const prevLayout = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.layoutBox);
      (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.notify("LayoutMeasure", this.layout.layoutBox, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.layoutBox);
    }
    updateScroll() {
      if (this.options.layoutScroll && this.instance) {
        this.isScrollRoot = checkIsScrollRoot(this.instance);
        this.scroll = measureScroll(this.instance);
      }
    }
    resetTransform() {
      var _a;
      if (!resetTransform)
        return;
      const isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      const hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      const transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
      const transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      const transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(removeTransform = true) {
      const pageBox = this.measurePageBox();
      let layoutBox = this.removeElementScroll(pageBox);
      if (removeTransform) {
        layoutBox = this.removeTransform(layoutBox);
      }
      roundBox(layoutBox);
      return {
        measuredBox: pageBox,
        layoutBox,
        latestValues: {}
      };
    }
    measurePageBox() {
      const { visualElement } = this.options;
      if (!visualElement)
        return createBox();
      const box = visualElement.measureViewportBox();
      const { scroll: scroll2 } = this.root;
      if (scroll2) {
        translateAxis(box.x, scroll2.x);
        translateAxis(box.y, scroll2.y);
      }
      return box;
    }
    removeElementScroll(box) {
      const boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (let i2 = 0; i2 < this.path.length; i2++) {
        const node = this.path[i2];
        const { scroll: scroll2, options, isScrollRoot } = node;
        if (node !== this.root && scroll2 && options.layoutScroll) {
          if (isScrollRoot) {
            copyBoxInto(boxWithoutScroll, box);
            const { scroll: rootScroll } = this.root;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll2.x);
          translateAxis(boxWithoutScroll.y, scroll2.y);
        }
      }
      return boxWithoutScroll;
    }
    applyTransform(box, transformOnly = false) {
      const withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (let i2 = 0; i2 < this.path.length; i2++) {
        const node = this.path[i2];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    }
    removeTransform(box) {
      var _a;
      const boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (let i2 = 0; i2 < this.path.length; i2++) {
        const node = this.path[i2];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        const sourceBox = createBox();
        const nodeBox = node.measurePageBox();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a = node.snapshot) === null || _a === void 0 ? void 0 : _a.layoutBox, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    }
    setTargetDelta(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    }
    setOptions(options) {
      this.options = __spreadProps(__spreadValues(__spreadValues({}, this.options), options), {
        crossfade: options.crossfade !== void 0 ? options.crossfade : true
      });
    }
    clearMeasurements() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    }
    resolveTargetDelta() {
      var _a;
      const { layout, layoutId } = this.options;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && relativeParent.layout) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.layoutBox, relativeParent.layout.layoutBox);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a = this.relativeParent) === null || _a === void 0 ? void 0 : _a.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.layoutBox);
        } else {
          copyBoxInto(this.target, this.layout.layoutBox);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.layoutBox);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        const relativeParent = this.getClosestProjectingParent();
        if (relativeParent && Boolean(relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !relativeParent.options.layoutScroll && relativeParent.target) {
          this.relativeParent = relativeParent;
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        } else {
          this.relativeParent = this.relativeTarget = void 0;
        }
      }
    }
    getClosestProjectingParent() {
      if (!this.parent || hasScale(this.parent.latestValues) || has2DTranslate(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    }
    calcProjection() {
      var _a;
      const { layout, layoutId } = this.options;
      this.isTreeAnimating = Boolean(((_a = this.parent) === null || _a === void 0 ? void 0 : _a.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      const lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.layoutBox);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      const { target } = lead;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      const prevTreeScaleX = this.treeScale.x;
      const prevTreeScaleY = this.treeScale.y;
      const prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(notifyAll2 = true) {
      var _a, _b, _c;
      (_b = (_a = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a);
      notifyAll2 && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    }
    setAnimationOrigin(delta, hasOnlyRelativeTargetChanged = false) {
      var _a;
      const snapshot = this.snapshot;
      const snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      const mixedValues = __spreadValues({}, this.latestValues);
      const targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      const relativeLayout = createBox();
      const isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      const isOnlyMember = (((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.members.length) || 0) <= 1;
      const shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = (latest) => {
        var _a2;
        const progress3 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress3);
        mixAxisDelta(targetDelta.y, delta.y, progress3);
        this.setTargetDelta(targetDelta);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.layout)) {
          calcRelativePosition(relativeLayout, this.layout.layoutBox, this.relativeParent.layout.layoutBox);
          mixBox(this.relativeTarget, this.relativeTargetOrigin, relativeLayout, progress3);
        }
        if (isSharedLayoutAnimation) {
          this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, this.latestValues, progress3, shouldCrossfadeOpacity, isOnlyMember);
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = progress3;
      };
      this.mixTargetDelta(0);
    }
    startAnimation(options) {
      var _a, _b;
      this.notifyListeners("animationStart");
      (_a = this.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = es_default.update(() => {
        globalProjectionState.hasAnimatedSinceResize = true;
        this.currentAnimation = animate2(0, animationTarget, __spreadProps(__spreadValues({}, options), {
          onUpdate: (latest) => {
            var _a2;
            this.mixTargetDelta(latest);
            (_a2 = options.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(options, latest);
          },
          onComplete: () => {
            var _a2;
            (_a2 = options.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(options);
            this.completeAnimation();
          }
        }));
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      var _a;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      var _a;
      if (this.currentAnimation) {
        (_a = this.mixTargetDelta) === null || _a === void 0 ? void 0 : _a.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      const lead = this.getLead();
      let { targetWithTransforms, target, layout, latestValues } = lead;
      if (!targetWithTransforms || !target || !layout)
        return;
      if (this !== lead && this.layout && layout && shouldAnimatePositionOnly(this.options.animationType, this.layout.layoutBox, layout.layoutBox)) {
        target = this.target || createBox();
        const xLength = calcLength(this.layout.layoutBox.x);
        target.x.min = lead.target.x.min;
        target.x.max = target.x.min + xLength;
        const yLength = calcLength(this.layout.layoutBox.y);
        target.y.min = lead.target.y.min;
        target.y.max = target.y.min + yLength;
      }
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    }
    registerSharedNode(layoutId, node) {
      var _a, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      const stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a = node.options.initialPromotionConfig) === null || _a === void 0 ? void 0 : _a.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    }
    isLead() {
      const stack = this.getStack();
      return stack ? stack.lead === this : true;
    }
    getLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? ((_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.lead) || this : this;
    }
    getPrevLead() {
      var _a;
      const { layoutId } = this.options;
      return layoutId ? (_a = this.getStack()) === null || _a === void 0 ? void 0 : _a.prevLead : void 0;
    }
    getStack() {
      const { layoutId } = this.options;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    }
    promote({ needsReset, transition, preserveFollowOpacity } = {}) {
      const stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    }
    relegate() {
      const stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    }
    resetRotation() {
      const { visualElement } = this.options;
      if (!visualElement)
        return;
      let hasRotate = false;
      const resetValues = {};
      for (let i2 = 0; i2 < transformAxes.length; i2++) {
        const axis = transformAxes[i2];
        const key = "rotate" + axis;
        if (!visualElement.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement.getStaticValue(key);
        visualElement.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement === null || visualElement === void 0 ? void 0 : visualElement.render();
      for (const key in resetValues) {
        visualElement.setStaticValue(key, resetValues[key]);
      }
      visualElement.scheduleRender();
    }
    getProjectionStyles(styleProp = {}) {
      var _a, _b, _c;
      const styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      const transformTemplate = (_a = this.options.visualElement) === null || _a === void 0 ? void 0 : _a.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      const lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        const emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      const valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      const { x, y } = this.projectionDelta;
      styles.transformOrigin = `${x.origin * 100}% ${y.origin * 100}% 0`;
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_c = (_b = valuesToRender.opacity) !== null && _b !== void 0 ? _b : this.latestValues.opacity) !== null && _c !== void 0 ? _c : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? valuesToRender.opacity !== void 0 ? valuesToRender.opacity : "" : valuesToRender.opacityExit !== void 0 ? valuesToRender.opacityExit : 0;
      }
      for (const key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        const { correct, applyTo } = scaleCorrectors[key];
        const corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          const num = applyTo.length;
          for (let i2 = 0; i2 < num; i2++) {
            styles[applyTo[i2]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((node) => {
        var _a;
        return (_a = node.currentAnimation) === null || _a === void 0 ? void 0 : _a.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    }
  };
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c;
  const snapshot = ((_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) || node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    const { layoutBox: layout, measuredBox: measuredLayout } = node.layout;
    const { animationType } = node.options;
    if (animationType === "size") {
      eachAxis((axis) => {
        const axisSnapshot = snapshot.isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(axisSnapshot);
        axisSnapshot.min = layout[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (shouldAnimatePositionOnly(animationType, snapshot.layoutBox, layout)) {
      eachAxis((axis) => {
        const axisSnapshot = snapshot.isShared ? snapshot.measuredBox[axis] : snapshot.layoutBox[axis];
        const length = calcLength(layout[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    const layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout, snapshot.layoutBox);
    const visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measuredBox);
    } else {
      calcBoxDelta(visualDelta, layout, snapshot.layoutBox);
    }
    const hasLayoutChanged = !isDeltaZero(layoutDelta);
    let hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      const relativeParent = node.getClosestProjectingParent();
      if (relativeParent && !relativeParent.resumeFrom) {
        const { snapshot: parentSnapshot, layout: parentLayout } = relativeParent;
        if (parentSnapshot && parentLayout) {
          const relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layoutBox, parentSnapshot.layoutBox);
          const relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout, parentLayout.layoutBox);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_c = (_b = node.options).onExitComplete) === null || _c === void 0 ? void 0 : _c.call(_b);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  const { visualElement } = node.options;
  if (visualElement === null || visualElement === void 0 ? void 0 : visualElement.getProps().onBeforeLayoutMeasure) {
    visualElement.notify("BeforeLayoutMeasure");
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p2) {
  output.translate = mix(delta.translate, 0, p2);
  output.scale = mix(delta.scale, 1, p2);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from, to, p2) {
  output.min = mix(from.min, to.min, p2);
  output.max = mix(from.max, to.max, p2);
}
function mixBox(output, from, to, p2) {
  mixAxis(output.x, from.x, to.x, p2);
  mixAxis(output.y, from.y, to.y, p2);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  let searchNode = node.root;
  for (let i2 = node.path.length - 1; i2 >= 0; i2--) {
    if (Boolean(node.path[i2].instance)) {
      searchNode = node.path[i2];
      break;
    }
  }
  const searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  const element = searchElement.querySelector(`[data-projection-id="${id2}"]`);
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}
function shouldAnimatePositionOnly(animationType, snapshot, layout) {
  return animationType === "position" || animationType === "preserve-aspect" && !isCloseTo(aspectRatio(snapshot), aspectRatio(layout), 0.2);
}

// ../../node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: (ref, notify) => addDomEvent(ref, "resize", notify),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => true
});

// ../../node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: (instance) => ({
    x: instance.scrollLeft,
    y: instance.scrollTop
  }),
  defaultParent: () => {
    if (!rootProjectionNode.current) {
      const documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: (instance, value) => {
    instance.style.transform = value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: (instance) => Boolean(window.getComputedStyle(instance).position === "fixed")
});

// ../../node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = __spreadValues(__spreadValues(__spreadValues(__spreadValues({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy((Component, config) => createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode));

// ../../node_modules/@motionone/utils/dist/clamp.es.js
var clamp3 = (min, max, v) => Math.min(Math.max(v, min), max);

// ../../node_modules/@motionone/utils/dist/is-number.es.js
var isNumber = (value) => typeof value === "number";

// ../../node_modules/@motionone/utils/dist/is-easing-list.es.js
var isEasingList = (easing) => Array.isArray(easing) && !isNumber(easing[0]);

// ../../node_modules/@motionone/utils/dist/wrap.es.js
var wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

// ../../node_modules/@motionone/utils/dist/easing.es.js
function getEasingForSegment(easing, i2) {
  return isEasingList(easing) ? easing[wrap(0, easing.length, i2)] : easing;
}

// ../../node_modules/@motionone/utils/dist/mix.es.js
var mix2 = (min, max, progress3) => -progress3 * min + progress3 * max + min;

// ../../node_modules/@motionone/utils/dist/noop.es.js
var noopReturn = (v) => v;

// ../../node_modules/@motionone/utils/dist/progress.es.js
var progress2 = (min, max, value) => max - min === 0 ? 1 : (value - min) / (max - min);

// ../../node_modules/@motionone/utils/dist/offset.es.js
function fillOffset(offset, remaining) {
  const min = offset[offset.length - 1];
  for (let i2 = 1; i2 <= remaining; i2++) {
    const offsetProgress = progress2(0, remaining, i2);
    offset.push(mix2(min, 1, offsetProgress));
  }
}
function defaultOffset2(length) {
  const offset = [0];
  fillOffset(offset, length - 1);
  return offset;
}

// ../../node_modules/@motionone/utils/dist/interpolate.es.js
function interpolate2(output, input = defaultOffset2(output.length), easing = noopReturn) {
  const length = output.length;
  const remainder = length - input.length;
  remainder > 0 && fillOffset(input, remainder);
  return (t) => {
    let i2 = 0;
    for (; i2 < length - 2; i2++) {
      if (t < input[i2 + 1])
        break;
    }
    let progressInRange = clamp3(0, 1, progress2(input[i2], input[i2 + 1], t));
    const segmentEasing = getEasingForSegment(easing, i2);
    progressInRange = segmentEasing(progressInRange);
    return mix2(output[i2], output[i2 + 1], progressInRange);
  };
}

// ../../node_modules/@motionone/utils/dist/is-function.es.js
var isFunction = (value) => typeof value === "function";

// ../../node_modules/@motionone/utils/dist/is-string.es.js
var isString2 = (value) => typeof value === "string";

// ../../node_modules/@motionone/utils/dist/velocity.es.js
function velocityPerSecond2(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// ../../node_modules/@motionone/dom/dist/utils/resolve-elements.es.js
function resolveElements(elements, selectorCache) {
  var _a;
  if (typeof elements === "string") {
    if (selectorCache) {
      (_a = selectorCache[elements]) !== null && _a !== void 0 ? _a : selectorCache[elements] = document.querySelectorAll(elements);
      elements = selectorCache[elements];
    } else {
      elements = document.querySelectorAll(elements);
    }
  } else if (elements instanceof Element) {
    elements = [elements];
  }
  return Array.from(elements || []);
}

// ../../node_modules/tslib/modules/index.js
var import_tslib4 = __toESM(require_tslib2(), 1);
var {
  __extends: __extends2,
  __assign: __assign2,
  __rest: __rest2,
  __decorate: __decorate2,
  __param: __param2,
  __metadata: __metadata2,
  __awaiter: __awaiter2,
  __generator: __generator2,
  __exportStar: __exportStar2,
  __createBinding: __createBinding2,
  __values: __values2,
  __read: __read2,
  __spread: __spread2,
  __spreadArrays: __spreadArrays2,
  __spreadArray: __spreadArray2,
  __await: __await2,
  __asyncGenerator: __asyncGenerator2,
  __asyncDelegator: __asyncDelegator2,
  __asyncValues: __asyncValues2,
  __makeTemplateObject: __makeTemplateObject2,
  __importStar: __importStar2,
  __importDefault: __importDefault2,
  __classPrivateFieldGet: __classPrivateFieldGet2,
  __classPrivateFieldSet: __classPrivateFieldSet2,
  __classPrivateFieldIn: __classPrivateFieldIn2
} = import_tslib4.default;

// ../../node_modules/@motionone/dom/dist/gestures/resize/handle-element.es.js
var resizeHandlers = /* @__PURE__ */ new WeakMap();
var observer;
function getElementSize(target, borderBoxSize) {
  if (borderBoxSize) {
    const { inlineSize, blockSize } = borderBoxSize[0];
    return { width: inlineSize, height: blockSize };
  } else if (target instanceof SVGElement && "getBBox" in target) {
    return target.getBBox();
  } else {
    return {
      width: target.offsetWidth,
      height: target.offsetHeight
    };
  }
}
function notifyTarget({ target, contentRect, borderBoxSize }) {
  var _a;
  (_a = resizeHandlers.get(target)) === null || _a === void 0 ? void 0 : _a.forEach((handler) => {
    handler({
      target,
      contentSize: contentRect,
      get size() {
        return getElementSize(target, borderBoxSize);
      }
    });
  });
}
function notifyAll(entries) {
  entries.forEach(notifyTarget);
}
function createResizeObserver() {
  if (typeof ResizeObserver === "undefined")
    return;
  observer = new ResizeObserver(notifyAll);
}
function resizeElement(target, handler) {
  if (!observer)
    createResizeObserver();
  const elements = resolveElements(target);
  elements.forEach((element) => {
    let elementHandlers = resizeHandlers.get(element);
    if (!elementHandlers) {
      elementHandlers = /* @__PURE__ */ new Set();
      resizeHandlers.set(element, elementHandlers);
    }
    elementHandlers.add(handler);
    observer === null || observer === void 0 ? void 0 : observer.observe(element);
  });
  return () => {
    elements.forEach((element) => {
      const elementHandlers = resizeHandlers.get(element);
      elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.delete(handler);
      if (!(elementHandlers === null || elementHandlers === void 0 ? void 0 : elementHandlers.size)) {
        observer === null || observer === void 0 ? void 0 : observer.unobserve(element);
      }
    });
  };
}

// ../../node_modules/@motionone/dom/dist/gestures/resize/handle-window.es.js
var windowCallbacks = /* @__PURE__ */ new Set();
var windowResizeHandler;
function createWindowResizeHandler() {
  windowResizeHandler = () => {
    const size = {
      width: window.innerWidth,
      height: window.innerHeight
    };
    const info = {
      target: window,
      size,
      contentSize: size
    };
    windowCallbacks.forEach((callback) => callback(info));
  };
  window.addEventListener("resize", windowResizeHandler);
}
function resizeWindow(callback) {
  windowCallbacks.add(callback);
  if (!windowResizeHandler)
    createWindowResizeHandler();
  return () => {
    windowCallbacks.delete(callback);
    if (!windowCallbacks.size && windowResizeHandler) {
      windowResizeHandler = void 0;
    }
  };
}

// ../../node_modules/@motionone/dom/dist/gestures/resize/index.es.js
function resize(a2, b2) {
  return isFunction(a2) ? resizeWindow(a2) : resizeElement(a2, b2);
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/info.es.js
var maxElapsed2 = 50;
var createAxisInfo = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
});
var createScrollInfo = () => ({
  time: 0,
  x: createAxisInfo(),
  y: createAxisInfo()
});
var keys = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function updateAxisInfo(element, axisName, info, time) {
  const axis = info[axisName];
  const { length, position } = keys[axisName];
  const prev = axis.current;
  const prevTime = info.time;
  axis.current = element["scroll" + position];
  axis.scrollLength = element["scroll" + length] - element["client" + length];
  axis.offset.length = 0;
  axis.offset[0] = 0;
  axis.offset[1] = axis.scrollLength;
  axis.progress = progress2(0, axis.scrollLength, axis.current);
  const elapsed = time - prevTime;
  axis.velocity = elapsed > maxElapsed2 ? 0 : velocityPerSecond2(axis.current - prev, elapsed);
}
function updateScrollInfo(element, info, time) {
  updateAxisInfo(element, "x", info, time);
  updateAxisInfo(element, "y", info, time);
  info.time = time;
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/inset.es.js
function calcInset(element, container) {
  let inset = { x: 0, y: 0 };
  let current = element;
  while (current && current !== container) {
    if (current instanceof HTMLElement) {
      inset.x += current.offsetLeft;
      inset.y += current.offsetTop;
      current = current.offsetParent;
    } else if (current instanceof SVGGraphicsElement && "getBBox" in current) {
      const { top, left } = current.getBBox();
      inset.x += left;
      inset.y += top;
      while (current && current.tagName !== "svg") {
        current = current.parentNode;
      }
    }
  }
  return inset;
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/presets.es.js
var ScrollOffset = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
};

// ../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/edge.es.js
var namedEdges = {
  start: 0,
  center: 0.5,
  end: 1
};
function resolveEdge(edge, length, inset = 0) {
  let delta = 0;
  if (namedEdges[edge] !== void 0) {
    edge = namedEdges[edge];
  }
  if (isString2(edge)) {
    const asNumber2 = parseFloat(edge);
    if (edge.endsWith("px")) {
      delta = asNumber2;
    } else if (edge.endsWith("%")) {
      edge = asNumber2 / 100;
    } else if (edge.endsWith("vw")) {
      delta = asNumber2 / 100 * document.documentElement.clientWidth;
    } else if (edge.endsWith("vh")) {
      delta = asNumber2 / 100 * document.documentElement.clientHeight;
    } else {
      edge = asNumber2;
    }
  }
  if (isNumber(edge)) {
    delta = length * edge;
  }
  return inset + delta;
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/offset.es.js
var defaultOffset3 = [0, 0];
function resolveOffset(offset, containerLength, targetLength, targetInset) {
  let offsetDefinition = Array.isArray(offset) ? offset : defaultOffset3;
  let targetPoint = 0;
  let containerPoint = 0;
  if (isNumber(offset)) {
    offsetDefinition = [offset, offset];
  } else if (isString2(offset)) {
    offset = offset.trim();
    if (offset.includes(" ")) {
      offsetDefinition = offset.split(" ");
    } else {
      offsetDefinition = [offset, namedEdges[offset] ? offset : `0`];
    }
  }
  targetPoint = resolveEdge(offsetDefinition[0], targetLength, targetInset);
  containerPoint = resolveEdge(offsetDefinition[1], containerLength);
  return targetPoint - containerPoint;
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/offsets/index.es.js
var point = { x: 0, y: 0 };
function resolveOffsets(container, info, options) {
  let { offset: offsetDefinition = ScrollOffset.All } = options;
  const { target = container, axis = "y" } = options;
  const lengthLabel = axis === "y" ? "height" : "width";
  const inset = target !== container ? calcInset(target, container) : point;
  const targetSize = target === container ? { width: container.scrollWidth, height: container.scrollHeight } : { width: target.clientWidth, height: target.clientHeight };
  const containerSize = {
    width: container.clientWidth,
    height: container.clientHeight
  };
  info[axis].offset.length = 0;
  let hasChanged = !info[axis].interpolate;
  const numOffsets = offsetDefinition.length;
  for (let i2 = 0; i2 < numOffsets; i2++) {
    const offset = resolveOffset(offsetDefinition[i2], containerSize[lengthLabel], targetSize[lengthLabel], inset[axis]);
    if (!hasChanged && offset !== info[axis].interpolatorOffsets[i2]) {
      hasChanged = true;
    }
    info[axis].offset[i2] = offset;
  }
  if (hasChanged) {
    info[axis].interpolate = interpolate2(defaultOffset2(numOffsets), info[axis].offset);
    info[axis].interpolatorOffsets = [...info[axis].offset];
  }
  info[axis].progress = info[axis].interpolate(info[axis].current);
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/on-scroll-handler.es.js
function measure(container, target = container, info) {
  info.x.targetOffset = 0;
  info.y.targetOffset = 0;
  if (target !== container) {
    let node = target;
    while (node && node != container) {
      info.x.targetOffset += node.offsetLeft;
      info.y.targetOffset += node.offsetTop;
      node = node.offsetParent;
    }
  }
  info.x.targetLength = target === container ? target.scrollWidth : target.clientWidth;
  info.y.targetLength = target === container ? target.scrollHeight : target.clientHeight;
  info.x.containerLength = container.clientWidth;
  info.y.containerLength = container.clientHeight;
}
function createOnScrollHandler(element, onScroll, info, options = {}) {
  const axis = options.axis || "y";
  return {
    measure: () => measure(element, options.target, info),
    update: (time) => {
      updateScrollInfo(element, info, time);
      if (options.offset || options.target) {
        resolveOffsets(element, info, options);
      }
    },
    notify: isFunction(onScroll) ? () => onScroll(info) : scrubAnimation(onScroll, info[axis])
  };
}
function scrubAnimation(controls, axisInfo) {
  controls.pause();
  controls.forEachNative((animation, { easing }) => {
    var _a, _b;
    if (animation.updateDuration) {
      if (!easing)
        animation.easing = noopReturn;
      animation.updateDuration(1);
    } else {
      const timingOptions = { duration: 1e3 };
      if (!easing)
        timingOptions.easing = "linear";
      (_b = (_a = animation.effect) === null || _a === void 0 ? void 0 : _a.updateTiming) === null || _b === void 0 ? void 0 : _b.call(_a, timingOptions);
    }
  });
  return () => {
    controls.currentTime = axisInfo.progress;
  };
}

// ../../node_modules/@motionone/dom/dist/gestures/scroll/index.es.js
var scrollListeners = /* @__PURE__ */ new WeakMap();
var resizeListeners = /* @__PURE__ */ new WeakMap();
var onScrollHandlers = /* @__PURE__ */ new WeakMap();
var getEventTarget = (element) => element === document.documentElement ? window : element;
function scroll(onScroll, _a = {}) {
  var { container = document.documentElement } = _a, options = __rest2(_a, ["container"]);
  let containerHandlers = onScrollHandlers.get(container);
  if (!containerHandlers) {
    containerHandlers = /* @__PURE__ */ new Set();
    onScrollHandlers.set(container, containerHandlers);
  }
  const info = createScrollInfo();
  const containerHandler = createOnScrollHandler(container, onScroll, info, options);
  containerHandlers.add(containerHandler);
  if (!scrollListeners.has(container)) {
    const listener2 = () => {
      const time = performance.now();
      for (const handler of containerHandlers)
        handler.measure();
      for (const handler of containerHandlers)
        handler.update(time);
      for (const handler of containerHandlers)
        handler.notify();
    };
    scrollListeners.set(container, listener2);
    const target = getEventTarget(container);
    window.addEventListener("resize", listener2, { passive: true });
    if (container !== document.documentElement) {
      resizeListeners.set(container, resize(container, listener2));
    }
    target.addEventListener("scroll", listener2, { passive: true });
  }
  const listener = scrollListeners.get(container);
  const onLoadProcesss = requestAnimationFrame(listener);
  return () => {
    var _a2;
    if (typeof onScroll !== "function")
      onScroll.stop();
    cancelAnimationFrame(onLoadProcesss);
    const containerHandlers2 = onScrollHandlers.get(container);
    if (!containerHandlers2)
      return;
    containerHandlers2.delete(containerHandler);
    if (containerHandlers2.size)
      return;
    const listener2 = scrollListeners.get(container);
    scrollListeners.delete(container);
    if (listener2) {
      getEventTarget(container).removeEventListener("scroll", listener2);
      (_a2 = resizeListeners.get(container)) === null || _a2 === void 0 ? void 0 : _a2();
      window.removeEventListener("resize", listener2);
    }
  };
}

// ../../node_modules/framer-motion/dist/es/value/use-scroll.mjs
import { useEffect as useEffect10 } from "react";
var createScrollMotionValues = () => ({
  scrollX: motionValue(0),
  scrollY: motionValue(0),
  scrollXProgress: motionValue(0),
  scrollYProgress: motionValue(0)
});
function useScroll(_a = {}) {
  var _b = _a, { container, target, layoutEffect = true } = _b, options = __objRest(_b, ["container", "target", "layoutEffect"]);
  const values = useConstant(createScrollMotionValues);
  const useLifecycleEffect = layoutEffect ? useIsomorphicLayoutEffect : useEffect10;
  useLifecycleEffect(() => {
    return scroll(({ x, y }) => {
      values.scrollX.set(x.current);
      values.scrollXProgress.set(x.progress);
      values.scrollY.set(y.current);
      values.scrollYProgress.set(y.progress);
    }, __spreadProps(__spreadValues({}, options), {
      container: (container === null || container === void 0 ? void 0 : container.current) || void 0,
      target: (target === null || target === void 0 ? void 0 : target.current) || void 0
    }));
  }, []);
  return values;
}

// src/Menu.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
{
  new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric"
  });
}
var Menu = () => {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsxs2("div", {
    className: "hidden sm:block",
    children: [
      /* @__PURE__ */ jsx3(motion.div, {
        className: "progress-bar",
        style: { scaleX: scrollYProgress }
      }),
      /* @__PURE__ */ jsxs2("div", {
        className: "flex flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500",
        children: [
          /* @__PURE__ */ jsx3("a", {
            href: "https://hns.pencil.li",
            className: "text-1xl flex flex-row items-center justify-center font-bold text-white",
            children: /* @__PURE__ */ jsx3("picture", {
              children: /* @__PURE__ */ jsxs2("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "150",
                height: "25",
                viewBox: "0 0 2344 678",
                children: [
                  /* @__PURE__ */ jsxs2("defs", {
                    children: [
                      /* @__PURE__ */ jsxs2("linearGradient", {
                        id: "a",
                        x1: "0%",
                        x2: "100%",
                        y1: "50%",
                        y2: "50%",
                        children: [
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "0%",
                            "stop-color": "#B620E0"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "16.68%",
                            "stop-color": "#6236FF"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "33.433%",
                            "stop-color": "#0091FF"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "49.949%",
                            "stop-color": "#6DD400"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "66.61%",
                            "stop-color": "#F7B500"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "83.281%",
                            "stop-color": "#FA6400"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "100%",
                            "stop-color": "#E02020"
                          })
                        ]
                      }),
                      /* @__PURE__ */ jsxs2("linearGradient", {
                        id: "b",
                        x1: "100%",
                        x2: "0%",
                        y1: "50%",
                        y2: "50%",
                        children: [
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "0%",
                            "stop-color": "#E02020"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "16.719%",
                            "stop-color": "#FA6400"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "33.39%",
                            "stop-color": "#F7B500"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "50.051%",
                            "stop-color": "#6DD400"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "66.567%",
                            "stop-color": "#0091FF"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "83.32%",
                            "stop-color": "#6236FF"
                          }),
                          /* @__PURE__ */ jsx3("stop", {
                            offset: "100%",
                            "stop-color": "#B620E0"
                          })
                        ]
                      })
                    ]
                  }),
                  /* @__PURE__ */ jsxs2("g", {
                    fill: "none",
                    "fill-rule": "evenodd",
                    transform: "translate(-151 -173)",
                    children: [
                      /* @__PURE__ */ jsx3("path", {
                        fill: "url(#a)",
                        d: "M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z",
                        transform: "matrix(0 -1 -1 0 980 980)"
                      }),
                      /* @__PURE__ */ jsx3("path", {
                        fill: "url(#b)",
                        d: "M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z",
                        transform: "matrix(0 -1 -1 0 905.5 905.5)"
                      }),
                      /* @__PURE__ */ jsx3("path", {
                        fill: "url(#a)",
                        d: "M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z",
                        transform: "matrix(0 -1 -1 0 842.5 842.5)"
                      }),
                      /* @__PURE__ */ jsx3("path", {
                        fill: "url(#b)",
                        d: "M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z",
                        transform: "matrix(0 -1 -1 0 779 779)"
                      }),
                      /* @__PURE__ */ jsx3("path", {
                        fill: "url(#a)",
                        d: "M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z",
                        transform: "matrix(0 -1 -1 0 715.5 715.5)"
                      }),
                      /* @__PURE__ */ jsx3("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "500",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx3("tspan", {
                          x: "993.25",
                          y: "697",
                          children: "Pencil"
                        })
                      }),
                      /* @__PURE__ */ jsx3("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "100",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx3("tspan", {
                          x: "690.95",
                          y: "829",
                          children: "\xA9"
                        })
                      }),
                      /* @__PURE__ */ jsx3("text", {
                        fill: "#FFF",
                        "font-family": "Roboto, sans-serif",
                        "font-size": "75",
                        "font-weight": "500",
                        children: /* @__PURE__ */ jsx3("tspan", {
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
          /* @__PURE__ */ jsx3("button", {
            className: "rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx3("a", {
              href: "/",
              children: "Explorer"
            })
          }),
          /* @__PURE__ */ jsx3("button", {
            className: "rounded-xl py-2 px-4 font-bold text-white",
            children: /* @__PURE__ */ jsx3("a", {
              href: "/domains",
              children: "Domains"
            })
          }),
          /* @__PURE__ */ jsx3("button", {
            className: "hidden rounded-xl py-2 px-4 font-bold text-white sm:block",
            children: /* @__PURE__ */ jsx3("a", {
              href: "/corporate",
              children: "Corporate"
            })
          }),
          /* @__PURE__ */ jsxs2("div", {
            className: "hidden py-2 px-4 font-bold text-white md:block",
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            },
            children: [
              " ",
              /* @__PURE__ */ jsx3("button", {
                className: "hidden py-2 px-4 font-bold text-white md:block",
                children: /* @__PURE__ */ jsx3("a", {
                  href: "http://twitter.com/miguelgargallo",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: "Twitter"
                })
              }),
              /* @__PURE__ */ jsx3("a", {
                href: "https://github.com/miguelgargallo/Next13-Fetch-Data-turbo",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden py-2 px-4 font-bold text-white md:block",
                children: /* @__PURE__ */ jsx3("picture", {
                  children: /* @__PURE__ */ jsx3("img", {
                    src: "https://img.shields.io/github/stars/miguelgargallo/Next13-Fetch-Data-turbo?style=social",
                    alt: "Landscape picture",
                    width: 100,
                    height: 20
                  })
                })
              }),
              " ",
              /* @__PURE__ */ jsx3(Version, {})
            ]
          })
        ]
      })
    ]
  });
};

// src/MenuDomains.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var MenuDomains = () => {
  return /* @__PURE__ */ jsx4("div", {
    className: "flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block",
    children: /* @__PURE__ */ jsxs3("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx4("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/domains",
            children: "All Domains"
          })
        }),
        /* @__PURE__ */ jsx4("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/domains-geographic",
            children: "Geographic"
          })
        }),
        /* @__PURE__ */ jsx4("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/domains-blockchain",
            children: "Blockchain"
          })
        }),
        /* @__PURE__ */ jsx4("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/domains-metaverse",
            children: "Metaverse"
          })
        }),
        /* @__PURE__ */ jsx4("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx4("a", {
            href: "/domains-new",
            children: "New"
          })
        })
      ]
    })
  });
};

// src/SupportMenu.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var SupportMenu = () => {
  return /* @__PURE__ */ jsx5("div", {
    className: "flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block",
    children: /* @__PURE__ */ jsxs4("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx5("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx5("a", {
            href: "/support-tos",
            children: "Terms Of Service"
          })
        }),
        /* @__PURE__ */ jsx5("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx5("a", {
            href: "/support-pp",
            children: "Privacy Policy"
          })
        }),
        /* @__PURE__ */ jsx5("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx5("a", {
            href: "/support-answers",
            children: "Answers"
          })
        }),
        /* @__PURE__ */ jsx5("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx5("a", {
            href: "/support-trademarks",
            children: "Trademarks"
          })
        })
      ]
    })
  });
};

// src/MenuDevs.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var MenuDevs = () => {
  return /* @__PURE__ */ jsx6("div", {
    className: "flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block",
    children: /* @__PURE__ */ jsxs5("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx6("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx6("a", {
            href: "/developer",
            children: "Home"
          })
        }),
        /* @__PURE__ */ jsx6("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx6("a", {
            href: "/developer-launch",
            children: "Launch your TLD"
          })
        }),
        /* @__PURE__ */ jsx6("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx6("a", {
            href: "/developer-agreement",
            children: "Agreement"
          })
        })
      ]
    })
  });
};

// src/MenuCorporate.tsx
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
var MenuCorporate = () => {
  return /* @__PURE__ */ jsx7("div", {
    className: "flex hidden flex-row items-center justify-between bg-gradient-to-r from-blue-400 to-blue-500 sm:block",
    children: /* @__PURE__ */ jsxs6("div", {
      className: "flex flex-row",
      children: [
        /* @__PURE__ */ jsx7("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx7("a", {
            href: "/developer",
            children: "Developer"
          })
        }),
        /* @__PURE__ */ jsx7("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx7("a", {
            href: "/office",
            children: "Office"
          })
        }),
        /* @__PURE__ */ jsx7("button", {
          className: "rounded-xl py-2 px-4 font-bold text-white",
          children: /* @__PURE__ */ jsx7("a", {
            href: "/support",
            children: "Support"
          })
        })
      ]
    })
  });
};

// src/Card.tsx
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
var Card = () => {
  return /* @__PURE__ */ jsx8("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsxs7("div", {
      className: "overflow-hidden bg-white shadow sm:rounded-lg",
      children: [
        /* @__PURE__ */ jsxs7("div", {
          className: "px-4 py-5 sm:px-6",
          children: [
            /* @__PURE__ */ jsx8("a", {
              href: "https://hns.pencil.li",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "p-2",
              children: /* @__PURE__ */ jsx8("picture", {
                children: /* @__PURE__ */ jsxs7("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "150",
                  height: "25",
                  viewBox: "0 0 2344 678",
                  children: [
                    /* @__PURE__ */ jsxs7("defs", {
                      children: [
                        /* @__PURE__ */ jsxs7("linearGradient", {
                          id: "a",
                          x1: "0%",
                          x2: "100%",
                          y1: "50%",
                          y2: "50%",
                          children: [
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "0%",
                              "stop-color": "#B620E0"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "16.68%",
                              "stop-color": "#6236FF"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "33.433%",
                              "stop-color": "#0091FF"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "49.949%",
                              "stop-color": "#6DD400"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "66.61%",
                              "stop-color": "#F7B500"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "83.281%",
                              "stop-color": "#FA6400"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "100%",
                              "stop-color": "#E02020"
                            })
                          ]
                        }),
                        /* @__PURE__ */ jsxs7("linearGradient", {
                          id: "b",
                          x1: "100%",
                          x2: "0%",
                          y1: "50%",
                          y2: "50%",
                          children: [
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "0%",
                              "stop-color": "#E02020"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "16.719%",
                              "stop-color": "#FA6400"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "33.39%",
                              "stop-color": "#F7B500"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "50.051%",
                              "stop-color": "#6DD400"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "66.567%",
                              "stop-color": "#0091FF"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "83.32%",
                              "stop-color": "#6236FF"
                            }),
                            /* @__PURE__ */ jsx8("stop", {
                              offset: "100%",
                              "stop-color": "#B620E0"
                            })
                          ]
                        })
                      ]
                    }),
                    /* @__PURE__ */ jsxs7("g", {
                      fill: "none",
                      "fill-rule": "evenodd",
                      transform: "translate(-151 -173)",
                      children: [
                        /* @__PURE__ */ jsx8("path", {
                          fill: "url(#a)",
                          d: "M508.516097,232.032195 L783.120976,781.241951 C791.271621,797.543242 784.664217,817.365452 768.362927,825.516097 C763.780698,827.807212 758.727967,829 753.604878,829 L204.395122,829 C186.169725,829 171.395122,814.225397 171.395122,796 C171.395122,790.876912 172.58791,785.824181 174.879024,781.241951 L449.483903,232.032195 C457.634548,215.730904 477.456758,209.123501 493.758049,217.274146 C500.144453,220.467348 505.322895,225.64579 508.516097,232.032195 Z",
                          transform: "matrix(0 -1 -1 0 980 980)"
                        }),
                        /* @__PURE__ */ jsx8("path", {
                          fill: "url(#b)",
                          d: "M419.705262,277.910524 L658,754.5 L658,754.5 L151,754.5 L389.294738,277.910524 C393.493555,269.51289 403.704997,266.109076 412.102631,270.307893 C415.392597,271.952876 418.060279,274.620559 419.705262,277.910524 Z",
                          transform: "matrix(0 -1 -1 0 905.5 905.5)"
                        }),
                        /* @__PURE__ */ jsx8("path", {
                          fill: "url(#a)",
                          d: "M356.705262,340.910524 L532,691.5 L532,691.5 L151,691.5 L326.294738,340.910524 C330.493555,332.51289 340.704997,329.109076 349.102631,333.307893 C352.392597,334.952876 355.060279,337.620559 356.705262,340.910524 Z",
                          transform: "matrix(0 -1 -1 0 842.5 842.5)"
                        }),
                        /* @__PURE__ */ jsx8("path", {
                          fill: "url(#b)",
                          d: "M293.205262,404.410524 L405,628 L405,628 L151,628 L262.794738,404.410524 C266.993555,396.01289 277.204997,392.609076 285.602631,396.807893 C288.892597,398.452876 291.560279,401.120559 293.205262,404.410524 Z",
                          transform: "matrix(0 -1 -1 0 779 779)"
                        }),
                        /* @__PURE__ */ jsx8("path", {
                          fill: "url(#a)",
                          d: "M230.599689,469.699379 L278,564.5 L278,564.5 L151,564.5 L198.400311,469.699379 C202.846117,460.807766 213.658232,457.203728 222.549845,461.649534 C226.033338,463.391281 228.857943,466.215886 230.599689,469.699379 Z",
                          transform: "matrix(0 -1 -1 0 715.5 715.5)"
                        }),
                        /* @__PURE__ */ jsx8("text", {
                          fill: "#6CD300",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "500",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx8("tspan", {
                            x: "993.25",
                            y: "697",
                            children: "Pencil"
                          })
                        }),
                        /* @__PURE__ */ jsx8("text", {
                          fill: "#1C78FF",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "100",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx8("tspan", {
                            x: "690.95",
                            y: "829",
                            children: "\xA9"
                          })
                        }),
                        /* @__PURE__ */ jsx8("text", {
                          fill: "#F75B04",
                          "font-family": "Roboto-Regular, Roboto",
                          "font-size": "75",
                          "font-weight": "500",
                          children: /* @__PURE__ */ jsx8("tspan", {
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
            /* @__PURE__ */ jsx8("h3", {
              className: "text-lg font-medium leading-6 text-gray-900",
              children: "Pencil Domains"
            }),
            /* @__PURE__ */ jsx8("p", {
              className: "mt-1 max-w-2xl text-sm text-gray-500",
              children: "Pencil Domains is a domain name registrar that allows you to register in this new namespace."
            })
          ]
        }),
        /* @__PURE__ */ jsx8("div", {
          className: "border-t border-gray-200",
          children: /* @__PURE__ */ jsxs7("dl", {
            children: [
              /* @__PURE__ */ jsxs7("div", {
                className: "bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                children: [
                  /* @__PURE__ */ jsx8("dt", {
                    className: "text-sm font-medium text-gray-500",
                    children: "Blockchain"
                  }),
                  /* @__PURE__ */ jsx8("dd", {
                    className: "mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0",
                    children: "Handshake"
                  })
                ]
              }),
              /* @__PURE__ */ jsxs7("div", {
                className: "bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6",
                children: [
                  /* @__PURE__ */ jsx8("dt", {
                    className: "text-sm font-medium text-gray-500",
                    children: "Domain Owner"
                  }),
                  /* @__PURE__ */ jsx8("dd", {
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

// src/GradientWhite.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var ELEMENTS2 = 0;
var GradientWhite = () => {
  return /* @__PURE__ */ jsx9("div", {
    children: /* @__PURE__ */ jsx9("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS2),
      children: /* @__PURE__ */ jsx9("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-current"
      })
    })
  });
};

// src/GradientDiamond.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var ELEMENTS3 = 25;
var GradientDiamond = () => {
  return /* @__PURE__ */ jsx10("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "95",
    height: "95",
    stroke: "#FFF",
    "stroke-width": "0",
    viewBox: "0 0 95 95",
    className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
    style: k(ELEMENTS3),
    children: /* @__PURE__ */ jsx10("path", {
      d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
      id: "Fill-1",
      className: "fill-sky-500"
    })
  });
};

// src/GradientGold.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var ELEMENTS4 = 5;
var GradientGold = () => {
  return /* @__PURE__ */ jsx11("div", {
    children: /* @__PURE__ */ jsx11("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS4),
      children: /* @__PURE__ */ jsx11("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-yellow-500"
      })
    })
  });
};

// src/GradientSilver.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var ELEMENTS5 = 3;
var GradientSilver = () => {
  return /* @__PURE__ */ jsx12("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "95",
    height: "95",
    stroke: "#FFF",
    "stroke-width": "0",
    viewBox: "0 0 95 95",
    className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
    style: k(ELEMENTS5),
    children: /* @__PURE__ */ jsx12("path", {
      d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
      id: "Fill-1",
      className: "fill-gray-500"
    })
  });
};

// src/GradientBronze.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
var ELEMENTS6 = 1;
var GradientBronze = () => {
  return /* @__PURE__ */ jsx13("div", {
    children: /* @__PURE__ */ jsx13("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "95",
      height: "95",
      stroke: "#FFF",
      "stroke-width": "0",
      viewBox: "0 0 95 95",
      className: "m-2 rounded-xl py-2 shadow-md hover:shadow-xl",
      style: k(ELEMENTS6),
      children: /* @__PURE__ */ jsx13("path", {
        d: "M32.816,12.95,30.349,8.568h4.78a.439.439,0,0,1,.346.2l.931,1.534c.558.92,1.225,2.02,1.607,2.648ZM23.975,39.495a.339.339,0,0,1-.315.207H18.772l7.595-13.635a.731.731,0,0,0-.636-1.087h0L12.787,25l-2.574-4.456H29.076c.011,0,.02,0,.031,0a.677.677,0,0,0,.217-.045l.047-.02a.722.722,0,0,0,.346-.313l3.108-5.745h5.13Zm-6.468-.518-.613-1.009c-.785-1.3-1.791-2.955-1.9-3.137a.385.385,0,0,1,.024-.355l4.457-8.027,5.019-.006ZM8.948,30.444,6.453,26.011,8.968,21.3l2.522,4.367C10.706,27.14,9.483,29.442,8.948,30.444Zm-3.348.69H2.881a.443.443,0,0,1-.343-.2L1.726,29.6C1.147,28.641.409,27.425,0,26.752H5.2l2.466,4.383ZM14.037.208A.338.338,0,0,1,14.351,0h4.91L11.646,13.636c-.006.011-.01.023-.016.035s-.021.046-.03.07-.015.046-.021.069-.011.044-.014.066a.648.648,0,0,0-.008.081c0,.012,0,.023,0,.036s0,.018,0,.027a.591.591,0,0,0,.008.079.538.538,0,0,0,.012.066c.006.023.013.045.021.068s.016.045.025.066.021.041.033.062.023.04.037.059a.644.644,0,0,0,.045.055c.016.017.031.035.048.051s.035.029.053.043a.634.634,0,0,0,.063.045l.023.016c.008,0,.018.006.027.011a.729.729,0,0,0,.119.048c.015,0,.029.01.044.013a.7.7,0,0,0,.164.021h.33l12.619-.017c.334.58.957,1.673,1.489,2.6q.612,1.072,1.01,1.768H8.949c-.008,0-.016,0-.024,0a.725.725,0,0,0-.631.382L5.185,25.29H.059Zm6.479.534.456.75c.8,1.321,1.932,3.185,2.052,3.379A.383.383,0,0,1,23,5.227l-4.457,8.027-5.017.006Zm8.546,8.511,2.5,4.435-2.545,4.7c-.3-.529-.68-1.189-1.034-1.808-.7-1.224-1.208-2.115-1.495-2.613C27.028,12.977,28.462,10.349,29.062,9.253Z",
        id: "Fill-1",
        className: "fill-orange-500"
      })
    })
  });
};

// src/DomainsAll.tsx
import { jsx as jsx14, jsxs as jsxs8 } from "react/jsx-runtime";
var DomainsAll = () => {
  return /* @__PURE__ */ jsx14("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx14("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs8("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".es\xF1"
              }),
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".madrd"
              }),
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".bcln"
              }),
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".valenc"
              }),
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".mestalla"
              }),
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".isbals"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".cil"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".catc"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".teide"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".granca"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".tenef"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".elhie"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".lagmr"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".laplm"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-xl font-bold text-black",
                children: ".lagraciosa"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".fuertev"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".lnzrt"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Andorra"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".andors"
              }),
              " ",
              /* @__PURE__ */ jsx14("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx14("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs8("div", {
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
          }),
          /* @__PURE__ */ jsxs8("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx14("p", {
                children: /* @__PURE__ */ jsx14("a", {
                  className: "font-slim text-xl text-black",
                  children: "Metaverse"
                })
              }),
              /* @__PURE__ */ jsx14("a", {
                className: "text-2xl font-bold text-black",
                children: ".myplot"
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
        ]
      })
    })
  });
};

// src/DomainsGeo.tsx
import { jsx as jsx15, jsxs as jsxs9 } from "react/jsx-runtime";
var DomainsGeo = () => {
  return /* @__PURE__ */ jsx15("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx15("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs9("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".es\xF1"
              }),
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".madrd"
              }),
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".bcln"
              }),
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".valenc"
              }),
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".mestalla"
              }),
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".isbals"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".cil"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".catc"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".teide"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".granca"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".tenef"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".elhie"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".lagmr"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".laplm"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-xl font-bold text-black",
                children: ".lagraciosa"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".fuertev"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Espa\xF1a"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".lnzrt"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs9("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx15("p", {
                children: /* @__PURE__ */ jsx15("a", {
                  className: "font-slim text-xl text-black",
                  children: "Andorra"
                })
              }),
              /* @__PURE__ */ jsx15("a", {
                className: "text-2xl font-bold text-black",
                children: ".andors"
              }),
              " ",
              /* @__PURE__ */ jsx15("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx15("a", {
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

// src/DomainsBlocks.tsx
import { jsx as jsx16, jsxs as jsxs10 } from "react/jsx-runtime";
var DomainsBlocks = () => {
  return /* @__PURE__ */ jsx16("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx16("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsx16("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: /* @__PURE__ */ jsxs10("div", {
          className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
          children: [
            /* @__PURE__ */ jsx16("p", {
              children: /* @__PURE__ */ jsx16("a", {
                className: "font-slim text-xl text-black",
                children: "Blocks"
              })
            }),
            /* @__PURE__ */ jsx16("a", {
              className: "text-2xl font-bold text-black",
              children: ".\u{1F9CA}\u{1F9CA}"
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
      })
    })
  });
};

// src/DomainsMeta.tsx
import { jsx as jsx17, jsxs as jsxs11 } from "react/jsx-runtime";
var DomainsMeta = () => {
  return /* @__PURE__ */ jsx17("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx17("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsx17("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: /* @__PURE__ */ jsxs11("div", {
          className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
          children: [
            /* @__PURE__ */ jsx17("p", {
              children: /* @__PURE__ */ jsx17("a", {
                className: "font-slim text-xl text-black",
                children: "Metaverse"
              })
            }),
            /* @__PURE__ */ jsx17("a", {
              className: "text-2xl font-bold text-black",
              children: ".myplot"
            }),
            /* @__PURE__ */ jsx17("p", {
              className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
              children: /* @__PURE__ */ jsx17("a", {
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
import { jsx as jsx18, jsxs as jsxs12 } from "react/jsx-runtime";
var DomainsNew = () => {
  return /* @__PURE__ */ jsx18("div", {
    className: "shaddow-md duration-800 cols-span-1 m-10 rounded-lg border border-sky-500 px-10 py-5 text-center shadow transition-shadow ease-in-out hover:shadow-2xl",
    children: /* @__PURE__ */ jsx18("div", {
      className: "overflow-hidden rounded-lg",
      children: /* @__PURE__ */ jsxs12("div", {
        className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-4",
        children: [
          /* @__PURE__ */ jsxs12("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx18("p", {
                children: /* @__PURE__ */ jsx18("a", {
                  className: "font-slim text-xl text-black",
                  children: "Education"
                })
              }),
              /* @__PURE__ */ jsx18("a", {
                className: "text-2xl font-bold text-black",
                children: ".eedu"
              }),
              /* @__PURE__ */ jsx18("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx18("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx18("p", {
                children: /* @__PURE__ */ jsx18("a", {
                  className: "font-slim text-xl text-black",
                  children: "Finance"
                })
              }),
              /* @__PURE__ */ jsx18("a", {
                className: "text-2xl font-bold text-black",
                children: ".fincy"
              }),
              /* @__PURE__ */ jsx18("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx18("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx18("p", {
                children: /* @__PURE__ */ jsx18("a", {
                  className: "font-slim text-xl text-black",
                  children: "Virtual FX"
                })
              }),
              /* @__PURE__ */ jsx18("a", {
                className: "text-2xl font-bold text-black",
                children: ".virtualfx"
              }),
              /* @__PURE__ */ jsx18("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx18("a", {
                  className: "text-sm text-black",
                  children: "soon"
                })
              })
            ]
          }),
          /* @__PURE__ */ jsxs12("div", {
            className: "shaddow-md duration-800 cols-span-1 m-10 overflow-hidden rounded-lg rounded-lg border border-sky-500 bg-sky-200 px-10 py-5 py-5 px-4 text-center shadow shadow transition-shadow ease-in-out hover:shadow-2xl sm:px-6",
            children: [
              /* @__PURE__ */ jsx18("p", {
                children: /* @__PURE__ */ jsx18("a", {
                  className: "font-slim text-xl text-black",
                  children: "Startups"
                })
              }),
              /* @__PURE__ */ jsx18("a", {
                className: "text-2xl font-bold text-black",
                children: "..nextco"
              }),
              /* @__PURE__ */ jsx18("p", {
                className: "grid grid-cols-1 gap-4 sm:grid-cols-4 lg:grid-cols-1",
                children: /* @__PURE__ */ jsx18("a", {
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

// src/Footer.tsx
import { jsx as jsx19, jsxs as jsxs13 } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs13("footer", {
    className: "bg-white py-8 text-center",
    children: [
      /* @__PURE__ */ jsx19("div", {
        children: /* @__PURE__ */ jsxs13("a", {
          children: [
            "Made with \u2764\uFE0F by",
            " ",
            /* @__PURE__ */ jsx19("a", {
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
      /* @__PURE__ */ jsx19("div", {
        children: /* @__PURE__ */ jsxs13("a", {
          children: [
            "2022 \xA9",
            " ",
            /* @__PURE__ */ jsx19("a", {
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
      /* @__PURE__ */ jsx19("div", {
        className: "hidden sm:block",
        children: /* @__PURE__ */ jsxs13("div", {
          className: "flex w-full items-center justify-center",
          children: [
            /* @__PURE__ */ jsx19("a", {
              href: "https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiguelgargallo%2FNext13-Fetch-Data-turbo&project-name=miguelgargallo-next13-fetch-data-turbo&repo-name=miguelgargallo-next13-fetch-data-turbo",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden p-2 md:block",
              children: /* @__PURE__ */ jsx19("picture", {
                children: /* @__PURE__ */ jsx19("img", {
                  src: "https://vercel.com/button",
                  alt: "Landscape picture",
                  width: 75,
                  height: 20
                })
              })
            }),
            /* @__PURE__ */ jsx19("a", {
              href: "https://huggingface.co/spaces/superdatas/LICENSE",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "hidden p-2 md:block",
              children: /* @__PURE__ */ jsx19("picture", {
                children: /* @__PURE__ */ jsx19("img", {
                  src: "https://huggingface.co/front/assets/huggingface_logo.svg",
                  alt: "Landscape picture",
                  width: 40,
                  height: 20
                })
              })
            })
          ]
        })
      }),
      /* @__PURE__ */ jsx19("p", {
        children: "Please do not consider the score as investment advice."
      })
    ]
  });
};

// src/Scrollable.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Scrollable = () => {
  const { scrollYProgress } = useScroll();
  return /* @__PURE__ */ jsx20(motion.div, {
    className: "progress-bar",
    style: { scaleX: scrollYProgress }
  });
};

// src/SquareWhite.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var SquareWhite = () => {
  return /* @__PURE__ */ jsx21("div", {
    className: "square_white"
  });
};

// src/SquareDiamond.tsx
import { jsx as jsx22 } from "react/jsx-runtime";
var SquareDiamond = () => {
  return /* @__PURE__ */ jsx22("div", {
    className: "square_diamond"
  });
};

// src/SquareGold.tsx
import { jsx as jsx23 } from "react/jsx-runtime";
var SquareGold = () => {
  return /* @__PURE__ */ jsx23("div", {
    className: "square_gold"
  });
};

// src/SquareSilver.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var SquareSilver = () => {
  return /* @__PURE__ */ jsx24("div", {
    className: "square_silver"
  });
};

// src/SquareBronze.tsx
import { jsx as jsx25 } from "react/jsx-runtime";
var SquareBronze = () => {
  return /* @__PURE__ */ jsx25("div", {
    className: "square_bronze"
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
  GradientBronze,
  GradientDiamond,
  GradientGold,
  GradientSilver,
  GradientWhite,
  Menu,
  MenuCorporate,
  MenuDevs,
  MenuDomains,
  Scrollable,
  SquareBronze,
  SquareDiamond,
  SquareGold,
  SquareSilver,
  SquareWhite,
  SupportMenu,
  Version
};
