
// 先进先出的顺序结构

class Queue {
    arr: Array<number> = []
    constructor() {

    }
    enqueue = function (element: number) {
        arr.push(element);
    };

    dequeue = function () {
        return arr.shift();
    };
    front = function () {
        return arr[0];
    };
}