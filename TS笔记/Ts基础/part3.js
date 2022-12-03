"use strict";
// 接口 
//TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。
let tom = {
    name: "XX",
    age: 21,
    // sex:"男", 报错
};
console.log(tom);
let jek = {
    name: "jek",
    age: 21
    //sex 可以有可以无  但是也并不能添加没有在wgg 中定义的属性 比如 weight
};
let ltt = {
    name: "刘滔",
    age: 22,
    height: '100',
};
let lss = {
    age: 15
};
let objt = {
    name: "xx",
    age: 18
};
