/**
 * 给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function gcd(num1, num2) {
    // 利用辗转相除法来计算最大公约数
    return num2 === 0 ? num1 : gcd(num2, num1 % num2); 
}
var hasGroupsSizeX = function(deck) {
   
    // 相同牌出现次数Map
    let timeMap = new Map();
    // 遍历牌
    deck.forEach(num => {
        // 统计每张牌出现的次数
        timeMap.set(num, timeMap.has(num) ? timeMap.get(num) + 1 : 1);
    });
    // Map.protype.values()返回的是一个新的Iterator对象，所以可以使用扩展运算符(...)来构造成数组
    let timeAry = [...timeMap.values()];
    /*
    最大公约数
    因为该数组是出现次数数组，最小值至少为1（至少出现1次），所以默认赋值为数组首位对公约数计算无干扰
    */
    let g = timeAry[0];
    // 遍历出现次数，计算最大公约数
    timeAry.forEach(time => {
        // 因为需要比较所有牌出现次数的最大公约数，故需要一个中间值
        console.log('time',time);
        g = gcd(g, time);
        console.log('g',g);
        
    });

    // 判断是否满足题意
    return g >= 2;
};

console.log(hasGroupsSizeX([1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3]))
