
// slower but take up less memory
var replaceWords = function(dictionary, sentence) {
    const sentenceSplitBySpace = sentence.split(" ");
    for (let i = 0; i < sentenceSplitBySpace.length; i++) {
        for (const word of dictionary) {
            if (sentenceSplitBySpace[i].startsWith(word)) {
                sentenceSplitBySpace[i] = word;
            }
        }
    }
    return sentenceSplitBySpace.join(" ")
};

// more memory but faster runtime
function replaceWords(dictionary, sentence) {
    // create a trie;
    const root = new Map();
    for (const word of dictionary) {
        let node = root;
        for (const char of word) {
            if (!node.has(char)) {
                node.set(char, new Map());
            }
            node = node.get(char);
        }
        node.set("word", word)
    }

    const result = [];
    for (const word of sentence.split(" ")) {
        let node = root;
        for (const char of word) {
            if (!node.has(char) || node.has("word")) {
                break;
            }
            node = node.get(char);
        }
        if (node.has("word")) {
            result.push(node.get("word"))
        } else {
            result.push(word);
        }
    }
    return result.join(" ");
}

