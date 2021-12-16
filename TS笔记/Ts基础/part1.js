//前五种原始数据类型在 TypeScript 中的应用。 
//1.布尔值是最基础的数据类型，在 TypeScript 中，使用 boolean 定义布尔值类型：
var isboolean = true;
//注意，使用构造函数 Boolean 创造的对象不是布尔值：而是一个布尔对象
//let createdByNewBoolean: boolean = new Boolean(1);
//2. 数字类型 number
var isnumber = 2;
//let notANumber: number = NaN;
//let infinityNumber: number = Infinity;
// 编译后：
//var notANumber = NaN;
//var infinityNumber = Infinity;
//3 字符类型 string
var istring = "wg";
// 模板字符串
var age = 22;
var temstr = istring + "\u7684\u5E74\u9F84\u662F--" + age;
// 4 JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
function funvoid() {
    console.log(v);
}
// 5 在 TypeScript 中，可以使用 null 和 undefined 来定义这两个原始数据类型
var u = undefined;
var n = null;
var o;
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 其他 类型的变量
// 这样不会报错
var num = u;
var nustr = n;
// void 不行  
var v = o;
console.log(v,o)
// Type 'void' is not assignable to type 'string'.
// 总结
// 在以前JS 中 比如你定义了一个 a = "ss"  的字符变量  然后你可以改成 a = 2  typestript 是不行了 两个不同类型的变量不能赋值/
