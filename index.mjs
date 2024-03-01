// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-pinf@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-ninf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32-exponent-bias@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-right-pad@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/string-left-pad@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-repeat@v0.2.1-esm/index.mjs";function o(t){for(var s,n="";t>0;)n=(s=t/2)===(t=e(s))?"0"+n:"1"+n;return n}var f=149,l=24;function a(a){var j,p,h,v,g,b,c;if(p=a<0||1/a===s?"1":"0",a===t||a===s)return p+(v=m("1",8))+(h=m("0",23));if(a!=a)return p+(v=m("1",8))+(h="1"+m("0",22));if(0===a)return p+(v=m("0",8))+(h=m("0",23));if(b=(a=r(a))-(g=e(a)),g=o(g),b=function(t){var s,n,r,e;if(s="",0===t)return s;for(e=f,r=0;r<f&&((n=2*t)>=1?(t=n-1,s+="1",e===f&&(e=r)):(t=n,s+="0"),!(1===n||r-e>l));r++);return s}(b),g)v=g.length-1;else{for(c=0;c<b.length;c++)if("1"===b[c]){j=c+1;break}v=-j}return h=g+b,v<0?(v<=-n&&(j=n-1),h=h.substring(j)):h=h.substring(1),v=o(v+n),p+(v=d(v,8,"0"))+(h=i(h,23,"0").substring(0,23))}export{a as default};
//# sourceMappingURL=index.mjs.map
