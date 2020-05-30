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
function regTest(params) {
  var reg = /[a-z]/g;
  return reg.test(params);
}

let str = ["flower", "foow", "fooght"];
var longestCommonPrefix = function(strs) {
  if (strs === null || strs.length === 0) return "";
  let prevs = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < prevs.length && j < strs[i].length; j++) {
      if (prevs.charAt(j) !== strs[i].charAt(j)) break;
    }
    prevs = prevs.substring(0, j);
    if (prevs === "") return "";
  }
  return prevs;
};

console.log("结果", longestCommonPrefix(str));


/**
 * var longestCommonPrefix = function(strs) {
    if (strs === null || strs.length === 0) return "";
    return lCPrefixRec(strs)
};

// 若分裂后的两个数组长度不为 1，则继续分裂
// 直到分裂后的数组长度都为 1，
// 然后比较获取最长公共前缀
function lCPrefixRec(arr) {
  let length = arr.length
  if(length === 1) {
    return arr[0]
  }
  let mid = Math.floor(length / 2),
      left = arr.slice(0, mid),
      right = arr.slice(mid, length)
  return lCPrefixTwo(lCPrefixRec(left), lCPrefixRec(right))
}

// 求 str1 与 str2 的最长公共前缀
function lCPrefixTwo(str1, str2) {
    let j = 0
    for(; j < str1.length && j < str2.length; j++) {
        if(str1.charAt(j) !== str2.charAt(j)) {
            break
        }
    }
    return str1.substring(0, j)
}

 */