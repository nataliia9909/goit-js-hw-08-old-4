!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=o);var a=o("dCfNN"),i=document.querySelector(".feedback-form"),l="feedback-form-state",f={};!function(){var e=localStorage.getItem(l),t=JSON.parse(e);if(e){Object.keys(t).map((function(e){document.querySelector("[name='".concat(e,"']")).value=t[e]}))}}(),i.addEventListener("input",e(a)((function(e){f[e.target.name]=e.target.value,localStorage.setItem(l,JSON.stringify(f))}),500)),i.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(l)}))}();
//# sourceMappingURL=index.bd807b22.js.map
