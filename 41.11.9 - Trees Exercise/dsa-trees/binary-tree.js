/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth(node = this.root) {
    if (!node) return 0;

    if(!node.left && !node.right) {
      return 1;
    }

    if(!node.left) return 1 + this.minDepth(node.right);
    if(!node.right) return 1 + this.minDepth(node.left);

    return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));

  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth(node = this.root) {
    if (!node) return 0;

    if(!node.left && !node.right) {
      return 1;
    }

    return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity;

    function findMaxPath(node) {
      if (!node) return 0;
      let leftMax = Math.max(0, findMaxPath(node.left));
      let rightMax = Math.max(0, findMaxPath(node.right));

      let currentMax = node.val + leftMax + rightMax;

      maxSum = Math.max(maxSum, currentMax);

      return node.val + Math.max(leftMax, rightMax);
    }
    findMaxPath(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let que = [this.root];
    let nextLargerVal = null;

    while (que.length > 0) {
      let node = que.shift();
      if (node.val > lowerBound) {
        if (nextLargerVal === null || node.val < nextLargerVal) {
          nextLargerVal = node.val;
        }
      }
      if (node.left) que.push(node.left);
      if (node.right) que.push(node.right);
    }
    return nextLargerVal;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {
    if (!this.root || node1 === this.root || node2 === this.root) return false;

    let que = [[this.root, null, 0]];
    let node1Info = null;
    let node2Info = null;
    
    while (que.length > 0) {
      let [node, parent, depth] = que.shift();

      if (node.val === node1.val) node1Info = {parent, depth};
      if (node.val === node2.val) node2Info = {parent, depth};

      if (node1Info && node2Info) break;

      if (node.left) que.push([node.left, node, depth+1]);
      if (node.right) que.push([node.right, node, depth+1]);
    }
    return (
      node1Info && node2Info && node1Info.depth === node2Info.depth && node1Info.parent !== node2Info.parent
    );
  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
