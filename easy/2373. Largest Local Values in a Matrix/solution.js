var largestLocal = function(grid) {
    const n = grid.length;
    const result = [];
    // loop through the rows - 3
    for (let row = 0; row <= n - 3; row++) {
        let currRowMax = [];
        // loop through the cols - 3
        for (let col = 0; col <= n - 3; col++) {
            let maxFor3x3 = 0;
            // loop through the curr row until row + 3
            for (let i = row; i < row + 3; i++) {
                // loop through the curr col until row + 3
                for (let j = col; j < col + 3; j++) {
                    // reassingn the maxFor3x3 if the curr num is greater
                    maxFor3x3 = Math.max(maxFor3x3, grid[i][j])
                }
            }
            currRowMax.push(maxFor3x3)
        }
        result.push(currRowMax);
    }
    return result;
};
