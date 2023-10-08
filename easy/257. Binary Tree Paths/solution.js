var binaryTreePaths = function(root) {
    const result = [];
    dfs(root);
    return result;

    function dfs(node, str = "") {
        if (!node) return;
        if (!node.left && !node.right) {
            str += node.val;
            result.push(str);
        } else {
            str += node.val + "->";
            dfs(node.left, str)
            dfs(node.right, str)
        }
    }
};
