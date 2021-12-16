// 数组类型

let arr: number[] = [1, 2, 3]
// 只允许 数字类型的数组元素
//arr.push('8')  也不允许添加非数字类型的元素

let anyArr: any[] = [1, "2"]



// 函数

// 函数声明（Function Declaration）
function sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式（Function Expression）
let mySum = function (x: number, y: number) {
    return x + y;
};

// 类型断言
function getLength(something: string | number): number {
    if ((<string>something).length) {
        return (<string>something).length;
    } else {
        return something.toString().length;
    }
}

//  先断定 something 为 string 类型 就可以使用原型里的方法


// 泛型 
