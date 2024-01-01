// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return r&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var i,a="function"==typeof Symbol?Symbol:void 0,o="function"==typeof a?a.toStringTag:"";i=e()?function(r){var e,i,a,u,c;if(null==r)return t.call(r);i=r[o],c=o,e=null!=(u=r)&&n.call(u,c);try{r[o]=void 0}catch(e){return t.call(r)}return a=t.call(r),e?r[o]=i:delete r[o],a}:function(r){return t.call(r)};var u=i,c="function"==typeof Float32Array;var l=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var f,p="function"==typeof Float32Array?Float32Array:void 0;f=function(){var r,e,t;if("function"!=typeof s)return!1;try{e=new s([1,3.14,-3.14,5e40]),t=e,r=(c&&t instanceof Float32Array||"[object Float32Array]"===u(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===l}catch(e){r=!1}return r}()?p:function(){throw new Error("not implemented")};var g=f,h="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var v,y="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var m=v,w=new g(1);new m(w.buffer)[0]=2139095040;var b=w[0],E=new g(1);new m(E.buffer)[0]=4286578688;var S=E[0];var _=Math.floor,T="function"==typeof Object.defineProperty?Object.defineProperty:null;var A=Object.defineProperty;function V(r){return"number"==typeof r}function j(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function x(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+j(i):j(i)+r,n&&(r="-"+r)),r}var F=String.prototype.toLowerCase,k=String.prototype.toUpperCase;function O(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!V(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=x(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=x(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===k.call(r.specifier)?k.call(t):F.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function I(r){return"string"==typeof r}var P=Math.abs,N=String.prototype.toLowerCase,R=String.prototype.toUpperCase,$=String.prototype.replace,U=/e\+(\d)$/,C=/e-(\d)$/,G=/^(\d+)$/,Z=/^(\d+)e/,M=/\.0$/,W=/\.0*e/,L=/(\..*[^0])0*e/;function X(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!V(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":P(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$.call(t,L,"$1e"),t=$.call(t,W,"e"),t=$.call(t,M,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$.call(t,U,"e+0$1"),t=$.call(t,C,"e-0$1"),r.alternate&&(t=$.call(t,G,"$1."),t=$.call(t,Z,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===R.call(r.specifier)?R.call(t):N.call(t)}function Y(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function z(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Y(n):Y(n)+r}var q=String.fromCharCode,B=isNaN,D=Array.isArray;function H(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function J(r){var e,t,n,i,a,o,u,c,l;if(!D(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(I(n=r[c]))o+=n;else{if(e=void 0!==n.precision,!(n=H(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,B(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,B(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=O(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!B(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=B(a)?String(n.arg):q(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=X(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=x(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=z(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var K=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Q(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function rr(r){var e,t,n,i;for(t=[],i=0,n=K.exec(r);n;)(e=r.slice(i,K.lastIndex-n[0].length)).length&&t.push(e),t.push(Q(n)),i=K.lastIndex,n=K.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function er(r){return"string"==typeof r}function tr(r){var e,t,n;if(!er(r))throw new TypeError(tr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=rr(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return J.apply(null,t)}var nr=Object.prototype,ir=nr.toString,ar=nr.__defineGetter__,or=nr.__defineSetter__,ur=nr.__lookupGetter__,cr=nr.__lookupSetter__;var lr=function(){try{return T({},"x",{}),!0}catch(r){return!1}}()?A:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===ir.call(r))throw new TypeError(tr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===ir.call(t))throw new TypeError(tr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(ur.call(r,e)||cr.call(r,e)?(n=r.__proto__,r.__proto__=nr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&ar&&ar.call(r,e,t.get),o&&or&&or.call(r,e,t.set),r};function sr(r,e,t){lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function fr(r){return"number"==typeof r}var pr=Number,gr=pr.prototype.toString;var hr=e();function dr(r){return"object"==typeof r&&(r instanceof pr||(hr?function(r){try{return gr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function vr(r){return fr(r)||dr(r)}sr(vr,"isPrimitive",fr),sr(vr,"isObject",dr);var yr=pr.NEGATIVE_INFINITY;function mr(r){return r<l&&r>yr&&_(e=r)===e;var e}function wr(r){return fr(r)&&mr(r)}function br(r){return dr(r)&&mr(r.valueOf())}function Er(r){return wr(r)||br(r)}function Sr(r){return wr(r)&&r>=0}function _r(r){return br(r)&&r.valueOf()>=0}function Tr(r){return Sr(r)||_r(r)}function Ar(r){return"string"==typeof r}sr(Er,"isPrimitive",wr),sr(Er,"isObject",br),sr(Tr,"isPrimitive",Sr),sr(Tr,"isObject",_r);var Vr=String.prototype.valueOf;var jr=e();function xr(r){return"object"==typeof r&&(r instanceof String||(jr?function(r){try{return Vr.call(r),!0}catch(r){return!1}}(r):"[object String]"===u(r)))}function Fr(r){return Ar(r)||xr(r)}sr(Fr,"isPrimitive",Ar),sr(Fr,"isObject",xr);var kr=void 0!==String.prototype.repeat;var Or=String.prototype.repeat;var Ir=kr?function(r,e){return Or.call(r,e)}:function(r,e){var t,n;if(0===r.length||0===e)return"";for(t="",n=e;1==(1&n)&&(t+=r),0!=(n>>>=1);)r+=r;return t},Pr=Math.ceil;function Nr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Pr(n),r+Ir(t,n))}function Rr(r,e,t){var n=(e-r.length)/t.length;return n<=0?r:(n=Pr(n),Ir(t,n)+r)}function $r(r,e){if(!Ar(r))throw new TypeError(tr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Sr(e))throw new TypeError(tr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));return Ir(r,e)}function Ur(r){for(var e,t="";r>0;)t=(e=r/2)===(r=_(e))?"0"+t:"1"+t;return t}function Cr(r){var e,t,n,i,a,o,u;if(t=r<0||1/r===S?"1":"0",r===b||r===S)return t+(i=$r("1",8))+(n=$r("0",23));if(r!=r)return t+(i=$r("1",8))+(n="1"+$r("0",22));if(0===r)return t+(i=$r("0",8))+(n=$r("0",23));if(o=(r=function(r){return Math.abs(r)}(r))-(a=_(r)),a=Ur(a),o=function(r){var e,t,n,i;if(e="",0===r)return e;for(i=149,n=0;n<149&&((t=2*r)>=1?(r=t-1,e+="1",149===i&&(i=n)):(r=t,e+="0"),!(1===t||n-i>24));n++);return e}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){e=u+1;break}i=-e}return n=a+o,i<0?(i<=-127&&(e=126),n=n.substring(e)):n=n.substring(1),i=function(r,e,t){var n;if(!Ar(r))throw new TypeError(tr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Sr(e))throw new TypeError(tr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Ar(n=t))throw new TypeError(tr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(tr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Rr(r,e,n)}(i=Ur(i+127),8,"0"),n=function(r,e,t){var n;if(!Ar(r))throw new TypeError(tr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Sr(e))throw new TypeError(tr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",e));if(arguments.length>2){if(!Ar(n=t))throw new TypeError(tr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(e>9007199254740991)throw new RangeError(tr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",e));return Nr(r,e,n)}(n,23,"0").substring(0,23),t+i+n}export{Cr as default};
//# sourceMappingURL=mod.js.map
