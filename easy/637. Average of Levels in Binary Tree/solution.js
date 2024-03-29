var averageOfLevels = function(root) {
    const queue = [root];
    const result = [];

    while (queue.length) {
        let size = queue.length;
        let sum = 0;
        // for each node in the current level, add it to sum
        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
                sum += curr.val; 
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
        const average = sum / size;
        result.push(average);
    }
    return result;
};
