var peakIndexInMountainArray = function(arr) {
    let i = 0, j = arr.length -1;

    while (i <= j) {
        let mid = (i + j) >> 1;
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid-1]) {
            return mid;
        }
        if (arr[mid] < arr[mid - 1]) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }
    }
};
