var frequencySort = function(nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  nums.sort((a, b) => {
    const freqDiff = map.get(a) - map.get(b);
    if (freqDiff !== 0) {
      return freqDiff;
    } else {
      return b - a;
    }
  });
  return nums;
};
