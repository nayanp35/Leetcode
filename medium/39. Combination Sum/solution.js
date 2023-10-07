var combinationSum = function(candidates, target) {
    const result = [];
    dfs(0, 0, [])
    return result;
    function dfs(i, sum, currSubset) {
        if (i >= candidates.length || sum > target) {
            if (sum === target) {
                result.push(currSubset.slice());
            }
            return;
        }

        // Take it with the curr index;
        sum += candidates[i];
        currSubset.push(candidates[i]);
        dfs(i, sum, currSubset)

        // Don't add the curr index;
        sum -= candidates[i];
        currSubset.pop();
        dfs(i + 1, sum, currSubset)
    }
};
