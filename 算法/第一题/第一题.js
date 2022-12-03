"use strict";
let twoSums = function (nums, target) {
    let result = [];
    nums.forEach((el, index) => {
        let end = target - el;
        let endindex = nums.indexOf(end);
        if (endindex != -1 && result.indexOf(end) == -1 && result.indexOf(endindex) == -1) {
            result.push(index, endindex);
        }
    });
    return result;
};
let result = twoSums([2, 7, 11, 12], 9);
console.log('结果', result);
