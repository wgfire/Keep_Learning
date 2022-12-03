"use strict";
function mergeSort(arr) {
    const len = arr.length;
    if (len < 2) {
        return arr;
    }
    const mid = Math.floor(len / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    const result = [];
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    console.log('left', left);
    console.log('right', right);
    console.log('tag', result);
    return result.concat(left, right);
}
// test
const mergearr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(mergeSort(mergearr));
