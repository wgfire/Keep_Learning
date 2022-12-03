"use strict";
/**
 *  {number} x
 *  {number}
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 */
var reverse = function (x) {
    let result = 0;
    let arg;
    let flag;
    flag = x > 0 ? false : true;
    arg = x.toString();
    // 转换为string类型 -》分割成数组-》数组反转方法-》转化为字符-》变成整数
    result = parseInt(arg.split('').reverse().join(''));
    result = flag ? -result : result;
    return (result < -2147483647 || result > 2147483647) ? 0 : result;
};
let arg = reverse(-123);
console.log(arg);
