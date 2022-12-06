"use strict";
function containsDuplicate(nums) {
  let result = false;
  let fast = 1,
    slow = 0;
  while (slow < nums.length && !result) {
    if (nums[slow] === nums[fast] && slow !== fast) {
      console.log(slow, fast, "找到");
      result = true;
    } else {
      fast++;
    }
    if (!result && fast === nums.length - 1) {
      slow++;
      fast = 0;
      console.log("一轮", slow, fast);
    }
  }
  return result;
}
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
