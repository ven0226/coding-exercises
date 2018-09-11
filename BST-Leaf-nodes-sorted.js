'use strict';

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.insert = (root, data) => {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else if (root.right) {
      this.insert(root.right, data);
    } else {
      root.right = new Node(data);
    }

    return this.root;
  };


  this.getAllLeafNodes = (root) => {
    if (!root.right && !root.left) {
      return [root.data];
    }
    const left = root.left && this.getAllLeafNodes(root.left) || [];
    const right = root.right && this.getAllLeafNodes(root.right) || [];
    return left.concat(right);
  };
}

const values = [0,10,9,11,5,13,3,6,8];
const tree = new BinarySearchTree();
let root = null;

for (let i = 1; i < values.length; i += 1) {
  root = tree.insert(root, values[i]);
}

const leaves = tree.getAllLeafNodes(root);
let output = '';
for (let i = 0; i < leaves.length; i += 1) {
  output += `${leaves[i]}\n`;
}
console.log(output);
