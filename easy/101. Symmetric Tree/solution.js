function isSymmetric(root) {
    function traverse(leftNode, rightNode) {
      // if both nodes are null, they are symetrical
        if (!leftNode && !rightNode) return true;
      // if one of the node is null, then they are not
        if (!leftNode || !rightNode) return false;
      // Check if the current nodes are the same, left's left and right's right are the same 
      // and left's right and right's left are the same
        return (leftNode.val === rightNode.val) &&
            (traverse(leftNode.left, rightNode.right)) &&
            (traverse(leftNode.right, rightNode.left))
    }
    if (!root) return true;
    return traverse(root.left, root.right)
}
