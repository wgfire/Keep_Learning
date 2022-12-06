/**
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
 */

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLists = function (l1: ListNode, l2: ListNode) {
  const prehead = new ListNode(-1);

  let prev = prehead; // [-1]->[prev]-> [perv]
  while (l1 != null && l2 != null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next!;
    } else {
      prev.next = l2;
      l2 = l2.next!;
    }
    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可 两个链表不相等的情况，因为是有序的所以直接链接在后面
  prev.next = l1 === null ? l2 : l1;

  return prehead.next;
};
