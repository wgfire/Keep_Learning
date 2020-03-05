function transform(number) {
    if (number > 2000000000) {
        return false
    }
    number = number + ''
    let s = 0
    let arrnum = number.split('')
    while (arrnum.length > 1) {
        s++
        let n = 1
        for (let i = 0; i < arrnum.length; i++) {
            n = n * arrnum[i]

        }
        if (n > 10) {
            n = n + ''
            arrnum = n.split('')
        } else {
            break;
        }

    }

    return s


}

//console.log('tag', transform(2590))


function judge(num) {
    let count = 0
    for (var i = 1; i <= num; i++) {
        if (num % i == 0) { //因子
            count++;
        }
    }
    //循环结束后 如果 count == 2  一定是素数
    if (count == 2) {
        return true
    } else {
        return false
    }
}

function findmax(a, b) {
    if (!(1 <= a && a <= b && b <= 10000)) return
    var result = 0
    for (let i = a; i <= b; i++) {
        console.log('数字', i)
        let str = i + ''
        str = str.split('')
        if (str.length > 1) {
            for (let j = 0; j < str.length; j++) {
                for (s=0;s <str.length; s++) {
                    if(s==j)break;
                    let nums = (str[j] + str[s]) * 1
                    if (judge(nums)) {
                        ++result
                    }
                }

            }

        } else {
            if (judge(str)) {
                ++result

            }
        }

    }
    return result

}

//console.log('tag', findmax(11, 20))



function findtu (n){
    var  fn1 = 1;
    let doub = 0
       var  fn2 = 1;
        //考虑出错情况
        if (n <= 0) {
           
            return 0;
        }
        //第一和第二个数直接返回
        if (n == 1 || n == 2) {
            return 1;
        }
        //当n>=3时，走这里，用迭代法算出结果
        //这里也说明了，要用三个数操作的情况，其实也可以简化为两
        //个数，从而节省内存空间
        while (n-- > 2) {
            fn1 += fn2;
            fn2 = fn1 - fn2;
        }
       
        
        doub = Math.floor(fn1/2)
        console.log(doub);
        
       return doub
        
}
function f1(n) {
                    if (n <= 4) {
                        return 1;
                    }
                    return f1(n-3) + f1(n-1);
                }
                console.log(f1(5));
  
    
