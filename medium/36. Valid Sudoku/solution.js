var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        const row = {};
        const col = {}
        for (let j = 0; j < 9; j++) {
            if (board[i][j] !== ".") {
                if (!row[board[i][j]]) row[board[i][j]] = true;
                else return false; 
            }

            if (board[j][i] !== ".") {
                if (!col[board[j][i]]) col[board[j][i]] = true;
                else return false; 
            }
        }
    }
    return validateSubBoxes(board, 0, 0)
}

function validateSubBoxes(board, row, col) {
    if (row >= 9) return true;
    if (col >= 9) return validateSubBoxes(board, row+3, 0)

    const map = {};
    for (let i = row; i < row+3; i++) {
        for (let j = col; j < col+3; j++) {
            if (board[i][j] !== ".") {
                if (!map[board[i][j]]) map[board[i][j]] = true;
                else return false; 
            }
        }

    }
        return validateSubBoxes(board, row, col+3);
}


