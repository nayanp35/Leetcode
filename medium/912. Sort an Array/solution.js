function heapSort(array) {
  // Build max heap
  buildMaxHeap(array);

  // Perform heap sort
  for (let i = array.length - 1; i > 0; i--) {
    // Move current root to the end of the array
    swap(array, 0, i);

    // Heapify the reduced heap
    heapify(array, i, 0);
  }

  return array;
}

function buildMaxHeap(array) {
  const len = array.length;
  const start = Math.floor(len / 2) - 1;

  for (let i = start; i >= 0; i--) {
    heapify(array, len, i);
  }
}

function heapify(array, len, index) {
  let largest = index;
  const left = 2 * index + 1;
  const right = 2 * index + 2;

  if (left < len && array[left] > array[largest]) {
    largest = left;
  }

  if (right < len && array[right] > array[largest]) {
    largest = right;
  }

  if (largest !== index) {
    swap(array, index, largest);
    heapify(array, len, largest);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}


//---------------------------------


var mergeSort = function(nums) {
    if (nums.length <= 1) return nums;
    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    return merge(mergeSort(left), mergeSort(right))
};

function merge(left, right) {
    const merged = [];
    let i = 0
    let j = 0

    while(i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        merged.push(left[i]);
        i++
    }

    while(j < right.length) {
        merged.push(right[j]);
      j++
    }

    return merged
}


