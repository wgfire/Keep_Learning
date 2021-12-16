// class  类 和继承 


class parentClass {
    name: string
    sex: string = "男"

    constructor(name: string) {
        this.name = name

    }
    saysex() {
        console.log('我的性别 是' + this.sex)
    }
}

class childrenClass extends parentClass {
    weight: number

    constructor(weight: number, name: string) {

        super(name)
        this.weight = weight

    }
    sayweight() {
        console.log('我的体重 是' + this.weight)
    }
    sayname() {
        console.log('我的名字 是' + this.name)
    }
}
let parentObject = new parentClass('wg')
parentObject.saysex()

let childrenObject = new childrenClass(63, 'wg')
childrenObject.sayweight()
childrenObject.sayname()