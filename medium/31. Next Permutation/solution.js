function nextPermutation(nums) {
  let i = nums.length -2;
  while (i >= 0 && nums[i] >= nums[i + 1]) i--;
  if (i === -1) {
    reverse(nums, 0, nums.length -1);
    return;
  }
  let j = nums.length -1;
  while (nums[j] <= nums[i]) j--;
  swap(nums, i, j);
  reverse(nums, i + 1, nums.length -1);
}

function swap(nums, i, j) {
  [nums[i], nums[j]] = [nums[j], nums[i]]
}

function reverse(nums, i, j) {
  while (i <= j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
