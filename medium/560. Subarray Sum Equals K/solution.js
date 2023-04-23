function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const sums = new Map();
  sums.set(0, 1);
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sums.has(sum - k)) {
      count += sums.get(sum - k);
    }
    sums.set(sum, (sums.get(sum) || 0) + 1);
  }

  return count;
}

