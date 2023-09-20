var minOperations = function(nums, x) {
    const targetSum = nums.reduce((acc, num) => acc + num, 0) - x;

    let maxLength = -1;
    let currentSum = 0;
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        while (currentSum > targetSum && left <= i) {
            currentSum -= nums[left];
            left++;
        }

        if (currentSum === targetSum) {
            maxLength = Math.max(maxLength, i - left + 1);
        }
    }

    if (maxLength === -1) {
        return -1;
    } else {
        return nums.length - maxLength;
    }
};
