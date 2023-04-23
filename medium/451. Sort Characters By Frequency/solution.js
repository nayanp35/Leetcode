function frequencySort(str) {
  const hashmap = {};
  const result = [];
  for (const char of str) {
    hashmap[char] = hashmap[char] + 1 || 1;
  }
  for(const key in hashmap) {
      result.push(key.repeat(hashmap[key]));
  }
  result.sort((a, b) => b.length - a.length);
  return result.join("")
}
