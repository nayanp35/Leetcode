var sortColors = function(array) {
    buildMaxHeap(array);

    for (let i = array.length -1; i > 0; i--) {
        swap(array, 0, i);
        heapify(array, i, 0);
    }

    return array;
};

function buildMaxHeap(array) {
    let len = array.length;
    let start = Math.floor(len / 2) -1;

    for (let i = start; i >= 0; i--) {
        heapify(array, len, i);
    }
}

function heapify(array, len, index) {
    let largest = index;
    let left = index * 2 + 1;
    let right = index * 2 + 2;

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
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}
