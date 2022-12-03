"use strict";
/*
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
说明:

所有输入只包含小写字母 a-z 。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-common-prefix
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。*/
const longestCommonPrefix = function (str) {
    if (str === null || str.length === 0)
        return "";
    return mergerStrprefix(str);
};
const mergerStrprefix = function (arr) {
    let length = arr.length;
    if (length === 1) {
        return arr[0];
    }
    let mid = Math.floor(length / 2), left = arr.slice(0, mid), right = arr.slice(mid, length);
    return lCPrefixTwo(mergerStrprefix(left), mergerStrprefix(right));
};
const lCPrefixTwo = function (str, strs) {
    var j = 0;
    for (; j < str.length && j < strs.length; j++) {
        if (str.charAt(j) !== strs.charAt(j)) {
            break;
        }
    }
    return str.substring(0, j);
};
