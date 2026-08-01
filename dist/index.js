"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var c=s(function(O,t){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),N=require('@stdlib/math-base-special-exp/dist');function m(e,r,i){return u(e)||u(r)||u(i)||i<=0||e>=1/i?NaN:v(1-i*e)*N(r*e)}t.exports=m
});var o=s(function(R,f){
var p=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-gamma/dist'),g=require('@stdlib/math-base-special-exp/dist');function y(e,r){if(a(e)||a(r)||r<=0)return p(NaN);return i;function i(n){return a(n)||n>=1/r?NaN:x(1-r*n)*g(e*n)}}f.exports=y
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),l=o();d(q,"factory",l);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
