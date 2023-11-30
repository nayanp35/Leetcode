// TC: O(n * k log k) where n is the number of words and k is the length of the largest word;
function groupAnagrams(words) {
    const hashmap = {};
    for (const word of words) {
        const wordSort = word.split("").sort().join("");
        if (wordSort in hashmap) {
            hashmap[wordSort].push(word);
        } else {
            hashmap[wordSort] = [word]
        }
    }
    return Object.values(hashmap);
}


// TC: O(n * k)
function groupAnagrams(words) {
    const hashmap = {};
    for (const word of words) {
        const freq = new Array(26).fill(0);
        for (const char of word) {
            const code = char.charCodeAt() - 97;
            freq[code]++;
        }
        const freqJoined = freq.join("_");
        if (freqJoined in hashmap) {
            hashmap[freqJoined].push(word)
        } else {
            hashmap[freqJoined] = [word]
        }
    }
    return Object.values(hashmap);
}
