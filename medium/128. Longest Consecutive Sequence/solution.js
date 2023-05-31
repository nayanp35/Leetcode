function longestConsecutive(nums) {
    let maxSeq = 0;
    const set = new Set(nums);
    for (const num of set) {
        if (set.has(num-1)) continue;
        let currNum = num;
        let score = 1;
        while (set.has(currNum+1)) {
            currNum++;
            score++;
        }
        maxSeq = Math.max(maxSeq, score)
    }
    return maxSeq;
}
