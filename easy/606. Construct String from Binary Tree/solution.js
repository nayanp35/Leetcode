var tree2str = function(root) {
    function dfs(node) {
        if (!node) return "";
        let left = dfs(node.left);
        let right = dfs(node.right);
        if (!left && !right) {
            return `${node.val}`;
        }
        if (!right) {
            return `${node.val}(${left})`
        } else {
            return `${node.val}(${left})(${right})`
        } 
    }
    return dfs(root);
};
