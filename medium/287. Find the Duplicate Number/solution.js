var findDuplicate = function(nums) {
    let [slow, fast] = [0, 0];
    let check = 0;

    while (true) {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if (fast === slow) break;
    }

    while (true) {
        slow = nums[slow];
        check = nums[check];
        if (slow === check) break;
    }

    return check;
};
