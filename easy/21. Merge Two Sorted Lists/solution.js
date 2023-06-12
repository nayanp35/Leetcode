function mergeTwoLists(head1, head2) {
    let head = new ListNode(0);
    let merge = head;

    while(head1 && head2) {
        if (head1.val <= head2.val) {
            merge.next = head1;
            head1 = head1.next;
        } else {
            merge.next = head2
            head2 = head2.next;
        }
        merge = merge.next;
    }

    if (head1) {
        merge.next = head1
    } else {
        merge.next = head2
    }

    return head.next;
}

