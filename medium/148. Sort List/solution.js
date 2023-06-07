var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  const [left, right] = splitList(head);
  const sortedLeft = sortList(left);
  const sortedRight = sortList(right);

  return merge(sortedLeft, sortedRight);
};

// Helper function to split the list into two halves
const splitList = (head) => {
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  const left = head;
  const right = slow.next;
  slow.next = null;

  return [left, right];
};

// Helper function to merge two sorted lists
const merge = (left, right) => {
  const dummy = new ListNode();
  let current = dummy;

  while (left && right) {
    if (left.val < right.val) {
      current.next = left;
      left = left.next;
    } else {
      current.next = right;
      right = right.next;
    }
    current = current.next;
  }

  if (left) {
    current.next = left;
  }
  if (right) {
    current.next = right;
  }

  return dummy.next;
};


