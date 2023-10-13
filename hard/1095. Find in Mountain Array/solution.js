var findInMountainArray = function(target, mountainArr) {
    let length = mountainArr.length();
    let left = 0;
    let right = length -1;

    // Find the peak index
    while (left <= right) {
        let mid = (left + right) >> 1;
        let midLeft = mountainArr.get(mid-1)
        const midValue = mountainArr.get(mid);
        if (midValue > midLeft && midValue > mountainArr.get(mid+1)) {
            left = mid;
            break;
        } else if (midValue > midLeft) {
            left = mid + 1
        } else {
            right = mid -1
        }
    }

    // Search for a target in an ascending part
    const peak = left;
    left = 0;
    right = peak;

    while (left <= right) {
        let mid = (left + right) >> 1;
        const midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Search for a target in a descending part
    left = peak + 1;
    right = length -1;

    while (left <= right) {
        let mid = (left + right) >> 1;
        const midValue = mountainArr.get(mid);
        if (midValue === target) {
            return mid;
        } else if (midValue > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // return -1 if not found;
    return -1;
};
