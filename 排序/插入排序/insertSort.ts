function insertionSort(arr:Array<number>):Array<number> {
    for (let i = 1, len = arr.length; i < len; i++) {
      const temp = arr[i];
      let preIndex = i - 1;
  
      while (arr[preIndex] > temp) {
        arr[preIndex + 1] = arr[preIndex];
        preIndex -= 1;
     
      }
      arr[preIndex + 1] = temp;
      console.log(arr)
    }
     
    return arr;
  }
  /**
[60, 91, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
[60, 91, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
[7, 60, 91, 96, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
[7, 35, 60, 91, 96, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24]
   */
  // 利用while 循环将 每次 0，i-1 在排一次
  // test
  const insertArr:Array<number> = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];
  console.log(insertionSort(insertArr));
  