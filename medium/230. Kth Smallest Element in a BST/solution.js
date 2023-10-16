var kthSmallest = function(root, k) {
    let result;
    function inOrder(node) {
        if (node.left) inOrder(node.left)
        k--;
        if (k === 0) {
            result = node.val;
            return;
        } 
        if (node.right) inOrder(node.right);
    }
    inOrder(root);
    return result;
};

// Take up linear space
var kthSmallest = function(root, k) {
    const arr = []
    function inOrder(node) {
        if (node.left) inOrder(node.left)
        arr.push(node.val)
        if (node.right) inOrder(node.right)
    }
    inOrder(root);
    return arr[k-1];
};
