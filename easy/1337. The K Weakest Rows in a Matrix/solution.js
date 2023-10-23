var kWeakestRows = function(mat, k) {
    const hashmap = [];
    for (let i = 0; i < mat.length; i++) {
        let soldiers = 0;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) break;
            soldiers++;
        }
        hashmap.push({i, soldiers});
    }
    hashmap.sort((a, b) => a.soldiers - b.soldiers);
    return hashmap.map((map) => map.i).splice(0, k);
};

