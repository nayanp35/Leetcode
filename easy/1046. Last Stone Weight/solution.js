// library syntax;
var lastStoneWeight = function(stones) {
    const queue = new MaxPriorityQueue();
    
    for (const stone of stones) queue.enqueue(stone)
    
    while (queue.size() > 1) {
        let first = queue.dequeue().element;
        let second = queue.dequeue().element;
        if (first !== second) queue.enqueue(first-second)
    }
    
    return queue.size() === 0 ? 0 : queue.front().element
};

// brute force
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        const min1 = Math.max(...stones);
        stones.splice( stones.indexOf(min1), 1);
        const min2 = Math.max(...stones);
        stones.splice(stones.indexOf(min2), 1);
        const diff = min1 - min2
        stones.push(diff)
    }
    return stones[0]
};


// my implematation of heap
function lastStoneWeight(stones) {
    const maxHeap = new MaxHeap();
    const { heap } = maxHeap;
    stones.forEach(stone => maxHeap.add(stone));

    while (heap.length > 1) {
        const max1 = maxHeap.remove();
        const max2 = maxHeap.remove();
        if (max1 !== max2) {
            maxHeap.add(max1 - max2);
        }
    }
    if (!heap.length) return 0;
    return heap[0];
}

class MaxHeap {
  constructor() {
    this.heap = []
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }
  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.heap.length;
  }
  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.heap.length;
  }
  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }
  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }
  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }
  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  // Functions to create Max Heap

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  peek() {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Removing an element will remove the
  // top element with the highest priority, then
  // heapifyDown will be called
  remove() {
    if (this.heap.length === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  printHeap() {
    var heap = ` ${this.heap[0]} `;
    for (var i = 1; i < this.heap.length; i++) {
      heap += ` ${this.heap[i]} `;
    }
    console.log(heap);
  }
}
