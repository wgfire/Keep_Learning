var node = /** @class */ (function () {
    function node(key) {
        this.next = null;
        this.key = key;
    }
    return node;
}());
var listNode = /** @class */ (function () {
    function listNode(key) {
        this.length = 0;
        this.headNode = new node(key);
    }
    listNode.prototype.insertNode = function (node) {
        if (this.headNode.key != null) {
            // 说明headnode 下已经有节点
            node.next = this.headNode;
            console.log('tag', '1');
        }
        else {
            // 没有一个节点
            node.next = null;
            console.log('tag', 'null');
        }
        this.headNode = node;
    };
    listNode.prototype.getNode = function () {
        return this.headNode;
    };
    return listNode;
}());
// 初始化一个单向链表，表头应该是null
var listnode = new listNode(null);
var insetnode1 = new node(1);
var insetnode2 = new node(2);
listnode.insertNode(insetnode1);
listnode.insertNode(insetnode2);
console.log(listnode.getNode());
