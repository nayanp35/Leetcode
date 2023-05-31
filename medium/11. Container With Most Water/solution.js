var maxArea = function(height) {
 let start = 0;
  let end = height.length -1;
  let max = 0;
  while (start <= end) {
    let left = height[start];
    let right = height[end];
    if (left <= right) {
      max = Math.max(((end-start) * left), max)
      start++
    } else {
      max = Math.max(((end-start) * right), max);
      end--;
    }
  }
  return max;
}

