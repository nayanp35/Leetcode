
var topKFrequent = function(words, k) {
    const freqMap = words.reduce((obj, curr) => (obj[curr] = obj[curr] + 1 || 1, obj), {});
    const arrOfObj = [];
    for (const key in freqMap) {
        arrOfObj.push({ word: key, freq: freqMap[key] });
    }
    arrOfObj.sort((a, b) => {
        if (a.freq === b.freq) {
            if (a.word < b.word) return -1;
        }
        return b.freq - a.freq;
    });

    const result = []
    for (let i = 0; i < k; i++) {
        result.push(arrOfObj[i].word)
    }
    return result;
};
