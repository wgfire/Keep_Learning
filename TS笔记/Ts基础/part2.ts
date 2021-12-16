// 在以前JS 中 比如你定义了一个 a = "ss"  的字符变量  然后你可以改成 a = 2  typestript 是不行了 两个不同类型的变量不能赋值/

//但是 如果是 任意类型的话 就和原来JS 没区别

let anys :any
anys = "xxx"
anys = 2

console.log(anys) // 2

//变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：



// 2.TS的类型推导，是在申明变量 而且赋值了 这个时候在改值的类型 就不行了

let anyss = "2"
//anyss = 2  报错 


//3.联合类型 | 

let myFavoriteNumber: string | number;

myFavoriteNumber = 'seven'; // 当赋了正确的值的时候  myFavoriteNumber.toUpperCase  也能访问这个类型里的原型方法 
//myFavoriteNumber = 7; 
// 这样修改是可以的 



//4. 类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}

//5. 字符串常量
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something  Element 为dom 节点类型 document.getElementById('hello')
}