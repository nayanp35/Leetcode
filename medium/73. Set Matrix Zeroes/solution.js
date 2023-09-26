// TC: O(n^2 * m)
// SC: O(m*n)
var setZeroes = function(matrix) {

    const copy = new Array(matrix.length);
    for (let i = 0; i < copy.length; i++) {
        copy[i] = new Array(matrix[0].length);
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === 0) {
                turnToZero(row, col);
            }
        }
    }

    function turnToZero(row, col) {
        for (let i = 0; i < matrix[0].length; i++) {
            copy[row][i] = 0;
        }

        for (let j = 0; j < matrix.length; j++) {
            copy[j][col] = 0;
        }
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (copy[row][col] === 0) {
                matrix[row][col] = 0;
            }
        }
    }

};

// TC: O(m*m)
// SC: O(1)
function setZeroes(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let firstRowHasZero = false;
    let firstColHasZero = false;

    // Check if the first row should be zeroed
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRowHasZero = true;
            break;
        }
    }

    // Check if the first column should be zeroed
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColHasZero = true;
            break;
        }
    }

    // Use the first row and first column to mark other rows and columns for zeroing
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Zero out rows based on the first column
    for (let i = 1; i < m; i++) {
        if (matrix[i][0] === 0) {
            for (let j = 1; j < n; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero out columns based on the first row
    for (let j = 1; j < n; j++) {
        if (matrix[0][j] === 0) {
            for (let i = 1; i < m; i++) {
                matrix[i][j] = 0;
            }
        }
    }

    // Zero the first row if needed
    if (firstRowHasZero) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // Zero the first column if needed
    if (firstColHasZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
