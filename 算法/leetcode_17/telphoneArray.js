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