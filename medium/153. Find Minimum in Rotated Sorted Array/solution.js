var findMin = function(nums) {
    let result = nums[0];
    let start = 0;
    let end = nums.length -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        result = Math.min(result, nums[mid]);

        if (nums[mid] >= nums[end]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return result;
}
