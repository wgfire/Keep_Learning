// 泛型


function renumber (arg:number):number {
    return arg
}

function reArray <t>(arg:Array<t>):Array<t>{
    return arg

}
function indefit<t>(arg: t): t {
    console.log(arg)
    return arg

}
// indefit<String>('X')
// indefit<Array<any>>([1, '2'])
// reArray<string>(["1"])


function moreType <t,u> (arg:[t,u]):[u,t] {
    console.log(arg)
    return [arg[1],arg[0]]

}
moreType([1,'123'])


// 泛型约束，因为没有定义其的类型，所以调用一些原型上的方法，会报错

function noType <T> (arg:T):T {
   // console.log(arg.length)
    return arg
}

// 泛型接口


// 泛型参数的默认类型
function createArray<T = string>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

//createArray(3,3)






