// 选择排序
var selectSort = /** @class */ (function () {
    function selectSort(arr) {
        this.arr = arr;
    }
    selectSort.prototype.swapChange = function (arr, indexA, indexB) {
        var _a;
        _a = [arr[indexB], arr[indexA]], arr[indexA] = _a[0], arr[indexB] = _a[1];
    };
    selectSort.prototype.selectionSort = function (arr) {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            var minIndex = i;
            for (var j = i + 1; j < len; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if (i !== minIndex) {
                this.swapChange(arr, i, minIndex);
            }
        }
        return arr;
    };
    return selectSort;
}());
var sarr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 5];
var testsarr = new selectSort(sarr);
console.log(testsarr.selectionSort(sarr));
