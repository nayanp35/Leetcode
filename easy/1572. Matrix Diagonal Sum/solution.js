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

// Recursively

function diagonalSum(mat) {
    let len = mat.length;
    let total = 0;

    total += primaryDiagonal(mat);
    total += secondaryDiagonal(mat);
    if (len & 1) {
        let mid = len >> 1;
        total -= mat[mid][mid];
    }
    return total;
}

function primaryDiagonal(mat, i = 0, j = 0, total = 0) {
    if (i >= mat.length) return total;
    total += mat[i][j] + primaryDiagonal(mat, i + 1, j + 1, total);
    return total;
}

function secondaryDiagonal(mat, i = 0, j = mat.length -1, total = 0) {
    if (i >= mat.length) return total;
    total += mat[i][j] + secondaryDiagonal(mat, i + 1, j - 1, total);
    return total;
}
