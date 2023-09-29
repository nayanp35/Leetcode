var findMin = function(nums) {
    let i = 0;
    let j = nums.length -1;
    let min = nums[0];

    while (i <= j) {
        let mid = Math.floor((i + j)/2);
        min = Math.min(min, nums[mid]);
        if (nums[mid] === nums[j]) {
            j--;
        } else if (nums[mid] > nums[j]) {
            i = mid + 1
        } else {
            j = mid - 1;
        }
    }
    return min;
}
