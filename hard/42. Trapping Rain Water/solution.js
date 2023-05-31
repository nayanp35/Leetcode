var trap = function(height) {
    let [left, right] = [0, height.length-1];
    let [leftMax, rightMax] = [height[left], height[right]];
    let result = 0;

    while(left < right) {
        if (leftMax < rightMax) {
            left++;
            leftMax = Math.max(leftMax, height[left])
            result += (leftMax - height[left])
        } else {
            right--;
            rightMax = Math.max(rightMax, height[right]);
            result += (rightMax - height[right]);
        }
    }
    return result;
};
