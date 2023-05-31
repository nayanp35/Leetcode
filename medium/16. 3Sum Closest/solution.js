function threeSumClosest(nums, target) {
    nums.sort((a, b) => a-b);
    let closestSum = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length -2; i++) {
        let j = i+1;
        let k = nums.length-1;
        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) return sum;
            else if (sum < target) j++;
            else k--;
            if (Math.abs(sum - target) < Math.abs(closestSum-target)) {
                closestSum = sum;
            }
        }
    }
    return closestSum;
}
