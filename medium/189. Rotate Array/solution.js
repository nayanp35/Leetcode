

// Brute force:
var rotate = function(nums, k) {
    k = k % nums.length;
    while (k > 0) {
        let last = nums.at(-1);
        for (let i = 0; i < nums.length; i++) {
            let temp = nums[i]
            nums[i] = last;
            last = temp;
        }
        k--;
    }
    return nums;
};

// Optimized:
function rotate(nums, k) {
    k = k % nums.length;

    reverse(nums, 0, nums.length -1);
    reverse(nums, 0, k-1);
    reverse(nums, k, nums.length -1);

    return nums;
}

function reverse(nums, start, end) {
    while(start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}
