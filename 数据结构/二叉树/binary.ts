// 前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树。
// 中序遍历先访问左子树 然后根节点 最后右子树
// 后序遍历先访问左子树 然后右子树 最后根节点

class treeNode {
  val: number;
  left: treeNode | null;
  right: treeNode | null;
  constructor(value: number) {
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
function nodes() {}
function create(params: any) {
  let tree = new treeNode(0);
  params = params.slice(1);
  params.forEach((el: number) => {});
}
let trees = new treeNode(1);
trees.right = new treeNode(2);
trees.right.left = new treeNode(3);
var preorderTraversal = function(root: treeNode): any {
  let res = [];
  if (root != null) {
    console.log(root.val);
    res.push(root.val);
    res.push(...preorderTraversal(root.left!));
    res.push(...preorderTraversal(root.right!));
  }
  return res;
};

preorderTraversal(trees);
