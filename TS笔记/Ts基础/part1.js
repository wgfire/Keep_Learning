"use strict";
//前五种原始数据类型在 TypeScript 中的应用。 
//1.布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
let isboolean = true;
//注意，使用构造函数 Boolean 创造的对象不是布尔值：而是一个布尔对象
//let createdByNewBoolean: boolean = new Boolean(1);
//2. 数字类型 number
let isnumber = 2;
//let notANumber: number = NaN;
//let infinityNumber: number = Infinity;
// 编译后：
//var notANumber = NaN;
//var infinityNumber = Infinity;
//3 字符类型 string
let istring = "wg";
// 模板字符串
let age = 22;
let temstr = `${istring}的年龄是--${age}`;
// 4 JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function funvoid() {
    console.log(age);
}
// 5 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
let u;
let n;
let o;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 其他 类型的变量
// 这样不会报错
//et num:  = u;
//let nustr = n;
//2019-12-21 上面两个表达式会报错了//
// void 不行  
//let v: string = o
// Type 'void' is not assignable to type 'string'.
// 总结
