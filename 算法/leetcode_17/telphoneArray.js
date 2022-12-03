"use strict";
let map = new Map();
map.set('2', 'abc');
map.set('3', 'def');
map.set('4', 'ghi');
map.set('5', 'jkl');
map.set('6', 'mno');
map.set('7', 'pqrs');
map.set('8', 'tuv');
map.set('9', 'wxyz');
let getCount = function name(params) {
    let paramArr = params.split('');
    let countArr = [[]]; // 二维数组
    paramArr.forEach(el => {
        let items = map.get(el).split('');
        countArr.push(items);
    });
    return countArr;
};
function mix(left, right) {
    let result = [];
    for (let i = 0; i < left.length; i++) {
        for (let j = 0; j < right.length; j++) {
            let str = left[i] + right[j];
            result.push(str);
        }
    }
    return result;
}
function telphobeMix(params) {
    let countArr = getCount(params);
    console.log('count', countArr);
    let row = countArr.length;
    let result = mix(countArr[0], countArr[1]);
    for (let i = 2; i < row; i++) {
        result = mix(result, params[i]);
    }
    return result;
}
console.log('tag', telphobeMix('23'));
console.log('mix', mix(['a', 'b', 'c'], ['d', 'e', 'f']));
