function quickSort2(arr:Array<number>):any {
    const pivot:any = arr.shift();
    const left:Array<number> = [];
    const right:Array<number> = [];
  
    if (arr.length < 2) { return arr; }
  
    arr.forEach((element:number) => {
      element < pivot ? left.push(element) : right.push(element);
    });
  
    return quickSort2(left).concat([pivot], quickSort2(right));
  }