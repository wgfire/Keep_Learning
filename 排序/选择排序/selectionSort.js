"use strict";
// 选择排序
class selectSort {
    constructor(arr) {
        this.arr = arr;
    }
    swapChange(arr, indexA, indexB) {
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    }
    selectionSort(arr) {
        let len = arr.length - 1;
        for (let i = 0; i < len; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (i != minIndex) {
                this.swapChange(arr, i, minIndex);
            }
        }
        return arr;
    }
}
/**
 * 每一轮找出一个最小值的下标 然后跟 i 进行互换
 */
const sarr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 5];
let testsarr = new selectSort(sarr);
console.log(testsarr.selectionSort(sarr));
