var sortedArrayToBST = function(nums, start = 0, end = nums.length -1) {
    if (start > end) return null;
    const mid = (start + end) >> 1;

    const node = new TreeNode(nums[mid]);
    // Add the left node from index 0 to mid - 1
    node.left = sortedArrayToBST(nums, start, mid - 1);
    // Add the right node from index mid + 1 to end
    node.right = sortedArrayToBST(nums, mid + 1, end);
    return node;
};
