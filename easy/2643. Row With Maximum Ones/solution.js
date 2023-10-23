var rowAndMaximumOnes = function(mat) {
    let numOfMaxOnes = 0;
    let indexWithMaxOnes = 0;

    for (let i = 0; i < mat.length; i++) {
        let onesCount = 0;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) onesCount++;
        }
        if (onesCount > numOfMaxOnes) {
            numOfMaxOnes = onesCount;
            indexWithMaxOnes = i;
        }
    }

    return [indexWithMaxOnes, numOfMaxOnes]
};
