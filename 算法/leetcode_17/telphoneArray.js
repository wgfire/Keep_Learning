/**
 * 
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
说明:
尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 */
var map = new Map();
map.set('2', 'abc');
map.set('3', 'def');
map.set('4', 'ghi');
map.set('5', 'jkl');
map.set('6', 'mno');
map.set('7', 'pqrs');
map.set('8', 'tuv');
map.set('9', 'wxyz');
var getCount = function name(params) {
    var paramArr = params.split('');
    var countArr = []; // 二维数组
    paramArr.forEach(function (el) {
        var items = map.get(el).split('');
        countArr.push(items);
    });
    return countArr;
};

function mix(left, right) {
    var result = [];
    for (var i = 0; i < left.length; i++) {
        for (var j = 0; j < right.length; j++) {
            var str = left[i] + right[j];
            result.push(str);
        }
    }
    return result;
}

function telphobeMix(digits) {
    if (!(/[2-9]/.test(digits))) return []
    var countArr = getCount(digits);
    console.log('count', countArr);
    var row = countArr.length;


    var result = mix(countArr[0], countArr[1]);
    for (var i = 2; i < row; i++) {
        result = mix(result, countArr[i]);
    }
    return result;
}
console.log('tag', telphobeMix('2'));