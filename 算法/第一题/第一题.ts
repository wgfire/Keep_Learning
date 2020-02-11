
/**
 * 给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
interface twoSum {
    (nums: number[], target: number): number[]
}



let twoSums: twoSum = function (nums: number[], target: number): number[] {


    let result: number[] = []

    nums.forEach((el, index) => {
        let end = target - el
        let endindex = nums.indexOf(end)
        if (endindex != -1 && result.indexOf(end)==-1 && result.indexOf(endindex) == -1) {
            result.push(index, endindex)
        }


    })



    return result

}

let result = twoSums([2,7,11,12],9)
console.log('结果',result)