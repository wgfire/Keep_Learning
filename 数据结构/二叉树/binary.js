"use strict";
// 前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树。
// 中序遍历先访问左子树 然后根节点 最后右子树
// 后序遍历先访问左子树 然后右子树 最后根节点
class treeNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
/**
* @param {TreeNode} root
* @return {number[]}
// 前序遍历递归
*/
function nodes() { }
function create(params) {
    let tree = new treeNode(0);
    params = params.slice(1);
    params.forEach((el) => { });
}
let trees = new treeNode(1);
trees.right = new treeNode(2);
trees.right.left = new treeNode(3);
var preorderTraversal = function (root) {
    let res = [];
    if (root != null) {
        console.log(root.val);
        res.push(root.val);
        res.push(...preorderTraversal(root.left));
        res.push(...preorderTraversal(root.right));
    }
    return res;
};
preorderTraversal(trees);
/**迭代法 */
function whilepreorder(root) {
    let res = [];
    let stack = [root]; // 模拟一个栈道 记录节点的左子树 和右子树  然后循环遍历这个栈道 ，遍历的过程中又会添加新的节点
    while (stack.length > 0) {
        let node = stack.pop();
        node && res.push(node.val);
        node && node.right && stack.push(node.right);
        node && node.left && stack.push(node.left);
    }
    return res;
}
console.log('while', whilepreorder(trees));
