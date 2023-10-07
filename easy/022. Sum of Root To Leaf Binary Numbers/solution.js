function sumRootToLeaf(root) {
    let sum = 0;
    function dfs(node, str) {
        if (!node) return;
        // concatinate the curr val to the str
        str += node.val;
        // if a curr is a leaf node, convert it to decimal and add it to sum
        if (!node.left && !node.right) {
            sum += parseInt(str, 2);
            return;
        }
        dfs(node.left, str)
        dfs(node.right, str)
    }
    dfs(root, "");
    return sum;
}
