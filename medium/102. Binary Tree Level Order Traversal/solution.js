var levelOrder = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = [];
    while (queue.length) {
        let size = queue.length;
        const level = [];
        for (let i = 0; i < size; i++) {
            let shifted = queue.pop();
            level.push(shifted.val);
            if (shifted.left) {
                queue.push(shifted.left)
            }
            if (shifted.right) {
                queue.push(shifted.right)
            }
        }
        result.push(level);
    }
    return result;
};
