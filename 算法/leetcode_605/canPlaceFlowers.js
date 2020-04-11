/**
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/can-place-flowers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 先列出n 最小的栽花的情况不考虑数组里面有1 需要几个0

function getMin(n) {
    return n + (n - 1)
}



function getNeed(n,flag) { // 如果花盆里有其他花那么需要的最小连续为0的数量

    return flag?n + (n + 1):n + (n)
}

function findCanPlace(flowerbed, n) {
    // 找出有几个连续的0
    let arr = [] // 保存找到的数字
    let count = 0
    let indexs = 0
    flowerbed.forEach((el, index) => {
        if (el == n) {
            count++
            arr.push(count)
        } else {
            count = 0
        }
    })
    let min = arr.sort((a, b) => b - a)[0]
        ! function (count) {
            flowerbed.forEach((el, index) => {
                if (el == n) {
                    count++
                    if (count == min) {
                        console.log('index', index)
                        indexs = index
                    }
                } else {
                    count = 0
                }
            })
        }(0)
    let first = indexs-min>=0?indexs-min:0
    let last = indexs+1
    //console.log('first,last',first,last,flowerbed[first],flowerbed[last] )
    if(flowerbed[first]==1 && flowerbed[last]==1){
        return [min,true]
    }else {
        return [min,false]
    }

    

}
var canPlaceFlowers = function (flowerbed, n) {
    let count=0
    for (let i = 0; i < flowerbed.length; i++) { 
      if (flowerbed[i] === 0) { 
        if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
          count++
          flowerbed[i]=1
        }
      }
    }
  
    return count >= n
  };
  

console.log('max',canPlaceFlowers([0],1));
//console.log('min', findCanPlace([1,0, 0, 0, 0],0));