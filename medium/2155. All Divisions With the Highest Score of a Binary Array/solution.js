function maxScoreIndices(nums) {
    let rightOnes = nums.reduce((acc, curr) => acc + curr);
    let leftZeros = 0;
    let max = rightOnes;
    let result = [];

    for (let i = 0; i <= nums.length; i++) {
        let sum = rightOnes + leftZeros;

        if (sum > max) {
            max = sum;
            result = [i];
        } else if (sum === max) {
            result.push(i);
        }
        if (i < nums.length) {
            if (nums[i] === 0) {
                leftZeros++;
            } else {
                rightOnes--;
            }
        }
    }
    return result;
}

// brute force, runtime exceed
// var maxScoreIndices = function(nums) {
//     let max = 0;
//     let result = [];
//     for (let i = 0; i <= nums.length; i++) {
//         const left = nums.slice(0, i)
//         const right = nums.slice(i)
//         const sum = countNums(left, 0) + countNums(right, 1);
//         if (sum > max) {
//             max = sum;
//             result = [];
//             result.push(i)
//         } else if (sum === max) {
//             result.push(i);
//         }
        
//     }
//     return result;
// };
