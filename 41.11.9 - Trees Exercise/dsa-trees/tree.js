/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    function dfsMethod(node) {
      let sum = node.val;
      for (let child of node.children) {
        sum += dfsMethod(child);
      }
      return sum;
    }
    return dfsMethod(this.root);
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;

    function dfsMethod(node) {
      let count = node.val % 2 === 0 ? 1 : 0;

      for (let child of node.children) {
        count += dfsMethod(child);
      }
      return count;
    }
    return dfsMethod(this.root);
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    function dfsMethod(node) {
      let count = node.val > lowerBound ? 1 : 0 ;
      for (let child of node.children) {
        count += dfsMethod(child);
      }
      return count;
    }
    return dfsMethod(this.root);
  }
}

module.exports = { Tree, TreeNode };
