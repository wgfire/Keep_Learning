/**
 * 单链表：由一个节点指向下一个节点，最后节点为bull 找寻n节点 删除 增加 时间复杂度为 o(n)
 */

/**
 * 循环链表：最后一个节点指向头节点，构成一个循环链表
 */

/**
 * 双向链表：节点有两条线，头节点除外，一个指向下一个节点，一个指向上一个节点，加快查找访问速度，找寻n节点 删除 增加 时间复杂度为o(1)
 */

/**
 * 双向循环链表，最后一个节点指向头节点
 */
class node {
  key: any | null;
  next: any;
  constructor(key: any) {
    this.next = null;
    this.key = key;
  }
}

class ListNode {
  headNode: node;
  length: number = 0;
  constructor(key: any) {
    this.headNode = new node(key);
  }

  insertNode(node: node) {
    if (this.headNode.key != null) {
      // 说明headnode 下已经有节点
      node.next = this.headNode;
      console.log("tag", "1");
    } else {
      // 没有一个节点
      node.next = null;
      console.log("tag", "null");
    }
    this.headNode = node;
  }
  getNode() {
    return this.headNode;
  }
}

// 初始化一个单向链表，表头应该是null

let listnode = new ListNode(null);
let insetnodes1 = new node(1);
let insetnodes2 = new node(2);
listnode.insertNode(insetnodes1);
listnode.insertNode(insetnodes2);
console.log(listnode.getNode());
