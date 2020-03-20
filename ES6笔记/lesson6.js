// 数组扩展
{
  let arr = Array.of(3,4,7,9,11);
  console.log('arr=',arr);

  let empty=Array.of();
  console.log('empty',empty);
}
// 转换为数组类型
// {
//   let p=document.querySelectorAll('p');
//   let pArr=Array.from(p);
//   pArr.forEach(function(item){
//     console.log(item.textContent);
//   });

  
// }

console.log(Array.from([1,3,5],function(item){return item*2})); // 2 ， 6 ，10

{
  console.log('fill-7',[1,'a',undefined].fill(7)); // 填充
  console.log('fill,pos',['a','b','c'].fill(7,1,3));
}

{
  for(let index of ['1','c','ks'].keys()){  // keys() 返回下标
    console.log('keys',index);
  }
  for(let value of ['1','c','ks'].values()){ 
    console.log('values',value);
  }
  for(let [index,value] of ['1','c','ks'].entries()){ //返回给定对象自身可枚举属性的键值对数组
    console.log('values',index,value);
  }
}

{
  console.log([1,2,3,4,5].copyWithin(0,3,4)); // 将数组里的某个值 copy 到指定 索引里
}

{
  console.log([1,2,3,4,5,6].find(function(item){return item>3})); // 返回值
  console.log([1,2,3,4,5,6].findIndex(function(item){return item>3})); // 返回下标
}

{
  console.log('number',[1,2,NaN].includes(1));
  console.log('number',[1,2,NaN].includes(NaN));
}
