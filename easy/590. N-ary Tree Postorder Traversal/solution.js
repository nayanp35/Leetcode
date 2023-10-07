var postorder = function(root) {
    const result = [];

    function traverse(node) {
        if (!node) return null;
        // go to the very last of first child and process from the
        for (const child of node.children) {
            traverse(child);
        }
        // push the curr node val to the result;
        result.push(node.val)
    }

    traverse(root);
    return result;
};
