class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the Binary Searcg Tree with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let newNode = new Node(val);

    if(!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      else {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    let newNode = new Node(val);

    //if empty set root
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    //if val is less than current go left side
    if (val < current.val) {
      if (!current.left) {
        current.left = newNode;
      }
      else {
        this.insertRecursively(val, current.left);
      }
    }

    //else val is greater than current so go right
    else {
      if (!current.right) {
        current.right = newNode;

      }
      else {
        this.insertRecursively(val, current.right) ;
      }
    }
    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;

    while (current) {
      if (val === current.val) return current; //found searched for node
      if (val < current.val) current = current.left; //search left side
      else current = current.right; //search right side
    }
    return undefined; //node wasn't found
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined; //node nbt found

    if (val === node.val) return node; //found node

    if (val < node.val ) {
      return this.findRecursively(val, node.left); //search left
    }
    else {
      return this.findRecursively(val, node.right); //search right
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let result = [];

    function traverse(node) {
      if (!node) {
        return;
      }
      result.push(node.val); //visit node first (preorder part)
      traverse(node.left); //visit left side
      traverse(node.right); //then visit right side 
    }
    traverse(this.root);
    return result;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let result = [];

    function traverse(node) {
      if (!node) {
        return;
      }
      
      traverse(node.left); //visit left side in order part
      result.push(node.val); //visit node itself
      traverse(node.right); //then visit right side 
    }
    traverse(this.root);
    return result;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let result = [];

    function traverse(node) {
      if (!node) {
        return;
      }
      
      traverse(node.left); //visit left side in post order part
      traverse(node.right); //then visit right side 
      result.push(node.val); //visit node itself
    }
    traverse(this.root);
    return result;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let result = [];
    let queue = [];

    if (this.root) queue.push(this.root);

    while (queue.length) {
      let current = queue.shift(); //remove first node from q
      result.push(current.val);

      if (current.left) queue.push(current.left); //add left child to que
      if (current.right) queue.push(current.right); //add right child to que
    }
    return result;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    // this.root = this._removeNode(this.root, val);

    // _removeNode(node, val) {
    //   if (!node) return null; // node not found

    //   if (val < node.val) {
    //     node.left = this._removeNode(node.left, val);
    //   }
    //   else if (val > node.val ) {
    //     node.right = this._removeNode(node.right, val);
    //   }
    //   else {
    //     //node has no kids
    //     if (!node.left && !node.right) {
    //       return null;
    //     }
    //     //node has 1 kid
    //     if(!node.left) {
    //       return node.right;
    //     }
    //     if (!node.right) {
    //       return node.left;
    //     }
    //   }
    // }
  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
