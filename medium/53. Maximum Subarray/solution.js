function maxSubArray(arr) {
    let sum = 0;
    let result = -Infinity;

    for (const num of arr) {
        sum += num;
        result = Math.max(result, sum);
        if (sum < 0) {
            sum = 0;
        }
    }
    return result;
}

