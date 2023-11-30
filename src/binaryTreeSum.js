// binaryTreeSum.js
class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

function sumOfLeaves(root) {
  if (root === null) {
      return 0;
  } else if (root.left === null && root.right === null) {
      // Leaf node
      return root.value;
  } else {
      const leftSum = sumOfLeaves(root.left);
      const rightSum = sumOfLeaves(root.right);
      return leftSum + rightSum;
  }
}

module.exports = {
  TreeNode,
  sumOfLeaves
}