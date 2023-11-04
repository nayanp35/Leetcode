function minimumOperations(nums) {
  nums.sort((a, b) => a-b);
  let count = 0;
  let last = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - last > 0) {
        count++;
        last = nums[i];
    }
  }
  return count;
}
