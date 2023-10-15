var lowestCommonAncestor = function(root, p, q) {
    if (!root) return null;
    if (p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    } else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }
    return root;
}

// Doesn't pass all of the test cases
// var lowestCommonAncestor = function(root, p, q) {
//     const pPath = findPath(root, p)
//     const qPath = findPath(root, q)
//     let index = -1;
//     let n = Math.max(pPath.length, qPath.length);
        // find the comman path from right to left
//     for (let i = n-1; i >= 0; i--) {
//         if (pPath[i] === qPath[i] && pPath[i] !== undefined) {
//             index = i;
//             break;
//         }
//     }
//     if (index === -1) return root;
        // reassign root to the comman path
//     for (let i = 0; i <= index; i++) {
//         root = root[pPath[i]]
//     }
//     return root;
// };

// This returns an array of absolute path between root node and val node;
// function findPath(root, val) {
//     const result = []
//     let curr = root;
//     while (curr) {
//         if (curr.val === val.val) break;
//         if (val.val < curr.val) {
//             curr = curr.left;
//             result.push("left")
//         } else {
//             curr = curr.right;
//             result.push("right")
//         }
//     }
//     return result;
// }



