var increasingBST = function(root) {
  // create a new node
    const result = new TreeNode();
  // initialize a pointer;
    let pointer = result;
    function dfs(node) {
        if (!node) return;
      // go all the way to the left
        dfs(node.left);
      // assign the right pointer to the curr node
        pointer.right = new TreeNode(node.val);
      // move the pointer right
        pointer = pointer.right;
      // go to the right node
        dfs(node.right);
    }
    dfs(root);
    return result.right;
};
