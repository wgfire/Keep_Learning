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

// 题法1 用map 来解决

interface twoSum {
  (nums: number[], target: number): number[];
}

const twoSums: twoSum = function (nums: number[], target: number): number[] {
  const result: number[] = [];
  const map = new Map();
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

const nums = [2, 7, 11, 15],
  target = 9;

twoSums(nums, target);

/**
 * 双指针版本
 */
const twoSumPonit = function (nums:number[], target:number) {
  let i = 0;
  let j = nums.length - 1;
  const result:number[] = [];
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