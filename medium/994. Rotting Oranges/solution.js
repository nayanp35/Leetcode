
var orangesRotting = function(grid) {
    let minutesElapsed = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    const queue = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    
    while (queue.length) {
        let len = queue.length;
        for (let l = 0; l < len; l++) {
            const deQ = queue.shift();
            const [row, col] = deQ;
            for (const [i, j] of directions) {
                let nextRow = row + i;
                let nextCol = col + j;
                if (inBounds(nextRow, nextCol) && grid[nextRow][nextCol] === 1) {
                    queue.push([nextRow, nextCol])
                    grid[nextRow][nextCol] = 2;
                }
            }
        }
        if (queue.length) minutesElapsed++;
    }

    // Check for any fresh oranges. Return -1 if there's any
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) return -1;
        }
    }
    return minutesElapsed;

    function inBounds(i, j) {
        if (i < 0 || j < 0 || i >= rows || j >= cols) return false;
        return true;
    }
};
