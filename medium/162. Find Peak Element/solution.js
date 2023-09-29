var findPeakElement = function(nums) {
    let i = 0;
    let j = nums.length -1;

    while (i < j) {
        let mid = Math.floor((i + j) / 2);
        if (nums[mid] > nums[mid+1]) {
            j = mid;
        } else {
            i = mid + 1;
        }
    }
    return i;
};
