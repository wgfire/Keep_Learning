var twoSums = function (nums, target) {
    var result = [];
    for (let i = 0; i < nums.length; i++) {
        var end = target - nums[i];
        var endindex = nums.indexOf(end, i + 1);
        if (endindex != -1 && result.length === 0) {
            result.push(i, endindex);
        }
    }
    console.log('结果', result);


    return result;
};
var result = twoSums([3, 2, 4], 6);