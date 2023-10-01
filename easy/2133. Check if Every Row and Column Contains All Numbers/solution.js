var checkValid = function(matrix) {
    let n = matrix.length;
    // checkrows
    for (let i = 0; i < n; i++) {
        const set = new Set(matrix[i]);
        if (set.size !== n) return false;
    }

    for (let j = 0; j < n; j++) {
        const set = new Set();
        for (let i = 0; i < n; i++) {
            if (set.has(matrix[i][j])) return false;
            set.add(matrix[i][j])
        }
    }
    return true;
  };
