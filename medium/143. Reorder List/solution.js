var reorderList = function(head) {
    let mid = findMiddle(head);
    let reversed = reverse(mid.next);
    // break the left part
    mid.next = null;

    let left = head;
    let right = reversed;
    //merge lists in the left one
    while (right) {
        let next = left.next;
        left.next = right;
        left = right;
        right = next;
    }

}

// reversed the list from mid 
function reverse(head) {
    let prev = null;
    while (head) {
        const next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}

// Find the middle of the linked list and point to it.
function findMiddle(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast?.next?.next;
    }
    return slow;
}
