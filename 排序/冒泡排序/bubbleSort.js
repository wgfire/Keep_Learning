var arrObj = /** @class */ (function () {
    function arrObj(arr) {
        this.arr = arr;
    }
    arrObj.prototype.swapChange = function (arr, indexA, indexB) {
        var _a;
        _a = [arr[indexB], arr[indexA]], arr[indexA] = _a[0], arr[indexB] = _a[1];
    };
    arrObj.prototype.bubbleSort = function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            for (var j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swapChange(arr, j, j + 1);
                }
            }
        }
        return arr;
    };
    arrObj.prototype.bubbleSortPos = function (arr) {
        var i = arr.length - 1; //2 
        while (i > 0) {
            var pos = 0;
            for (var j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    pos = j; // 0-》 每一次结尾会将最大值 放在末尾   所以 pos 后面的值可以不用管了，只要在【0-pos]直接的再次排序
                    this.swapChange(arr, j, j + 1);
                }
                console.log(arr, i, j);
            }
            i = pos;
        }
        return arr;
    };
    arrObj.prototype.bubbleSortDouble = function (arr) {   //传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值, 我们可以 在每趟排序中进行正向和反向两遍冒泡 ， 一次可以得到两个最终值（最大和最小） , 从而使外排序趟数几乎减少了一半。
        var start = 0;
        var end = arr.length - 1;
        while (start < end) {
            for (var i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    this.swapChange(arr, i, i + 1);
                }
            }
            end -= 1;
            for (var i = end; i > start; i--) {
                if (arr[i - 1] > arr[i]) {
                    this.swapChange(arr, i - 1, i);
                }
            }
            start += 1;
            console.log(arr)
        }
       
        return arr;
    };
    return arrObj;
}());
// test
var testarr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24,5];
var testobj = new arrObj(testarr);
console.log(testobj.bubbleSortDouble(testarr));
