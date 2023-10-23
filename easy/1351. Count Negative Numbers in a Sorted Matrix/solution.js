 
function countNegatives(grid) {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        let left = 0, right = grid[0].length -1;
        while (left <= right) {
            let mid = (left + right) >> 1;
            if (grid[i][mid] < 0) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        count += grid[0].length - left;
    }
    return count;
}

var countNegatives = function(grid) {
    return grid.flat().reduce((a, c) => {
        if (c < 0) a++;
        return a;
    }, 0)
};


function countNegatives(grid) {
    let count = 0;
    for (const row of grid) {
        let indexOfFirstNegative = row.findIndex(num => num < 0);
        if (indexOfFirstNegative !== -1) {
            count += row.length - indexOfFirstNegative;
        }
    }
    return count;
}
