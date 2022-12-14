/**
 * 经典提题目，
 *
/**
 * 给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 *
 * @param {*} nums
 * @param {*} target
 * @returns []
 * 判断map是否有差值，如果有就直接返回，没有就设置进去，只要有一次命中就行。
 */
var twoSumss = function (nums, target) {
  var result = [];
  var map = new Map();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const value = target - element;
    const diffIndex = map.get(value);
    if (diffIndex > -1) {
      result.push(index, diffIndex);
      console.log(result, "结果");
      break;
    } else {
      map.set(element, index);
    }
  }
  return result;
};

/**
 * 双指针解法。快慢指针 一个index0  一个index 为length 从小到大排序，两者和小于target 指针1++  否则 指针2
 */

const twoSumPonit = function (nums, target) {
  let i = 0;
  let j = nums.length - 1;
  const result = [];
  const numsWithIndex = nums
    .map((num, index) => {
      return {
        value: num,
        index,
      };
    })
    .sort((numOne, numTwo) => numOne.value - numTwo.value); // 排序之后会导致索引变化，返回不了原始数组的索引,所以用map来存放原始index

  console.log(numsWithIndex, "nums");
  while (i < j) {
    const first = numsWithIndex[i].value;
    const second = numsWithIndex[j].value;
    const sums = first + second;
    target = target;
    if (sums > target) {
      j--;
    } else if (sums < target) {
      i++;
    } else if (sums === target) {
      // 排序之后 index 对应的value是保存 了 但是返回的顺序需要这样处理一下。
      result.push(Math.min(numsWithIndex[i].index, numsWithIndex[j].index), Math.max(numsWithIndex[i].index, numsWithIndex[j].index));
      return result;
    }
  }
  return result;
};

var nums = [-1,-2,-3,-4,-5]
var target = -8;
twoSumPonit(nums, target);
