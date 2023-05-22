function topKFrequent(nums, k) {
    const map = nums.reduce((a, c) => (a[c] = a[c] + 1 || 1, a), {})
    const mapArr = [];
    for (const key in map) {
        const obj = {key, value: map[key]};
        mapArr.push(obj);
    }
    mapArr.sort((a, b) => b.value - a.value);
    const result = [];
    for (let i = 0; i < k; i++) {
        result.push(mapArr[i].key);
    }
    return result;
};
