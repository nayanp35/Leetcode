class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.hashmap = new Map();
    this.ll = new LinkedList();
  }
  
  put(key, value) {
    if (this.hashmap.has(key)) {
      const curr = this.hashmap.get(key);
      curr.value = value;
      this.hashmap.set(key, curr);
      this.ll.update(this.hashmap.get(key));
    } else {
      const node = new Node(key, value);
      this.hashmap.set(key, node);
      this.ll.insert(node);
    }
    if (this.hashmap.size > this.capacity) {
      const keyToRemove = this.ll.pop();
      this.hashmap.delete(keyToRemove);
    }
  }
  
  get(key) {
    if (this.hashmap.has(key)) {
      this.ll.update(this.hashmap.get(key));
      return this.hashmap.get(key).value;
    }
    return -1;
  }
}

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
  insert(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  }
  
  pop() {
    if (!this.tail) return null;
    const { key } = this.tail
    if (this.tail.key === this.head.key) {
      this.head = null;
      this.tail = null;
      return key;
    }
    this.tail = this.tail.prev;
    this.tail.next = null;
    return key;
  }
  
  update(node) {  
    if (this.head.key === node.key && this.tail.key === node.key || this.head.key === node.key) {
      this.head.value = node.value;
      return;
    } 
    if (this.tail.key === node.key) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev; 
    }
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.head.value = node.value;
  }
  
  print() {
    let curr = this.head;
    let result = '';
    while (curr) {
      result += `[${curr.key}, ${curr.value}] -> `;
      curr = curr.next;
    }
    result += 'null';
    console.log(result);
  }
}
