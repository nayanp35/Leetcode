var firstMissingPositive = function(nums) {
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (num > 0 && num <= n) {
            const j = num - 1;
            if (nums[j] !== num) {
                swap(nums, i, j);
                i--;
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i+1) {
            return i + 1;
        }
    }

    return n + 1;

};

function swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}
