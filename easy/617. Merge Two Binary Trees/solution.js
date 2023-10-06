var mergeTrees = function(root1, root2) {
  // if root1 is null return root2
    if (!root1) return root2;
  // if root2 is null rutn root1
    if (!root2) return root1;
  // create new node with the sum of root1 and root2 val
    const node = new TreeNode(root1.val + root2.val);
  // do the same with left nodes
    node.left = mergeTrees(root1.left, root2.left)
  // do the same with right nodes
    node.right = mergeTrees(root1.right, root2.right)
    return node;
};
