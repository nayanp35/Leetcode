var searchMatrix = function(matrix, target) {
    let row = matrix.length;
    let col = matrix[0].length;
    let start = 0;
    let end = row * col -1;
    while (start <= end) {
        let mid = Math.floor((start+end) / 2);
        let midValue = matrix[Math.floor(mid/col)][mid%col];
        if (midValue === target) return true;
        if (midValue > target) end = mid - 1;
        else start = mid + 1;
    }
    return false;
};
