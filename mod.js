// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var t=r();var e=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;function i(r,t){return null!=r&&n.call(r,t)}var a,o="function"==typeof Symbol?Symbol:void 0,u="function"==typeof o?o.toStringTag:"";a=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,n,a;if(null==r)return e.call(r);n=r[u],t=i(r,u);try{r[u]=void 0}catch(t){return e.call(r)}return a=e.call(r),t?r[u]=n:delete r[u],a}:function(r){return e.call(r)};var c=a,l="function"==typeof Float32Array;var f=Number.POSITIVE_INFINITY,s="function"==typeof Float32Array?Float32Array:null;var p,g="function"==typeof Float32Array?Float32Array:void 0;p=function(){var r,t,e;if("function"!=typeof s)return!1;try{t=new s([1,3.14,-3.14,5e40]),e=t,r=(l&&e instanceof Float32Array||"[object Float32Array]"===c(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===f}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var v=p,y=r();var b=Object.prototype.toString;var d,m="function"==typeof Symbol?Symbol:void 0,h="function"==typeof m?m.toStringTag:"";d=y&&"symbol"==typeof Symbol.toStringTag?function(r){var t,e,n;if(null==r)return b.call(r);e=r[h],t=i(r,h);try{r[h]=void 0}catch(t){return b.call(r)}return n=b.call(r),t?r[h]=e:delete r[h],n}:function(r){return b.call(r)};var w=d,S="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null;var E,T="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var r,t,e;if("function"!=typeof j)return!1;try{t=new j(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(S&&e instanceof Uint32Array||"[object Uint32Array]"===w(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?T:function(){throw new Error("not implemented")};var O=E,_=new v(1);new O(_.buffer)[0]=2139095040;var V=_[0],x=new v(1);new O(x.buffer)[0]=4286578688;var A=x[0];var F=Math.floor,k="function"==typeof Object.defineProperty?Object.defineProperty:null;var I=Object.defineProperty;function P(r){return"number"==typeof r}function N(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function R(r,t,e){var n=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+N(i):N(i)+r,n&&(r="-"+r)),r}var $=String.prototype.toLowerCase,U=String.prototype.toUpperCase;function C(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!P(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=R(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=R(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===U.call(r.specifier)?U.call(e):$.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function G(r){return"string"==typeof r}var M=Math.abs,Z=String.prototype.toLowerCase,W=String.prototype.toUpperCase,L=String.prototype.replace,X=/e\+(\d)$/,Y=/e-(\d)$/,z=/^(\d+)$/,q=/^(\d+)e/,B=/\.0$/,D=/\.0*e/,H=/(\..*[^0])0*e/;function J(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!P(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":M(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=L.call(e,H,"$1e"),e=L.call(e,D,"e"),e=L.call(e,B,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=L.call(e,X,"e+0$1"),e=L.call(e,Y,"e-0$1"),r.alternate&&(e=L.call(e,z,"$1."),e=L.call(e,q,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===W.call(r.specifier)?W.call(e):Z.call(e)}function K(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function Q(r,t,e){var n=t-r.length;return n<0?r:r=e?r+K(n):K(n)+r}var rr=String.fromCharCode,tr=isNaN,er=Array.isArray;function nr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function ir(r){var t,e,n,i,a,o,u,c,l;if(!er(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,c=0;c<r.length;c++)if(G(n=r[c]))o+=n;else{if(t=void 0!==n.precision,!(n=nr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,tr(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,tr(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=C(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!tr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=tr(a)?String(n.arg):rr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=J(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=R(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Q(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o}var ar=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function or(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function ur(r){var t,e,n,i;for(e=[],i=0,n=ar.exec(r);n;)(t=r.slice(i,ar.lastIndex-n[0].length)).length&&e.push(t),e.push(or(n)),i=ar.lastIndex,n=ar.exec(r);return(t=r.slice(i)).length&&e.push(t),e}function cr(r){return"string"==typeof r}function lr(r){var t,e;if(!cr(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[ur(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return ir.apply(null,t)}var fr=Object.prototype,sr=fr.toString,pr=fr.__defineGetter__,gr=fr.__defineSetter__,vr=fr.__lookupGetter__,yr=fr.__lookupSetter__;var br=function(){try{return k({},"x",{}),!0}catch(r){return!1}}()?I:function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===sr.call(r))throw new TypeError(lr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===sr.call(e))throw new TypeError(lr("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(vr.call(r,t)||yr.call(r,t)?(n=r.__proto__,r.__proto__=fr,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&pr&&pr.call(r,t,e.get),o&&gr&&gr.call(r,t,e.set),r};function dr(r,t,e){br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function mr(r,t,e){br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function hr(r,t,e){br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function wr(r){return"number"==typeof r}var Sr=r();function jr(){return Sr&&"symbol"==typeof Symbol.toStringTag}var Er=Object.prototype.toString;var Tr,Or="function"==typeof Symbol?Symbol:void 0,_r="function"==typeof Or?Or.toStringTag:"";Tr=jr()?function(r){var t,e,n;if(null==r)return Er.call(r);e=r[_r],t=i(r,_r);try{r[_r]=void 0}catch(t){return Er.call(r)}return n=Er.call(r),t?r[_r]=e:delete r[_r],n}:function(r){return Er.call(r)};var Vr=Tr,xr=Number,Ar=xr.prototype.toString;var Fr=jr();function kr(r){return"object"==typeof r&&(r instanceof xr||(Fr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Vr(r)))}function Ir(r){return wr(r)||kr(r)}hr(Ir,"isPrimitive",wr),hr(Ir,"isObject",kr);var Pr=xr.NEGATIVE_INFINITY;function Nr(r){return r<f&&r>Pr&&F(t=r)===t;var t}function Rr(r){return wr(r)&&Nr(r)}function $r(r){return kr(r)&&Nr(r.valueOf())}function Ur(r){return Rr(r)||$r(r)}function Cr(r){return Rr(r)&&r>=0}function Gr(r){return $r(r)&&r.valueOf()>=0}function Mr(r){return Cr(r)||Gr(r)}function Zr(r){return"string"==typeof r}mr(Ur,"isPrimitive",Rr),mr(Ur,"isObject",$r),dr(Mr,"isPrimitive",Cr),dr(Mr,"isObject",Gr);var Wr=r();function Lr(){return Wr&&"symbol"==typeof Symbol.toStringTag}var Xr=Object.prototype.toString;var Yr,zr="function"==typeof Symbol?Symbol:void 0,qr="function"==typeof zr?zr.toStringTag:"";Yr=Lr()?function(r){var t,e,n;if(null==r)return Xr.call(r);e=r[qr],t=i(r,qr);try{r[qr]=void 0}catch(t){return Xr.call(r)}return n=Xr.call(r),t?r[qr]=e:delete r[qr],n}:function(r){return Xr.call(r)};var Br=Yr,Dr=String.prototype.valueOf;var Hr=Lr();function Jr(r){return"object"==typeof r&&(r instanceof String||(Hr?function(r){try{return Dr.call(r),!0}catch(r){return!1}}(r):"[object String]"===Br(r)))}function Kr(r){return Zr(r)||Jr(r)}dr(Kr,"isPrimitive",Zr),dr(Kr,"isObject",Jr);var Qr=void 0!==String.prototype.repeat;var rt=String.prototype.repeat;var tt=Qr?function(r,t){return rt.call(r,t)}:function(r,t){var e,n;if(0===r.length||0===t)return"";for(e="",n=t;1==(1&n)&&(e+=r),0!=(n>>>=1);)r+=r;return e},et=Math.ceil;function nt(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=et(n),r+tt(e,n))}function it(r,t,e){br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function at(r){return Rr(r)&&r>=0}function ot(r){return $r(r)&&r.valueOf()>=0}function ut(r){return at(r)||ot(r)}function ct(r){return"string"==typeof r}it(ut,"isPrimitive",at),it(ut,"isObject",ot);var lt=r();function ft(){return lt&&"symbol"==typeof Symbol.toStringTag}var st=Object.prototype.toString;var pt,gt="function"==typeof Symbol?Symbol:void 0,vt="function"==typeof gt?gt.toStringTag:"";pt=ft()?function(r){var t,e,n;if(null==r)return st.call(r);e=r[vt],t=i(r,vt);try{r[vt]=void 0}catch(t){return st.call(r)}return n=st.call(r),t?r[vt]=e:delete r[vt],n}:function(r){return st.call(r)};var yt=pt,bt=String.prototype.valueOf;var dt=ft();function mt(r){return"object"==typeof r&&(r instanceof String||(dt?function(r){try{return bt.call(r),!0}catch(r){return!1}}(r):"[object String]"===yt(r)))}function ht(r){return ct(r)||mt(r)}it(ht,"isPrimitive",ct),it(ht,"isObject",mt);var wt=Math.ceil;function St(r,t,e){var n=(t-r.length)/e.length;return n<=0?r:(n=wt(n),tt(e,n)+r)}function jt(r,t,e){br(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Et(r){return Rr(r)&&r>=0}function Tt(r){return $r(r)&&r.valueOf()>=0}function Ot(r){return Et(r)||Tt(r)}function _t(r){return"string"==typeof r}jt(Ot,"isPrimitive",Et),jt(Ot,"isObject",Tt);var Vt=r();function xt(){return Vt&&"symbol"==typeof Symbol.toStringTag}var At=Object.prototype.toString;var Ft,kt="function"==typeof Symbol?Symbol:void 0,It="function"==typeof kt?kt.toStringTag:"";Ft=xt()?function(r){var t,e,n;if(null==r)return At.call(r);e=r[It],t=i(r,It);try{r[It]=void 0}catch(t){return At.call(r)}return n=At.call(r),t?r[It]=e:delete r[It],n}:function(r){return At.call(r)};var Pt=Ft,Nt=String.prototype.valueOf;var Rt=xt();function $t(r){return"object"==typeof r&&(r instanceof String||(Rt?function(r){try{return Nt.call(r),!0}catch(r){return!1}}(r):"[object String]"===Pt(r)))}function Ut(r){return _t(r)||$t(r)}function Ct(r,t){if(!_t(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Et(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));return tt(r,t)}function Gt(r){for(var t,e="";r>0;)e=(t=r/2)===(r=F(t))?"0"+e:"1"+e;return e}jt(Ut,"isPrimitive",_t),jt(Ut,"isObject",$t);function Mt(r){var t,e,n,i,a,o,u;if(e=r<0||1/r===A?"1":"0",r===V||r===A)return e+(i=Ct("1",8))+(n=Ct("0",23));if(r!=r)return e+(i=Ct("1",8))+(n="1"+Ct("0",22));if(0===r)return e+(i=Ct("0",8))+(n=Ct("0",23));if(o=(r=function(r){return Math.abs(r)}(r))-(a=F(r)),a=Gt(a),o=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=149,n=0;n<149&&((e=2*r)>=1?(r=e-1,t+="1",149===i&&(i=n)):(r=e,t+="0"),!(1===e||n-i>24));n++);return t}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-127&&(t=126),n=n.substring(t)):n=n.substring(1),i=function(r,t,e){var n;if(!ct(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!at(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!ct(n=e))throw new TypeError(lr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else n=" ";if(t>9007199254740991)throw new RangeError(lr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return St(r,t,n)}(i=Gt(i+127),8,"0"),n=function(r,t,e){var n;if(!Zr(r))throw new TypeError(lr("invalid argument. First argument must be a string. Value: `%s`.",r));if(!Cr(t))throw new TypeError(lr("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(arguments.length>2){if(!Zr(n=e))throw new TypeError(lr("invalid argument. Third argument must be a string. Value: `%s`.",n));if(0===n.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else n=" ";if(t>9007199254740991)throw new RangeError(lr("invalid argument. Output string length exceeds maximum allowed string length. Value: `%u`.",t));return nt(r,t,n)}(n,23,"0").substring(0,23),e+i+n}export{Mt as default};
//# sourceMappingURL=mod.js.map
