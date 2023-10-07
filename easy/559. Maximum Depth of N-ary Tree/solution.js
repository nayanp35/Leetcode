var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0;
    for (const child of root.children) {
        max = Math.max(maxDepth(child), max);
    }
    return max + 1;
};
