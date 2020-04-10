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
let mapSize = new Map<number|string,number>()
let  hasGroupsSizeX = function(deck:Array<number>):boolean {
    let flag:boolean = true 
    let min = 1
    deck.forEach(el=>{
        if(!mapSize.get(el)){
            // 如果没有这个值那个就设为从1开始
            mapSize.set(el,1)
        }else{
            let count:number = mapSize.get(el)!
            mapSize.set(el,count++)
            if(count>min){
                min = count
            }
        }
    })
    mapSize.set('min',min)
    console.log('map',mapSize);
    
    return flag

};