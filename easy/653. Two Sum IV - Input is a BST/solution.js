var findTarget = function(root, k) {
    const set = new Set();
    return dfs(root);
  
    function dfs(node) {
        if (!node) return false;
        const complement = k - node.val;
        // if a set has the complement, we found a pair
        if (set.has(complement)) return true;
        // otherwise add curr node to the set;
        set.add(node.val);
        // if either side finds a pair, return true
        return (dfs(node.left) || dfs(node.right))
    }
};
