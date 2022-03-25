/**
 * 要实现一个标准的单例模式并不复杂，无非是用一个变量来标志当前是否已经为某个类创建过对象，
 * 如果是，则在下一次获取该类的实例时，直接返回之前创建的对象。代码如下：
 */

class SingLeton {
    instance = null
    name = "wg"
    constructor() {
       
        if (this.instance) {
            console.log('已经幼稚了')
            return this.instance
        }
        this.instance = this
        console.log(this.instance,'xx')
    }
}

const test1 = new SingLeton()
const test2 = new SingLeton()
console.log(test1.name);
console.log(test1 === test2)