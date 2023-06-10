var nextGreatestLetter = function(letters, target) {
  let [left, right] = [0, letters.length-1];
  if (letters[right] <= target) return letters[left];
  if (letters[left] > target) return letters[left];
  while(left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (letters[mid] === target) {
      while(letters[mid] === target) {
        mid++;
      }
      return letters[mid];
    }
    if (target < letters[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
    return letters[left];
}
