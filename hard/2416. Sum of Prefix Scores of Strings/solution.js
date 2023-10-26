class Trie {
    constructor() {
        this.root = {};
    }

    add(word) {
        let node = this.root;
        for (const char of word) {
            if (!node[char]) {
                node[char] = {};
            }
            node = node[char];
            node.score = node.score + 1 || 1;
        }
    }

    getScore(word) {
        let node = this.root;
        let score = 0;
        for (const char of word) {
            if (!node[char]) break;
            node = node[char];
            score += node["score"];
        }
        return score;
    }
}

var sumPrefixScores = function(words) {
  let tree = new Trie();
  let result = [];
  for(let word of words){
    tree.add(word)
  }
  for(let word of words){
    result.push(tree.getScore(word));
  }
  return result;
};
