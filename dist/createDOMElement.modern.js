function e(t,n){if("number"==typeof n||"bigint"==typeof n||n instanceof Date||n instanceof RegExp)t.append(String(n));else if(Array.isArray(n))for(const o of n)e(t,o);else null!=n&&"boolean"!=typeof n&&t.append(n)}export default function(t,n,...o){t=t.toLowerCase();const f=document.createElement(t);for(let e in n){let t=n[e];"string"==typeof t?f.setAttribute(e,t):f[e]=t}for(const t of o)e(f,t);return f}
//# sourceMappingURL=createDOMElement.modern.js.map