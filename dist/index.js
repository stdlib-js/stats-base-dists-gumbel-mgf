"use strict";var a=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=a(function(O,t){
var u=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-gamma/dist'),N=require('@stdlib/math-base-special-exp/dist');function m(e,r,i){return u(e)||u(r)||u(i)||i<=0||e>=1/i?NaN:v(1-i*e)*N(r*e)}t.exports=m
});var o=a(function(R,f){
var p=require('@stdlib/utils-constant-function/dist'),c=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-gamma/dist'),g=require('@stdlib/math-base-special-exp/dist');function y(e,r){if(c(e)||c(r)||r<=0)return p(NaN);return i;function i(n){return n>=1/r?NaN:x(1-r*n)*g(e*n)}}f.exports=y
});var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=s(),l=o();d(q,"factory",l);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
