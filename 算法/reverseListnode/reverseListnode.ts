class Nodes {
    key: any | null
    next: any
    constructor(key: any) {
        this.next = null;
        this.key = key;
    }


}

let reverseList = (head: Nodes) => {
    if (!head)
        return null;
    let pre = null, cur = head; // // 上一个节点，当前节点
    while (cur) {
        // 关键: 保存下一个节点的值 是为了循环改变节点  pre = cur保存当前节点的值 是为了 在下一节点进行赋值
        let next = cur.next; // {next:null,key:2}
        cur.next = pre; //{next:null,key:1}
        pre = cur;//per {next:null,key:1}
        cur = next;
    }
    return pre;
};
// 递归解决法

let reverseListwo = (head: Nodes) => {
    let reverse = (pre: Nodes | null, cur: Nodes) => {
        if (!cur) return pre;
        // 保存 next 节点
        let next = cur.next;
        cur.next = pre;
        reverse(cur, next);
    }
    return reverse(null, head);
}

let head = new Nodes(1)
head.next = new Nodes(2)
console.log('链表', head);
console.log('反转链表', reverseList(head));

// 