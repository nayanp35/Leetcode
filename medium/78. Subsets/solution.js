
var subsets = function(nums, i = 0, subset = [], currSubset = []) {
    if (i === nums.length) {
        subset.push(currSubset.slice());
        return;
    }

    currSubset.push(nums[i]);
    subsets(nums, i + 1, subset, currSubset);
    currSubset.pop();
    subsets(nums, i + 1, subset, currSubset);
    return subset;
};
