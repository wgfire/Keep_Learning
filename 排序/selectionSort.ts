// 选择排序

// 选择排序：先设定一个最小值的索引值，然后比较 如果a>a+1 那么将 a+1 的索引值 赋值给 最小值的索引，然后原有最小值的索引和新比较的来的最小索引交换位置



interface selectSorts {
    selectionSort(arr: Array<number>): Array<number>;
    swapChange(arr: number[], indexA: number, indexB: number): void

}

class selectSort implements selectSorts {
    public arr: Array<number>
    constructor(arr: Array<number>) {
        this.arr = arr
    }
    swapChange(arr: number[], indexA: number, indexB: number) {
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    }

    selectionSort(arr: Array<number>) {
       let  len = arr.length
        for (let i = 0; i < len - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < len; j++) {
              if (arr[j] < arr[minIndex]) {
                minIndex = j;
              }
            }
            if (i != minIndex) {
              this.swapChange(arr, i, minIndex);
            }
          }

        return arr;
    }
}

const sarr: number[] = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30,20, 31, 77, 81,5];
let testsarr = new selectSort(sarr)
console.log(testsarr.selectionSort(sarr));