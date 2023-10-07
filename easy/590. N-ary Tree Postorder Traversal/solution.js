var postorder = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) return null;
        for (const child of node.children) {
            traverse(child);
        }
        result.push(node.val)
    }

    traverse(root);
    return result;
};
