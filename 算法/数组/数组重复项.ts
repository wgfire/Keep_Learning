function containsDuplicate(nums: number[]): boolean {
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

/**
 * 暴力法会超时，先排序降低遍历次数，只要比较 相邻的即可
 */

function containsDuplicate2(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }
  return false;
}

/**利用空间换取时间，新建一个map */

function containsDuplicate3(nums: number[]): boolean {
  const set = new Set();
  for (const x of nums) {
    if (set.has(x)) {
      return true;
    }
    set.add(x);
  }
  return false;
}
