/**
 输入：distance = [1,2,3,4], start = 0, destination = 2
输出：3
解释：公交站 0 和 2 之间的距离是 3 或 7，最小值是 3。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/distance-between-bus-stops
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
  let total: number = 0,
    s: number = 0,
    min: number = Math.min(start, destination), //0
    max: number = Math.max(start, destination); //2
  for (const [i, d] of distance.entries()) {
    total += d;
    if (min <= i && i < max) {
      s += d;
    }
  }
  return Math.min(s, total - s);
}

// 解题思路，车站点围起来一个圈 给定圈的起点和终点，求这两个点直接的距离（顺时针）。然后吧总的车站长度减去这两点直接的距离，得到逆时针走的距离，最后比较顺时针和逆时针哪个小
