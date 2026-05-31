"use strict";var e=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var t=e(function(d,n){
var b=require('@stdlib/assert-is-number/dist').isPrimitive;function a(i){return b(i)&&i<=0}n.exports=a
});var s=e(function(y,o){
var q=require('@stdlib/assert-is-number/dist').isObject;function N(i){return q(i)&&i.valueOf()<=0}o.exports=N
});var c=e(function(R,v){
var P=t(),O=s();function f(i){return P(i)||O(i)}v.exports=f
});var m=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),u=c(),j=t(),p=s();m(u,"isPrimitive",j);m(u,"isObject",p);module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
