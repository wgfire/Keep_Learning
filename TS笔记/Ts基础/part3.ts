// 接口 
//TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。


interface wg {
    name: String,
    age: Number
}

let tom: wg = {
    name: "XX",
    age: 21,
    // sex:"男", 报错
}

console.log(tom)

// tom中的属性不能比wg 中的属性 多或者少

// 可选属性

interface wgg {
    name: String,
    age: Number,
    sex?: String
}
let jek: wgg = {
    name: "jek",
    age: 21
    //sex 可以有可以无  但是也并不能添加没有在wgg 中定义的属性 比如 weight
}


// 任意属性， // 比如  我不知道是定义weight 还是 height

interface lt {
    name: string,
    age: number,
    [propName: string]: any;
}

let ltt: lt = {
    name: "刘滔",
    age:22,
    height: '100',
   
}
// 我们定义 了任意属性 是什么类型 要其他属性类型保持一致 才不会报错，否则就用 any 类型

//readonly 只读属性 第一次初始化不会报错，后面赋值会报错

interface ls {
    readonly age:number;
}

let lss :ls ={
    age:15
}

//lss.age =20  只允许只读

// 泛型接口
interface objT<t,y>{
    name: t,
    age: y,
    [propName: string]: any
}

let objt:objT<string,number>={
    name:"xx",
    age:18
}