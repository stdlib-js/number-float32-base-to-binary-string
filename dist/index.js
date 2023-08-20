"use strict";var l=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=l(function(j,N){
var T=require('@stdlib/math-base-special-floor/dist');function d(r){for(var e="",t;r>0;)t=r/2,r=T(t),t===r?e="0"+e:e="1"+e;return e}N.exports=d
});var c=l(function(w,b){
var q=149,A=24;function M(r){var e,t,i,a;if(e="",r===0)return e;for(a=q,i=0;i<q&&(t=r*2,t>=1?(r=t-1,e+="1",a===q&&(a=i)):(r=t,e+="0"),!(t===1||i-a>A));i++);return e}b.exports=M
});var B=l(function(C,_){
var h=require('@stdlib/constants-float32-pinf/dist'),g=require('@stdlib/constants-float32-ninf/dist'),I=require('@stdlib/constants-float32-exponent-bias/dist'),m=require('@stdlib/math-base-special-abs/dist'),y=require('@stdlib/math-base-special-floor/dist'),E=require('@stdlib/string-right-pad/dist'),F=require('@stdlib/string-left-pad/dist'),s=require('@stdlib/string-repeat/dist'),S=p(),X=c(),f=23,o=8;function k(r){var e,t,i,a,u,v,n;if(r<0||1/r===g?t="1":t="0",r===h||r===g)return a=s("1",o),i=s("0",f),t+a+i;if(r!==r)return a=s("1",o),i="1"+s("0",f-1),t+a+i;if(r===0)return a=s("0",o),i=s("0",f),t+a+i;if(r=m(r),u=y(r),v=r-u,u=S(u),v=X(v),u)a=u.length-1;else{for(n=0;n<v.length;n++)if(v[n]==="1"){e=n+1;break}a=-e}return i=u+v,a<0?(a<=-I&&(e=I-1),i=i.substring(e)):i=i.substring(1),a=S(a+I),a=F(a,o,"0"),i=E(i,f,"0").substring(0,f),t+a+i}_.exports=k
});var P=B();module.exports=P;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
