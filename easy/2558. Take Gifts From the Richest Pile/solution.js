
function pickGifts(gifts, k) {
    const maxHeap = new MaxHeap(gifts);
    const { nums } = maxHeap;
    for (let i = 0; i < k; i++) {
        maxHeap.leaveBehind();
    }
    return nums.reduce((a, c) => a + c, 0)
}


class MaxHeap {
  constructor(nums) {
    this.nums = nums;
    this.buildHeap();
  }

  heapify(len, index) {
    let left = index * 2 + 1;
    let right = index * 2 + 2;
    let largest = index;

    if (left < len && this.nums[left] > this.nums[largest]) {
      largest = left;
    }
    if (right < len && this.nums[right] > this.nums[largest]) {
      largest = right;
    }
    if (index !== largest) {
      this.swap(index, largest);
      this.heapify(len, largest);
    }
  }

  leaveBehind() {
    this.nums[0] = Math.floor(Math.sqrt(this.nums[0]));
    this.heapify(this.nums.length, 0);

  }

  swap(i, j) {
    const { nums } = this;
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  buildHeap() {
    let len = this.nums.length;
    let start = (len >> 1) - 1;
    for (let i = start; i >= 0; i--) {
      this.heapify(len, i);
    }
  }


}
