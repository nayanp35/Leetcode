function pivotIndex(nums) {
    let [totalSum, leftSum] = [nums.reduce((a, c) => a + c), 0];

    for (let i = 0; i < nums.length; i++) {
        if (leftSum === totalSum - leftSum - nums[i]) return i;
        leftSum += nums[i];
    }
    return -1;
}
