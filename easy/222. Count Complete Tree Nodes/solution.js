var countNodes = function(root, count = 0) {
    if (!root) return count;
    if (root.val !== null) count++;
    count = countNodes(root.left, count)
    count = countNodes(root.right, count);
    return count;
};
