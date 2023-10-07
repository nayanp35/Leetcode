var leafSimilar = function(root1, root2) {
    const root1Leafs = [];
    const root2Leafs = [];

    function dfs(node, arr) {
        if(!node) return;
        if (!node.left && !node.right) {
            arr.push(node.val);
        }
        dfs(node.left, arr);
        dfs(node.right, arr);
    }

    dfs(root1, root1Leafs);
    dfs(root2, root2Leafs);

    return root1Leafs.join("") === root2Leafs.join("");
};
