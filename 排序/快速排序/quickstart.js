function swaps(arr, i, l) {
    [arr[i], arr[l]] = [arr[l], arr[i]]
}

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr
}

function partition(arr, left ,right) {     // 分区操作
    console.log('开始')
    var pivot = left,                      // 设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swaps(arr, i, index);
            index++;
        }
        console.log('tag', arr)        
    }
    swaps(arr, pivot, index - 1);
    console.log('结束', arr,index-1)
    return index-1;
}


let quictest = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

console.log('result', quickSort(quictest, 0, 15));