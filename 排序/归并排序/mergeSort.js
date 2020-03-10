// 创建一个新的数组 【】  然后根据 裂化得到的最小数组 【x】 left right [] 两个通过 shift 取值 相比较。 O(n·log(n))

function mergeSort(arr) {
    var len = arr.length;
    if (len < 2) {
        return arr;

    }
    var mid = Math.floor(len / 2);
    var left = arr.slice(0, mid);
    var right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    var result = [];
    console.log('left', left);
    console.log('right', right);
    while (left.length > 0 && right.length > 0) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    result = result.concat(left, right);
    console.log('tag', result);
    return result
}
// test
var mergearr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
console.log(mergeSort(mergearr));





function mergsort2(arr) {
    let leng = arr.length

    if (leng < 2) {
        return arr;
    }

    let mind = Math.floor(leng / 2);
    let left = arr.splice(0, mind)
    let right = arr

    return merge2(mergsort2(left), mergsort2(right))

}

function merge2(left, right) {
    let result = []

    while (left.length > 0 && right.length > 0) {
        result.push(left[0] <= right[0] ? left.shift() : right.shift())
    }
    return result.concat(left, right)

}