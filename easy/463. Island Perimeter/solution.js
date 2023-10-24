var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let perimeterCount = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                perimeterCount += dfs(i, j);
            }
        }
    }

    return perimeterCount;

    function dfs(row, col) {
        if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] === 0) {
            return 1;
        }

        if (grid[row][col] === -1) return 0;
        grid[row][col] = -1;

        const perimeterCount = dfs(row + 1, col) + dfs(row - 1, col) + dfs(row, col + 1) + dfs(row, col - 1); 

        return perimeterCount;
    }
};
  
