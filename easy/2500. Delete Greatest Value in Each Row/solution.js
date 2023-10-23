// O((r * c)(r * c) (r * c))
// O((r^3 * c^3)
var deleteGreatestValue = function(grid, result = 0) {
    if (!grid[0].length) return result;
    const maxRows = [];

    // O(r * c)
    for (const row of grid) {
        maxRows.push(Math.max(...row))
    }

    // O(r * c)
    for (let row = 0; row < grid.length; row++) {
        let index = grid[row].indexOf(maxRows[row])
        grid[row].splice(index, 1)
    }
    
    // O(r * c - 1)
    result += Math.max(...maxRows) + deleteGreatestValue(grid, result);
    return result;
};

// O((r * c log c)(r * c))
// O(r^2 c^2 loc c )
var deleteGreatestValue = function (grid) {
    // O(r * c log c)
    grid.forEach(row => row.sort((a, b) => a - b));
    let sum = 0;

    // O(c)
    while (grid[0].length) {
        let column = [];
        // O(r)
        for (let row of grid) {
            column.push(row.pop());
        }
        sum += Math.max(...column);
    }

    return sum;
};
