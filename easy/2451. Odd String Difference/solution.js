var oddString = function(words) {
    const pairMap = {};
    for (const word of words) {
        let key = "";
        for (let i = 1; i < word.length; i++) {
            key += word[i].charCodeAt() - word[i-1].charCodeAt();
        }
        if (pairMap.hasOwnProperty(key)) {
            pairMap[key].words.push(word);
        } else {
            pairMap[key] = {
                words: [word]
            }
        }
    }

    for (const key in pairMap) {
        if (pairMap[key].words.length === 1) {
            return pairMap[key].words[0];
        }
    }

    return Object.entries(pairMap)[0][1].words.at(-1);
};
