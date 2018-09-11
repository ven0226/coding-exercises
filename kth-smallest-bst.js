/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const sorted = []
  const getTree = (root) => {
      if(!root){
          return;
      }
      getTree(root.left);
      sorted.push(root.val);
      getTree(root.right);
  };
  getTree(root);
  return sorted[k-1];
};

function TreeNode(val) {
  return {
    val,
    right: null,
    left: null,
  }
}

function insert(root, data){
  if(!root){
    return TreeNode(data);
  } 
  if(data > root.val){
    if(root.right){
      insert(root.right, data);
    } else {
      root.right = TreeNode(data); 
    }
  } else {
    if(root.left){
      insert(root.left,data);
    } else {
      root.left = TreeNode(data);
    }
  }
  return root;
}

let root = null;
let prevNode = null;
const input = [5,3,6,2,4,1];
for (let i = 0; i < input.length; i++){
  root = insert(root, input[i]);  
}



console.log(kthSmallest(root,3));