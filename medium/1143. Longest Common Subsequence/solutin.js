var longestCommonSubsequence = function(text1, text2) {
    let res = 0;
    const m = text1.length;
    const n = text2.length;
    const matrix = Array(m)
    for (let i = 0; i <= m; i++) {
        matrix[i] = Array(n + 1);
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i === 0) matrix[0][j] = 0;
            else if (j === 0) matrix[i][0] = 0
            else if (text1[i - 1] === text2[j - 1]) {
                matrix[i][j] = 1 + matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.max(matrix[i - 1][j], matrix[i][j-1]);
            }
            res = Math.max(res, matrix[i][j])
        }
    }
    return res;
};

