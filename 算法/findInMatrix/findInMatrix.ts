
/**
 * 因为二维数组排序方式是特别的，从左到右从上到下依次递增，因此采取从左下角或者右上角作为起点去排查
 * 每一次排查至少可以去掉一列或者一行或者直接找到元素
 */

function findInMatrix(target: number, array: Array<Array<number>>): boolean {
    let falg = false
    let currentRow = array.length - 1
    let currentCol = 0
    while (currentRow >= 0 && currentCol <= array[0].length - 1 && !falg) {
        if (target > array[currentRow][currentCol]) {
            currentCol++;
        } else if (target < array[currentRow][currentCol]) { // 如果小于第一个那么后面的肯定都小于直接到第二行
            currentRow--;
        } else {
            falg = true; //找到目标
        }
        console.log('c', currentCol)

    }



    return falg

}

let maxarr: Array<Array<number>> = [[1, 2, 3], [4, 5, 6]]
console.log(findInMatrix(5,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))