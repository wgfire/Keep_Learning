/*
给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/add-two-numbers
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

*/
/**
 *
 * 这道题 JS 中输入的是 数组，而不是链表 所以为了在其他地方能运行  先把数组转换为链表结构 在相加
 */
var ListNode = /** @class */ (function () {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    return ListNode;
}());
function tolistnode(arr) {
    var listnode = new ListNode(null);
    var head = listnode;
    arr.forEach(function (el) {
        // 链表头 要设置val
        if (head.val === null) {
            head.val = el;
            return;
        }
        var node = new ListNode(el);
        head.next = node;
        head = node; // 
        // 一开始是吧head 保存了 alistnode 然后每层循环去改变head
    });
    return listnode;
}
var a = [1, 2, 3];
var b = [2, 8, 5];
var alistnode = tolistnode(a);
var blistnode = tolistnode(b);
function addTwoNumbers(l1, l2) {
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let result = new ListNode(null);
    head = result;
    let flag = false; // 判断是否要进位
    while(l1 !== null || l2 !== null || flag) {
        let sum = 0;
        sum = l1.val + l2.val;
        flag && (sum += 1) && (flag = false);
        sum > 9 && (flag = true);// 为下一次加1
        if(head.val === null) {
            head.val = sum % 10;// 第一次设
        } else {
            head.next = new ListNode(sum % 10);// 当前的head.next 的实例是lisnode对象 可这个实例默认 next 属性=null，所以当遍历完之后 最后一个由于没有值了 最后一个next就是null 
            head = head.next;
        }
        l1 = l1 === null ? l1 : l1.next;
        l2 = l2 === null ? l2 : l2.next;
    }
    return result;
}
var resultNode = addTwoNumbers(alistnode, blistnode);
console.log(resultNode);

// 第一次   1 ，2
// head {val:null,next:null}-> {val:3,next:null}

// 第二次  2，8
// {val:3,next:{val:0:next:null}}

// 第三次  3,8 这时  8要加一变成9
// {val:3,next:{val:0:next:{val:9,next:null}}}
