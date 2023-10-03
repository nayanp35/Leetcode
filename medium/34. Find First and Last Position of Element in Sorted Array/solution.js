var searchRange = function(nums, target) {
    let i = 0, j = nums.length -1;
    let result = [-1, -1]
    while (i <= j) {
        let mid = (i + j) >> 1;
        if (nums[mid] === target) {
            result[0] = mid;
            j = mid -1;
        } else if (nums[mid] > target) {
            j = mid -1;
        } else {
            i = mid + 1;
        }
    }

    i = 0, j = nums.length -1

    while(i <= j) {
        let mid = (i + j) >> 1;
        if (nums[mid] === target) {
            result[1] = mid;
            i = mid + 1;
        } else if (nums[mid] > target) {
            j = mid -1
        } else {
            i = mid + 1;
        }
    }
    return result; 
};
