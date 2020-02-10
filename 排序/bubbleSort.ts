
interface arraySort {
    bubbleSort(arr: Array<number>): Array<number>;
    swapChange(arr: number[], indexA: number, indexB: number): void
    bubbleSortPos(arr: Array<number>): Array<number>;

}

  class arrSort implements arraySort {
    public arr: Array<number>
    constructor(arr: Array<number>) {
        this.arr = arr
    }
    swapChange(arr: number[], indexA: number, indexB: number) {
        [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
    }

    bubbleSort(arr: Array<number>) {
        for (let i = arr.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    this.swapChange(arr, j, j + 1);
                }
            }
        }

        return arr;
    }
    bubbleSortPos(arr: Array<number>) {
        let i = arr.length - 1;  //2 
        while (i > 0) {
            let pos = 0;
            for (let j = 0; j < i; j++) {
                if (arr[j] > arr[j + 1]) {
                    pos = j; // 0-》 每一次结尾会将最大值 放在末尾   所以 pos 后面的值可以不用管了，只要在【0-pos]直接的再次排序
                    this.swapChange(arr, j, j + 1);
                }
                console.log(arr, i, j)
            }

            i = pos;
        }
        return arr;
    }

    bubbleSortDouble(arr: Array<number>) {
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            for (let i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    this.swapChange(arr, i, i + 1);
                }
            }
            end -= 1;
            for (let i = end; i > start; i--) {
                if (arr[i - 1] > arr[i]) {
                    this.swapChange(arr, i - 1, i);
                }
            }
            start += 1;
        }

        return arr;
    }
    bubbleSortPosDouble(arr: Array<number>) { // 双向遍历加上缓存的实现
        let start = 0;
        let end = arr.length - 1;
        while (start < end) {
            let startPos = 0
            let endPos = 0
            for (let i = start; i < end; i++) {
                if (arr[i] > arr[i + 1]) {
                    startPos = i
                    this.swapChange(arr, i, i + 1);
                }
            }
            end = endPos;
            for (let i = end; i > start; i--) {
                if (arr[i - 1] > arr[i]) {
                    endPos = i
                    this.swapChange(arr, i - 1, i);
                }
            }
            start = startPos;
        }

        return arr;
    }

}


// test
const testarr: number[] = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 5];
let testobj = new arrSort(testarr)
console.log(testobj.bubbleSortDouble(testarr));


