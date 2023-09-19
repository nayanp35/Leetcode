function missingNumber(nums) {
    let xor = 0;
    for (let i = 0; i <= nums.length; i++) {
        xor ^= i;
    }

    for (const num of nums) {
        xor ^= num;
    }

    return xor;
}


var missingNumber = function(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, c) => a + c);
    return expectedSum - actualSum;
}
