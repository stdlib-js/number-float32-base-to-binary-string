// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t,n=Object.prototype.toString,i=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";t=e()?function(r){var e,t,a,u,c;if(null==r)return n.call(r);t=r[o],c=o,e=null!=(u=r)&&i.call(u,c);try{r[o]=void 0}catch(e){return n.call(r)}return a=n.call(r),e?r[o]=t:delete r[o],a}:function(r){return n.call(r)};var u,c=t,s="function"==typeof Float32Array,l=Number.POSITIVE_INFINITY,f="function"==typeof Float32Array?Float32Array:null,p="function"==typeof Float32Array?Float32Array:void 0;u=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f([1,3.14,-3.14,5e40]),t=e,r=(s&&t instanceof Float32Array||"[object Float32Array]"===c(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===l}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var g,d=u,h="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;g=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var v=g,b=new d(1);new v(b.buffer)[0]=2139095040;var w=b[0],E=new d(1);new v(E.buffer)[0]=4286578688;var S=E[0],_=Math.floor,T="function"==typeof Object.defineProperty?Object.defineProperty:null,j=Object.defineProperty;function x(r){return"number"==typeof r}function V(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function A(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+V(i):V(i)+r,n&&(r="-"+r)),r}var F=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function O(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!x(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=A(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=A(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):F.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var I=Math.abs,P=String.prototype.toLowerCase,R=String.prototype.toUpperCase,$=String.prototype.replace,U=/e\+(\d)$/,N=/e-(\d)$/,C=/^(\d+)$/,G=/^(\d+)e/,Z=/\.0$/,M=/\.0*e/,W=/(\..*[^0])0*e/;function L(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!x(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":I(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$.call(t,W,"$1e"),t=$.call(t,M,"e"),t=$.call(t,Z,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$.call(t,U,"e+0$1"),t=$.call(t,N,"e-0$1"),r.alternate&&(t=$.call(t,C,"$1."),t=$.call(t,G,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===R.call(r.specifier)?R.call(t):P.call(t)}function X(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var Y=String.fromCharCode,z=Array.isArray;function B(r){return r!=r}function q(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function D(r){var e,t,n,i,a,o,u,c,s,l,f,p,g;if(!z(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if("string"==typeof(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=q(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!B(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(a)?String(n.arg):Y(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=L(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=A(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,f=n.width,p=n.padRight,g=void 0,(g=f-l.length)<0?l:l=p?l+X(g):X(g)+l)),o+=n.arg||"",u+=1}return o}var H=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function J(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function K(r){var e,t,n,i;for(t=[],i=0,n=H.exec(r);n;)(e=r.slice(i,H.lastIndex-n[0].length)).length&&t.push(e),t.push(J(n)),i=H.lastIndex,n=H.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function Q(r){var e,t;if("string"!=typeof r)throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[K(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return D.apply(null,e)}var rr=Object.prototype,er=rr.toString,tr=rr.__defineGetter__,nr=rr.__defineSetter__,ir=rr.__lookupGetter__,ar=rr.__lookupSetter__,or=function(){try{return T({},"x",{}),!0}catch(r){return!1}}()?j:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===er.call(r))throw new TypeError(Q("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===er.call(t))throw new TypeError(Q("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ir.call(r,e)||ar.call(r,e)?(n=r.__proto__,r.__proto__=rr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&tr&&tr.call(r,e,t.get),o&&nr&&nr.call(r,e,t.set),r};function ur(r,e,t){or(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function cr(r){return"number"==typeof r}var sr=Number,lr=sr.prototype.toString,fr=e();function pr(r){return"object"==typeof r&&(r instanceof sr||(fr?function(r){try{return lr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function gr(r){return cr(r)||pr(r)}ur(gr,"isPrimitive",cr),ur(gr,"isObject",pr);var dr=sr.NEGATIVE_INFINITY;function hr(r){return r<l&&r>dr&&_(e=r)===e;var e}function yr(r){return cr(r)&&hr(r)}function mr(r){return pr(r)&&hr(r.valueOf())}function vr(r){return yr(r)||mr(r)}function br(r){return yr(r)&&r>=0}function wr(r){return mr(r)&&r.valueOf()>=0}function Er(r){return br(r)||wr(r)}function Sr(r){return"string"==typeof r}ur(vr,"isPrimitive",yr),ur(vr,"isObject",mr),ur(Er,"isPrimitive",br),ur(Er,"isObject",wr);var _r=String.prototype.valueOf,Tr=e();function jr(r){return"object"==typeof r&&(r instanceof String||(Tr?function(r){try{return _r.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function xr(r){return Sr(r)||jr(r)}ur(xr,"isPrimitive",Sr),ur(xr,"isObject",jr);var Vr=9007199254740991,Ar=void 0!==String.prototype.repeat,Fr=String.prototype.repeat,kr=Ar?function(r,e){return Fr.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Or=Math.ceil;function Ir(r,e,t){var n;if(!Sr(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));if(!br(e))throw new TypeError(Q("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Sr(n=t))throw new TypeError(Q("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>Vr)throw new RangeError(Q("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Or(n),r+kr(t,n))}(r,e,n)}function Pr(r,e,t){var n;if(!Sr(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));if(!br(e))throw new TypeError(Q("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Sr(n=t))throw new TypeError(Q("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>Vr)throw new RangeError(Q("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return function(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Or(n),kr(t,n)+r)}(r,e,n)}function Rr(r,e){if(!Sr(r))throw new TypeError(Q("invalid argument. First argument must be a string. Value: `%s`.",r));if(!br(e))throw new TypeError(Q("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return kr(r,e)}function $r(r){for(var e,t="";r>0;)t=(e=r/2)===(r=_(e))?"0"+t:"1"+t;return t}var Ur=149,Nr=24;return function(r){var e,t,n,i,a,o,u;if(t=r<0||1/r===S?"1":"0",r===w||r===S)return t+(i=Rr("1",8))+(n=Rr("0",23));if(r!=r)return t+(i=Rr("1",8))+(n="1"+Rr("0",22));if(0===r)return t+(i=Rr("0",8))+(n=Rr("0",23));if(o=(r=function(r){return Math.abs(r)}(r))-(a=_(r)),a=$r(a),o=function(r){var e,t,n,i;if(e="",0===r)return e;for(i=Ur,n=0;n<Ur&&((t=2*r)>=1?(r=t-1,e+="1",i===Ur&&(i=n)):(r=t,e+="0"),!(1===t||n-i>Nr));n++);return e}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){e=u+1;break}i=-e}return n=a+o,i<0?(i<=-127&&(e=126),n=n.substring(e)):n=n.substring(1),t+(i=Pr(i=$r(i+127),8,"0"))+(n=Ir(n,23,"0").substring(0,23))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).toBinaryStringf=e();
//# sourceMappingURL=index.js.map
