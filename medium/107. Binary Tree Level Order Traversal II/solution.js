var levelOrderBottom = function(root) {
    if (!root) return [];
    const queue = [root];
    const result = []
    while (queue.length) {
        const size = queue.length;
        const level = []
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            level.push(curr.val);
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        result.push(level);
    }

    result.reverse();
    return result;
};
