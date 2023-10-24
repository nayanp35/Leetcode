
function isToeplitzMatrix(matrix) {
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            // if the curr val doesn't equal to the top left val, return false;
            if (matrix[i - 1][j - 1] !== matrix[i][j]) {
                return false;
            }
        }
    }
    return true;
}

// var isToeplitzMatrix = function(matrix) {
//     let rows = matrix.length;
//     let cols = matrix[0].length;

//     // check the first row
//     for (let j = 0; j < cols; j++) {
//         if (!traverse(0, j)) return false;
//     }

//     // check the first col
//     for (let i = 0; i < rows; i++) {
//         if (!traverse(i, 0)) return false;
//     }
//     return true;
    
//     function traverse(row, col) {
//         let curr = matrix[row][col];
//         for (let i = row, j = col; i < rows && j < cols; i++, j++) {
//             if (matrix[i][j] !== curr) return false;
//         }
//         return true;
//     }

//     // With recursion
//     // function traverse(row, col, curr) {
//     //     if (row >= rows || col >= cols) return true;
//     //     if (matrix[row][col] !== curr) return false;
//     //     return traverse(row + 1, col + 1, curr)
//     // }
// };

