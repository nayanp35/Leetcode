function findMaxAverage(nums, k) {
    let highest = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (i >= k-1) {
            highest = Math.max(highest, (sum/k));
            sum -= nums[i-k+1]
        }
    }
    return highest;
}
