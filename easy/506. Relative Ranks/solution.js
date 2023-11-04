// efficient
function findRelativeRanks(score) {
    const newScore = score.slice().sort((a, b) => b - a);
    const hashmap = new Map();
    
    for (let i = 0; i < newScore.length; i++) {
        hashmap.set(newScore[i], i);
    }

    for (let i = 0; i < score.length; i++) {
        score[i] = `${hashmap.get(score[i]) + 1}`
        if (score[i] === "1") score[i] = "Gold Medal";
        if (score[i] === "2") score[i] = "Silver Medal";
        if (score[i] === "3") score[i] = "Bronze Medal";
    }
    return score;
}


// brute force
var findRelativeRanks = function(score) {
    const result = [];
    for (let i = 0; i < score.length; i++) {
        let lowest = score[i];
        let count = 0;
        for (let j = 0; j < score.length; j++) {
            if (score[j] < lowest) {
                count++;
            }
        }
        result.push(score.length - count);
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] === 1) {
            result[i] = "Gold Medal"
        } else if (result[i] === 2) {
            result[i] = "Silver Medal"
        } else if (result[i] === 3) {
            result[i] = "Bronze Medal"
        } else {
            result[i] = String(result[i])
        }
    }
    return result;
};
