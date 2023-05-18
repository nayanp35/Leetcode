function minimumLength(s) {
  let left = 0;
  let right = s.length -1;
  while (left < right) {
    let leftChar = s[left];
    let rightChar = s[right];
    if (leftChar !== rightChar) break;
    // move the left pointer to the right while the characters are the same
    while (left < right && leftChar === s[left]) {
      left++;
    }
    // if they meet at the middle of the string, return 0
    if (left === right) return 0;
    // move the right pointer to the left while the characters are the same
    while (left < right && rightChar === s[right]) {
      right--;
    }
  }
  return right - left + 1;
}

