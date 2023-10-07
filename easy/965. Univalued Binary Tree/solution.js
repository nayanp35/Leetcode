var isUnivalTree = function(root, rootVal = root.val) {
        if (!root) return true;
        if (root.val !== rootVal) return false;
        return (isUnivalTree(root.left, rootVal) && isUnivalTree(root.right, rootVal))
};
