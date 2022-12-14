/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

你返回所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。
 */
// 看到去重可以想到排序
/**
 * 第一种 暴力解法，三个循环依次找啊找，但是得跳过每一层相同的两个元素
 *
 */
var testNum = [-1, 0, 1, 2, -1, -4];
function threeSum(nums) {
    var result = [];
    nums = nums.sort(function (a, b) { return a - b; }); // 从小到大先排序
    for (var first = 0; first < nums.length; first++) {
        var element = nums[first];
        if (element > 0)
            break;
        if (first > 0 && nums[first] === nums[first - 1])
            continue;
        //console.log(element, "第一层");
        for (var second = first + 1; second < nums.length; second++) {
            var element1 = nums[second];
            if (element1 + element > 0)
                break;
            if (second !== first + 1 && element1 === nums[second - 1])
                continue; // second !== first + 1 不与相邻的上下两个比较，其余的如果相同就不处理 跳到下一个，
            // console.log(element1, "第二层");
            for (var third = second + 1; third < nums.length; third++) {
                var element2 = nums[third];
                if (element + element1 + element2 > 0)
                    break;
                if (third != second + 1 && element2 === nums[third - 1])
                    continue; // 如果相同就不处理 跳到下一个
                console.log(element, element1, element2, "三层");
                if (element + element1 + element2 === 0) {
                    result.push([element, element1, element2]);
                }
            }
        }
    }
    return result;
}
threeSum(testNum);
var threeSumPoint = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    var result = [];
    for (var first = 0; first < nums.length; first++) {
        if (nums[first] > 0)
            return result;
        if (first > 0 && nums[first] === nums[first - 1])
            continue;
        var second = first + 1;
        var third = nums.length - 1;
        while (second < third) {
            var sum = nums[first] + nums[second] + nums[third];
            if (sum < 0) {
                second--;
            }
            else if (sum > 0) {
                third++;
            }
            else {
                result.push([nums[first], nums[second], nums[third]]);
                // 跳过相同的
                while (second < third && nums[second] === nums[second + 1])
                    second++;
                while (second < third && nums[third] === nums[third - 1])
                    third--;
                // then move ahead
                second++;
                third--;
            }
        }
    }
    console.log(result, "找到");
    return result;
};
threeSumPoint(nums);
/**
 *
 * @param nums
 * map 版本
 */
var threeSumMap = function (nums) {
    nums.sort(function (a, b) { return a - b; });
    var result = [];
    var map = {};
    for (var first = 0; first < nums.length; first++) {
        var element = nums[first];
        if (element > 0)
            break;
        if (first > 0 && nums[first] === nums[first - 1])
            continue;
        //console.log(element, "第一层");
        for (var second = first + 1; second < nums.length; second++) {
            var element1 = nums[second];
            if (element1 + element > 0)
                break;
            if (second !== first + 1 && element1 === nums[second - 1])
                continue; // second !== first + 1 不与相邻的上下两个比较，其余的如果相同就不处理 跳到下一个，
            console.log(element, second, "两种排列");
            map[0 - (element + element1)] = [element,element1];
            console.log(map);
        }
    }
    return result;
};
var testNums = [-1, 0, 1, 2, -1, -4];
threeSumMap(testNums);
