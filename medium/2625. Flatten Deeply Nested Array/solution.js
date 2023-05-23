function flat(arr, n) {
    const result = [];
    function recursion(arr, depth) {
        for (const el of arr) {
            if (Array.isArray(el) && depth < n) {
                recursion(el, depth+1);
            } else {
                result.push(el);
            }
        }
    }
    recursion(arr, 0);
    return result;
}
