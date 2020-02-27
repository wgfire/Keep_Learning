/**
 * 基于栈结构的特点，即栈是一种只能从表的一端存取数据且遵循 "先进后出" 原则的线性存储结构。
 * 在实际应用中，通常只会对栈执行以下两种操作：
   向栈中添加元素，此过程被称为"进栈"（入栈或压栈）；
   从栈中提取出指定元素，此过程被称为"出栈"（或弹栈）；
 */
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (prop) {
        this.arr.unshift(prop);
        return this.arr;
    };
    Stack.prototype.shift = function () {
        var deleteProp = this.arr.shift();
        return deleteProp;
    };
    Stack.prototype.peek = function () {
        return this.arr[0]; // 返回栈顶元素
    };
    Stack.prototype.getLenght = function () {
        var length = this.arr.length;
        return length;
    };
    return Stack;
}());
var stack = new Stack();
//添加元素
stack.push(1);
stack.push(3);
stack.shift(); // 移除栈顶元素
console.log(stack.peek());
//输出栈顶元素3
console.log(stack.getLenght());
//2
