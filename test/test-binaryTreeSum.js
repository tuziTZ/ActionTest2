// test-binaryTreeSum.js
const assert = require('assert');
const { TreeNode, sumOfLeaves } = require('../src/binaryTreeSum');

describe('Binary Tree Sum of Leaves', function () {
  it('should return 0 for an empty tree', function () {
    const root = null;
    const sum = sumOfLeaves(root);
    assert.strictEqual(sum, 0);
  });

  it('should return the value of the only node for a tree with only one node', function () {
    const root = new TreeNode(1);
    const sum = sumOfLeaves(root);
    assert.strictEqual(sum, 1);
  });

  it('should return the correct sum for a binary tree with leaves', function () {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    root.right = new TreeNode(3);
    root.left.left = new TreeNode(4);
    root.left.right = new TreeNode(5);

    const sum = sumOfLeaves(root);
    assert.strictEqual(sum, 12); 
  });

  // Add more test cases as needed
});
