"use strict";
/**
 *
 * @param nums 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 */
/**
 * 双指针，一个快指针 一个慢指针，快的每次遍历 查看 index和 index+1是否相等，不相等说明两个元素不一样，此时吧快指针的值赋值给慢指针
 */
function removeDuplicates(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let slow = 1;
  nums.forEach((item, index) => {
    index = index + 1;
    if (index < nums.length) {
      item = nums[index];
      console.log(index, "index", item, "item");
      if (item !== nums[index - 1]) {
        nums[slow] = nums[index]; // 避免超出 index index-1
        slow++;
      }
    }
  });
  console.log(nums);
  return slow;
}
const test = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const lengths = removeDuplicates(test);
console.log(lengths);
