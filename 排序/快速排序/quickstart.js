"use strict";
function quickSort2(arr) {
    const pivot = arr.shift();
    const left = [];
    const right = [];
    if (arr.length < 2) {
        return arr;
    }
    arr.forEach((element) => {
        element < pivot ? left.push(element) : right.push(element);
    });
    return quickSort2(left).concat([pivot], quickSort2(right));
}
