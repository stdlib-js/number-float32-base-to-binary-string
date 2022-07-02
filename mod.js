// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},e=Object.prototype.toString,n=e;var i=function(r){return n.call(r)},a=Object.prototype.hasOwnProperty;var o=function(r,t){return null!=r&&a.call(r,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",l=o,f=u,c=e;var v=function(r){var t,e,n;if(null==r)return c.call(r);e=r[f],t=l(r,f);try{r[f]=void 0}catch(t){return c.call(r)}return n=c.call(r),t?r[f]=e:delete r[f],n},g=i,m=v,s=t()?m:g,y=s,p="function"==typeof Float32Array;var b=function(r){return p&&r instanceof Float32Array||"[object Float32Array]"===y(r)},h=Number.POSITIVE_INFINITY,w="function"==typeof Float32Array?Float32Array:null,d=b,_=h,j=w;var E="function"==typeof Float32Array?Float32Array:void 0,O=function(){throw new Error("not implemented")},P=function(){var r,t;if("function"!=typeof j)return!1;try{t=new j([1,3.14,-3.14,5e40]),r=d(t)&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===_}catch(t){r=!1}return r}()?E:O,S=s,T="function"==typeof Uint32Array;var A="function"==typeof Uint32Array?Uint32Array:null,F=function(r){return T&&r instanceof Uint32Array||"[object Uint32Array]"===S(r)},V=A;var I="function"==typeof Uint32Array?Uint32Array:void 0,x=function(){throw new Error("not implemented")},N=function(){var r,t;if("function"!=typeof V)return!1;try{t=new V(t=[1,3.14,-3.14,4294967296,4294967297]),r=F(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:x,U=N,R=new P(1);new U(R.buffer)[0]=2139095040;var k=R[0],G=N,M=new P(1);new G(M.buffer)[0]=4286578688;var Y=M[0];var C=function(r){return Math.abs(r)},q=Math.floor,z="function"==typeof Object.defineProperty?Object.defineProperty:null;var B=function(){try{return z({},"x",{}),!0}catch(r){return!1}},D=Object.defineProperty,H=Object.prototype,J=H.toString,K=H.__defineGetter__,L=H.__defineSetter__,Q=H.__lookupGetter__,W=H.__lookupSetter__;var X=D,Z=function(r,t,e){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===J.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===J.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(Q.call(r,t)||W.call(r,t)?(n=r.__proto__,r.__proto__=H,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&K&&K.call(r,t,e.get),o&&L&&L.call(r,t,e.set),r},$=B()?X:Z;var rr=function(r,t,e){$(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})};var tr=function(r){return"number"==typeof r},er=Number,nr=er.prototype.toString;var ir=s,ar=er,or=function(r){try{return nr.call(r),!0}catch(r){return!1}},ur=t();var lr=function(r){return"object"==typeof r&&(r instanceof ar||(ur?or(r):"[object Number]"===ir(r)))},fr=tr,cr=lr;var vr=rr,gr=function(r){return fr(r)||cr(r)},mr=lr;vr(gr,"isPrimitive",tr),vr(gr,"isObject",mr);var sr=gr,yr=er.NEGATIVE_INFINITY,pr=q;var br=h,hr=yr,wr=function(r){return pr(r)===r};var dr=function(r){return r<br&&r>hr&&wr(r)},_r=sr.isPrimitive,jr=dr;var Er=function(r){return _r(r)&&jr(r)},Or=sr.isObject,Pr=dr;var Sr=function(r){return Or(r)&&Pr(r.valueOf())},Tr=Er,Ar=Sr;var Fr=rr,Vr=function(r){return Tr(r)||Ar(r)},Ir=Sr;Fr(Vr,"isPrimitive",Er),Fr(Vr,"isObject",Ir);var xr=Vr.isPrimitive;var Nr=function(r){return xr(r)&&r>=0},Ur=Vr.isObject;var Rr=function(r){return Ur(r)&&r.valueOf()>=0},kr=Nr,Gr=Rr;var Mr=rr,Yr=function(r){return kr(r)||Gr(r)},Cr=Rr;Mr(Yr,"isPrimitive",Nr),Mr(Yr,"isObject",Cr);var qr=Yr;var zr=function(r){return"string"==typeof r},Br=String.prototype.valueOf;var Dr=s,Hr=function(r){try{return Br.call(r),!0}catch(r){return!1}},Jr=t();var Kr=function(r){return"object"==typeof r&&(r instanceof String||(Jr?Hr(r):"[object String]"===Dr(r)))},Lr=zr,Qr=Kr;var Wr=rr,Xr=function(r){return Lr(r)||Qr(r)},Zr=Kr;Wr(Xr,"isPrimitive",zr),Wr(Xr,"isObject",Zr);var $r=Xr,rt=qr.isPrimitive,tt=$r.isPrimitive;var et=function(r,t){var e,n;if(!tt(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!rt(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(0===r.length||0===t)return"";if(r.length*t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(e="",n=t;1==(1&n)&&(e+=r),0!==(n>>>=1);)r+=r;return e},nt=Math.ceil,it=qr.isPrimitive,at=$r.isPrimitive,ot=et,ut=nt;var lt=function(r,t,e){var n,i;if(!at(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!it(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!at(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Pad string must not be an empty string.")}else i=" ";if(t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=ut(n),r+ot(i,n))},ft=qr.isPrimitive,ct=$r.isPrimitive,vt=et,gt=nt;var mt=function(r,t,e){var n,i;if(!ct(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ft(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(arguments.length>2){if(!ct(i=e))throw new TypeError("invalid argument. Third argument must be a string. Value: `"+i+"`.");if(0===i.length)throw new RangeError("invalid argument. Third argument must not be an empty string.")}else i=" ";if(t>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");return(n=(t-r.length)/i.length)<=0?r:(n=gt(n),vt(i,n)+r)};function st(r){for(var t,e="";r>0;)e=(t=r/2)===(r=q(t))?"0"+e:"1"+e;return e}function yt(r){var t,e,n,i,a,o,u;if(e=r<0||1/r===Y?"1":"0",r===k||r===Y)return e+(i=et("1",8))+(n=et("0",23));if(r!=r)return e+(i=et("1",8))+(n="1"+et("0",22));if(0===r)return e+(i=et("0",8))+(n=et("0",23));if(o=(r=C(r))-(a=q(r)),a=st(a),o=function(r){var t,e,n,i;if(t="",0===r)return t;for(i=149,n=0;n<149&&((e=2*r)>=1?(r=e-1,t+="1",149===i&&(i=n)):(r=e,t+="0"),!(1===e||n-i>24));n++);return t}(o),a)i=a.length-1;else{for(u=0;u<o.length;u++)if("1"===o[u]){t=u+1;break}i=-t}return n=a+o,i<0?(i<=-127&&(t=126),n=n.substring(t)):n=n.substring(1),i=st(i+127),e+(i=mt(i,8,"0"))+(n=lt(n,23,"0").substring(0,23))}export{yt as default};
//# sourceMappingURL=mod.js.map
