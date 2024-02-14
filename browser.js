// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=r(),e=Object.prototype.toString,n=Object.prototype.hasOwnProperty;function i(r,t){return null!=r&&n.call(r,t)}var o,a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";o=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,o;if(null==r)return e.call(r);n=r[u],t=i(r,u);try{r[u]=void 0}catch(t){return e.call(r)}return o=e.call(r),t?r[u]=n:delete r[u],o}:function(r){return e.call(r)};var c,l=o,f="function"==typeof Float32Array,s=Number.POSITIVE_INFINITY,p="function"==typeof Float32Array?Float32Array:null,g="function"==typeof Float32Array?Float32Array:void 0;c=function(){var r,t,e;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,5e40]),e=t,r=(f&&e instanceof Float32Array||"[object Float32Array]"===l(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===s}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var y,b=c,d=r(),v=Object.prototype.toString,m="function"==typeof Symbol?Symbol:void 0,h="function"==typeof m?m.toStringTag:"";y=d&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return v.call(r);e=r[h],t=i(r,h);try{r[h]=void 0}catch(t){return v.call(r)}return n=v.call(r),t?r[h]=e:delete r[h],n}:function(r){return v.call(r)};var w,S=y,T="function"==typeof Uint32Array,j="function"==typeof Uint32Array?Uint32Array:null,E="function"==typeof Uint32Array?Uint32Array:void 0;w=function(){var r,t,e;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(T&&e instanceof Uint32Array||"[object Uint32Array]"===S(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?E:function(){throw new Error("not implemented")};var O=w,_=new b(1);new O(_.buffer)[0]=2139095040;var x=_[0],V=new b(1);new O(V.buffer)[0]=4286578688;var A=V[0],F=Math.floor,k="function"==typeof Object.defineProperty?Object.defineProperty:null,I=Object.defineProperty;function P(r){return"number"==typeof r}function N(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function R(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+N(i):N(i)+r,n&&(r="-"+r)),r}var $=String.prototype.toLowerCase,U=String.prototype.toUpperCase;function C(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!P(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=R(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=R(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===U.call(r.specifier)?U.call(e):$.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function G(r){return"string"==typeof r}var M=Math.abs,Z=String.prototype.toLowerCase,W=String.prototype.toUpperCase,L=String.prototype.replace,X=/e\+(\d)$/,Y=/e-(\d)$/,z=/^(\d+)$/,B=/^(\d+)e/,q=/\.0$/,D=/\.0*e/,H=/(\..*[^0])0*e/;function J(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!P(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":M(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=L.call(e,H,"$1e"),e=L.call(e,D,"e"),e=L.call(e,q,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=L.call(e,X,"e+0$1"),e=L.call(e,Y,"e-0$1"),r.alternate&&(e=L.call(e,z,"$1."),e=L.call(e,B,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===W.call(r.specifier)?W.call(e):Z.call(e)}function K(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Q(r,t,e){var n=t-r.length;return n<0?r:r=e?r+K(n):K(n)+r}var rr=String.fromCharCode,tr=isNaN,er=Array.isArray;function nr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function ir(r){var t,e,n,i,o,a,u,c,l;if(!er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(G(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=nr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,tr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,tr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=C(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!tr(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tr(o)?String(n.arg):rr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=J(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=R(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Q(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var or=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function ar(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ur(r){var t,e,n,i;for(e=[],i=0,n=or.exec(r);n;)(t=r.slice(i,or.lastIndex-n[0].length)).length&&e.push(t),e.push(ar(n)),i=or.lastIndex,n=or.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function cr(r){return"string"==typeof r}function lr(r){var t,e;if(!cr(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[ur(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return ir.apply(null,t)}var fr=Object.prototype,sr=fr.toString,pr=fr.__defineGetter__,gr=fr.__defineSetter__,yr=fr.__lookupGetter__,br=fr.__lookupSetter__,dr=function(){try{return k({},"x",{}),!0}catch(r){return!1}}()?I:function(r,t,e){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError(lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===sr.call(e))throw new TypeError(lr("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(yr.call(r,t)||br.call(r,t)?(n=r.__proto__,r.__proto__=fr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),o="get"in e,a="set"in e,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&pr&&pr.call(r,t,e.get),a&&gr&&gr.call(r,t,e.set),r};function vr(r,t,e){dr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function mr(r,t,e){dr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function hr(r,t,e){dr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function wr(r){return"number"==typeof r}var Sr=r();function Tr(){return Sr&&"symbol"==typeof Symbol.toStringTag}var jr,Er=Object.prototype.toString,Or="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof Or?Or.toStringTag:"";jr=Tr()?function(r){var t,e,n;if(null==r)return Er.call(r);e=r[_r],t=i(r,_r);try{r[_r]=void 0}catch(t){return Er.call(r)}return n=Er.call(r),t?r[_r]=e:delete r[_r],n}:function(r){return Er.call(r)};var xr=jr,Vr=Number,Ar=Vr.prototype.toString,Fr=Tr();function kr(r){return"object"==typeof r&&(r instanceof Vr||(Fr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===xr(r)))}function Ir(r){return wr(r)||kr(r)}hr(Ir,"isPrimitive",wr),hr(Ir,"isObject",kr);var Pr=Vr.NEGATIVE_INFINITY;function Nr(r){return r<s&&r>Pr&&F(t=r)===t;var t}function Rr(r){return wr(r)&&Nr(r)}function $r(r){return kr(r)&&Nr(r.valueOf())}function Ur(r){return Rr(r)||$r(r)}function Cr(r){return Rr(r)&&r>=0}function Gr(r){return $r(r)&&r.valueOf()>=0}function Mr(r){return Cr(r)||Gr(r)}function Zr(r){return"string"==typeof r}mr(Ur,"isPrimitive",Rr),mr(Ur,"isObject",$r),vr(Mr,"isPrimitive",Cr),vr(Mr,"isObject",Gr);var Wr=r();function Lr(){return Wr&&"symbol"==typeof Symbol.toStringTag}var Xr,Yr=Object.prototype.toString,zr="function"==typeof Symbol?Symbol:void 0,Br="function"==typeof zr?zr.toStringTag:"";Xr=Lr()?function(r){var t,e,n;if(null==r)return Yr.call(r);e=r[Br],t=i(r,Br);try{r[Br]=void 0}catch(t){return Yr.call(r)}return n=Yr.call(r),t?r[Br]=e:delete r[Br],n}:function(r){return Yr.call(r)};var qr=Xr,Dr=String.prototype.valueOf,Hr=Lr();function Jr(r){return"object"==typeof r&&(r instanceof String||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===qr(r)))}function Kr(r){return Zr(r)||Jr(r)}vr(Kr,"isPrimitive",Zr),vr(Kr,"isObject",Jr);var Qr=9007199254740991,rt=void 0!==String.prototype.repeat,tt=String.prototype.repeat,et=rt?function(r,t){return tt.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},nt=Math.ceil;function it(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=nt(n),r+et(e,n))}function ot(r,t,e){dr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function at(r){return Rr(r)&&r>=0}function ut(r){return $r(r)&&r.valueOf()>=0}function ct(r){return at(r)||ut(r)}function lt(r){return"string"==typeof r}ot(ct,"isPrimitive",at),ot(ct,"isObject",ut);var ft=r();function st(){return ft&&"symbol"==typeof Symbol.toStringTag}var pt,gt=Object.prototype.toString,yt="function"==typeof Symbol?Symbol:void 0,bt="function"==typeof yt?yt.toStringTag:"";pt=st()?function(r){var t,e,n;if(null==r)return gt.call(r);e=r[bt],t=i(r,bt);try{r[bt]=void 0}catch(t){return gt.call(r)}return n=gt.call(r),t?r[bt]=e:delete r[bt],n}:function(r){return gt.call(r)};var dt=pt,vt=String.prototype.valueOf,mt=st();function ht(r){return"object"==typeof r&&(r instanceof String||(mt?function(r){try{return vt.call(r),!0}catch(r){return!1}}(r):"[object String]"===dt(r)))}function wt(r){return lt(r)||ht(r)}ot(wt,"isPrimitive",lt),ot(wt,"isObject",ht);var St=9007199254740991,Tt=Math.ceil;function jt(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=Tt(n),et(e,n)+r)}function Et(r,t,e){dr(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Ot(r){return Rr(r)&&r>=0}function _t(r){return $r(r)&&r.valueOf()>=0}function xt(r){return Ot(r)||_t(r)}function Vt(r){return"string"==typeof r}Et(xt,"isPrimitive",Ot),Et(xt,"isObject",_t);var At=r();function Ft(){return At&&"symbol"==typeof Symbol.toStringTag}var kt,It=Object.prototype.toString,Pt="function"==typeof Symbol?Symbol:void 0,Nt="function"==typeof Pt?Pt.toStringTag:"";kt=Ft()?function(r){var t,e,n;if(null==r)return It.call(r);e=r[Nt],t=i(r,Nt);try{r[Nt]=void 0}catch(t){return It.call(r)}return n=It.call(r),t?r[Nt]=e:delete r[Nt],n}:function(r){return It.call(r)};var Rt=kt,$t=String.prototype.valueOf,Ut=Ft();function Ct(r){return"object"==typeof r&&(r instanceof String||(Ut?function(r){try{return $t.call(r),!0}catch(r){return!1}}(r):"[object String]"===Rt(r)))}function Gt(r){return Vt(r)||Ct(r)}function Mt(r,t){if(!Vt(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Ot(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return et(r,t)}function Zt(r){for(var t,e="";r>0;)e=(t=r/2)===(r=F(t))?"0"+e:"1"+e;return e}return Et(Gt,"isPrimitive",Vt),Et(Gt,"isObject",Ct),function(r){var t,e,n,i,o,a,u;if(e=r<0||1/r===A?"1":"0",r===x||r===A)return e+(i=Mt("1",8))+(n=Mt("0",23));if(r!=r)return e+(i=Mt("1",8))+(n="1"+Mt("0",22));if(0===r)return e+(i=Mt("0",8))+(n=Mt("0",23));if(a=(r=function(r){return Math.abs(r)}(r))-(o=F(r)),o=Zt(o),a=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=149,n=0;n<149&&((e=2*r)>=1?(r=e-1,t+="1",149===i&&(i=n)):(r=e,t+="0"),!(1===e||n-i>24));n++);return t}(a),o)i=o.length-1;else{for(u=0;u<a.length;u++)if("1"===a[u]){t=u+1;break}i=-t}return n=o+a,i<0?(i<=-127&&(t=126),n=n.substring(t)):n=n.substring(1),i=function(r,t,e){var n;if(!lt(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!at(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!lt(n=e))throw new TypeError(lr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>St)throw new RangeError(lr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return jt(r,t,n)}(i=Zt(i+127),8,"0"),n=function(r,t,e){var n;if(!Zr(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Cr(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Zr(n=e))throw new TypeError(lr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(t>Qr)throw new RangeError(lr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return it(r,t,n)}(n,23,"0").substring(0,23),e+i+n}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).toBinaryStringf=t();
//# sourceMappingURL=browser.js.map
