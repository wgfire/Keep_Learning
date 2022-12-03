"use strict";
// class  类 和继承 
class parentClass {
    constructor(name) {
        this.sex = "男";
        this.name = name;
    }
    saysex() {
        console.log('我的性别 是' + this.sex);
    }
}
class childrenClass extends parentClass {
    constructor(weight, name) {
        super(name);
        this.weight = weight;
    }
    sayweight() {
        console.log('我的体重 是' + this.weight);
    }
    sayname() {
        console.log('我的名字 是' + this.name);
    }
}
let parentObject = new parentClass('wg');
parentObject.saysex();
let childrenObject = new childrenClass(63, 'wg');
childrenObject.sayweight();
childrenObject.sayname();
