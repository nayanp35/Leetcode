function largestInteger(num) {
    const evenNumbers = [], oddNumbers = [];
    const nums = String(num).split("").map(Number);
    for (const num of nums) {
        if (num & 1) oddNumbers.push(num);
        else evenNumbers.push(num);
    }

    oddNumbers.sort((a, b) => a - b);
    evenNumbers.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] & 1) {
            nums[i] = oddNumbers.pop();
        } else {
            nums[i] = evenNumbers.pop();
        }
    }
    return Number(nums.join(""))

}

var largestInteger = function(num) {
    const nums = String(num).split("").map(Number);
    for (let i = 0; i < nums.length; i++) {
        let nextBigger = nums[i];
        let nextIndex = -1;
        if (nextBigger % 2 === 0) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 === 0 && nums[j] > nextBigger) {
                    nextBigger = nums[j];
                    nextIndex = j
                }
            }
        } else {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] % 2 === 1 && nums[j] > nextBigger) {
                    nextBigger = nums[j];
                    nextIndex = j;
                }
            }
        }
        if (nextBigger !== nums[i]) {
            [nums[i], nums[nextIndex]] = [nums[nextIndex], nums[i]];
        }
    }
    return Number(nums.join(""))
};
