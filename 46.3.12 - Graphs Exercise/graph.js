class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    vertexArray.forEach(vertex => this.nodes.add(vertex));
  }
          
  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (!this.nodes.has(v1) || !this.nodes.has(v2)) return; //checking if both nodes exist
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (!this.nodes.has(v1) || !this.nodes.has(v2)) return; //checking if both nodes exist
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (!this.nodes.has(vertex)) return;

    //remove vertex from adjacent lists 
    this.nodes.forEach(node => node.adjacent.delete(vertex));

    //remove vertex from node set
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    const visited = new Set();
    const result = [];

    function dfs(node) {
      if (visited.has(node)) return;
      visited.add(node);
      result.push(node.value);

      node.adjacent.forEach(neighbor => dfs(neighbor));
    }

    dfs(start);
    return result;
    }
  

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    const visted = new Set();
    const result = [];
    const queue = [start];

    visted.add(start);

    while ( queue.length) {
      const node = queue.shift();
      result.push(node.value);

      node.adjacent.forEach(neighbor => {
        if (!visted.has(neighbor)) {
          visted.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

module.exports = {Graph, Node};


// **Further Study**

// ## **shortest path**

// Write a function which accepts a graph, a source vertex and target vertex and returns the shortest path. You can assume your graph is unweighted and undirected.

// ## **course-schedule**

// https://leetcode.com/problems/course-schedule

// ## **numberOfIslands**

// https://leetcode.com/problems/number-of-islands/

// ## **course-schedule-ii**

// https://leetcode.com/problems/course-schedule-ii/

// ## **cloneGraph**

// https://leetcode.com/problems/clone-graph/

// ## **hasCycle**

// Write a function on the graph class which returns true if the graph contains a cycle

// ## **shortestReach**

// https://www.hackerrank.com/challenges/bfsshortreach/problem

// ## **graphValidTree**

// https://leetcode.com/problems/graph-valid-tree

// ## **roadsAndLibraries**

// https://www.hackerrank.com/challenges/torque-and-development/problem

// ## **evenTree**

// https://www.hackerrank.com/challenges/even-tree/problem

