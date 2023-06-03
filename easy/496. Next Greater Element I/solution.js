function nextGreaterElement(nums1, nums2) {
    let n = nums1.length;
    const stack = [];
    const result = new Array(n).fill(-1);
    const map = new Map();

    for (let i = 0; i < n; i++) {
        map.set(nums1[i], i);
    }

    for (const num of nums2) {
        while(stack.length && num > stack.at(-1)) {
            const val = stack.pop();
            const indexOfVal = map.get(val);
            result[indexOfVal] = num;
        }
        
        if (map.has(num)) stack.push(num)

    }
    return result;
}
