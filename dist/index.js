"use strict";var e=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(b){throw (r=0, b)}};};var t=e(function(y,n){
var a=require('@stdlib/assert-is-number/dist').isPrimitive;function q(i){return a(i)&&i<=0}n.exports=q
});var s=e(function(R,o){
var N=require('@stdlib/assert-is-number/dist').isObject;function P(i){return N(i)&&i.valueOf()<=0}o.exports=P
});var c=e(function(g,v){
var O=t(),f=s();function j(i){return O(i)||f(i)}v.exports=j
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),p=t(),x=s();m(u,"isPrimitive",p);m(u,"isObject",x);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
