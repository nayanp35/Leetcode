// Using sort
function topKFrequent(nums, k) {
    const freqCounter = nums.reduce((obj, num) => (obj[num] = obj[num] + 1 || 1, obj), {});
    return Object.entries(freqCounter)
        .sort((a, b) => b[1] - a[1])
        .map(([key]) => Number(key))
        .splice(0, k);
}


// Using max-heap
function topKFrequent(nums, k) {
    const freqCounter = nums.reduce((obj, num) => (obj[num] = obj[num] + 1 || 1, obj), {});
    const arr = [], result = []
    for (const key in freqCounter) {
        arr.push([Number(key), freqCounter[key]])
    }
    for (let i = Math.floor(arr.length) -1; i >= 0; i--) {
        maxHeapify(arr, arr.length, i);
    }

    for (let i = 0; i < k; i++) {
        result.push(arr[0][0]);
        [arr[0], arr[arr.length -1]] = [arr[arr.length -1], arr[0]];
        arr.pop();
        maxHeapify(arr, arr.length, 0);
    }
    return result;
}

function maxHeapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left][1] > arr[largest][1]) {
        largest = left;
    }
    if (right < n && arr[right][1] > arr[largest][1]) {
        largest = right;
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, n, largest);
    }
}
