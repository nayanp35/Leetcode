function arrayPairSum(nums) {
  let sum = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i += 2) {
    const pair = [nums[i], nums[i+1]];
    const min = Math.min(...pair);
    sum += min;
  }
  return sum;
}
