"use strict";
// 先进先出的顺序结构
class Queue {
    constructor() {
        this.arr = [];
        this.enqueue = function (element) {
            arr.push(element);
        };
        this.dequeue = function () {
            return arr.shift();
        };
        this.front = function () {
            return arr[0];
        };
    }
}
