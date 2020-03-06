/** 剑指offer 重建二叉树 */
/**输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回。 */

 // 先序遍历可用于打印树的结构
// 先序遍历先访问根节点，然后访问左节点，最后访问右节点。

// 中序遍历表示先访问左节点，然后访问根节点，最后访问右节点。
//后序遍历表示先访问左节点，然后访问右节点，最后访问根节点。
/**
 * 思路，根节点是先序遍历的第一个节点，从根节点开始构建二叉树
 * 中序遍历节点，直到找到与根节点相同的节点，左侧为左子树，右侧为右子树
 * 之后，递归构建左右子树
 */
/** 新建一个class 模拟一个数 */
class TreeNode {
    value: number
    left: any = null
    right:any = null
    constructor(value: number) {
        this.value = value
        this.left = []
        this.right = []
    }
}
function rebuildBinaryTree(preOrder:Array<number>,minOrder:Array<number>):TreeNode|null {
    // write code here
    if(preOrder.length == 0 || minOrder.length == 0 ) {
        return null;
    }
    var treeNode = new TreeNode(preOrder[0]);
    for(var i = 0; i < preOrder.length; i++) {
        if (minOrder[i] === preOrder[0]) {
            treeNode.left = rebuildBinaryTree(preOrder.slice(1, i+1), minOrder.slice(0, i)); //左子树的先序和左子树的中序
            treeNode.right = rebuildBinaryTree(preOrder.slice(i+1),minOrder.slice(i+1)); //右子树的先序和右子树的中序
        }
    }
    return treeNode;
}
var pre=[1,2,4,7,3,5,6,8];
var min = [4,7,2,1,5,3,8,6];
var tree = rebuildBinaryTree(pre,min);

function preOrder(node:TreeNode){//先序遍历
    if(node!=null){
        console.log(node.value);
        preOrder(node.left);
        //preOrder(node.right);
    }
}
preOrder( tree as TreeNode)