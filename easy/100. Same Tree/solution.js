// Depth first search
var isSameTree = function(p, q) {
    // If both nodes are null, they are the same.
    if (!p && !q) return true;
    
    // If one node is null and the other is not, they are not the same.
    if (!p || !q) return false;
    
    // If the values of the current nodes are not equal, they are not the same.
    if (p.val !== q.val) return false;
    
    // Recursively check the left and right subtrees.
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Breadth first search
function isSameTree(a, b) {
    // if (one node is null and other is not, they are not the same)
    if ((!a && b) || (!b && a)) return false;
    // if (both are null, they are the same)
    if (!a && !b) return true;
    const queueA = [a];
    const queueB = [b];

    while (queueA.length && queueB.length) {
        if (queueA.length !== queueB.length) return false;
        // Remove the first node from both queue
        const nodeA = queueA.shift();
        const nodeB = queueB.shift();
        // If the of both removed node is not the same, they are not the same
        if (nodeA.val !== nodeB.val) return false;
        if ((nodeA.left && !nodeB.left) || nodeB.left && !nodeA.left) {
            return false
        } else {
            // push left node into the queue
            if (nodeA.left && nodeB.left) {
                queueA.push(nodeA.left)
                queueB.push(nodeB.left)
            }
        }
        if ((nodeA.right && !nodeB.right) || nodeB.right && !nodeA.right) {
            return false
            //push right nod into the queue
        } else {
            if (nodeA.right && nodeB.right) {
                queueA.push(nodeA.right)
                queueB.push(nodeB.right)
            }
        }
    }

    // if the while loop reaches the end, they are the identicle tree
    return true;
}
