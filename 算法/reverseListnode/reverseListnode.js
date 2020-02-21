var Nodes = /** @class */ (function () {
    function Nodes(key) {
        this.next = null;
        this.key = key;
    }
    return Nodes;
}());
var reverseList = function (head) {
    if (!head)
        return null;
    var pre = null, cur = head;
    while (cur) {
        // 关键: 保存下一个节点的值
        var next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};
var head = new Nodes(1);
head.next = new Nodes(2);
console.log('链表', head);
console.log('反转链表', reverseList(head));
