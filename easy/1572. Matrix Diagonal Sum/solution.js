var diagonalSum = function(mat) {
    let len = mat.length;
    let total = 0;

    for (let i = 0, j = 0; i < len && j < len; i++, j++) {
        total += mat[i][j];
    }
    
    for (let i = 0, j = len -1; i < len && j >= 0; i++, j--) {
        total += mat[i][j];
    }
    
    if (len & 1) {
        let mid = len >> 1;
        total -= mat[mid][mid];
    }
    return total;
};
