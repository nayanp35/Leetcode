var isValidBST = function(root) {
    let valid = true;
    let prev = -Infinity;

    function inOrderTraversal(node) {
        if (node.left) inOrderTraversal(node.left)
        if (valid && prev >= node.val) {
            valid = false;
            return
        }
        prev = node.val;
        if (node.right) inOrderTraversal(node.right)
    }
    inOrderTraversal(root);
    return valid;
};

// var isValidBST = function(root) {
    // const arr = [];
    // function inOrderTraversal(node) {
    //     if (node.left) inOrderTraversal(node.left)
    //     arr.push(node.val)
    //     if (node.right) inOrderTraversal(node.right)
    // }
    // inOrderTraversal(root);
    // for (let i = 0; i < arr.length -1; i++) {
    //     if (arr[i] >= arr[i+1]) return false;
    // }
    
    // return true;
// }
