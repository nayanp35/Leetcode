
// Not the most efficient
var suggestedProducts = function(products, searchWord) {
    const result = []

    products.sort();
    let prefix = "";
    for (const char of searchWord) {
        prefix += char;
        const curr = [];
        let j = 0;
        for (let i = 0; i < 3; i++) {
            while (j < products.length) {
                if (products[j].startsWith(prefix)) {
                    break;
                }
                j++;
            }
            if (products[j] && products[j].startsWith(prefix)) {
                curr.push(products[j]);
                j++;
            }
        }
        result.push(curr);
    }
    return result;
};

// Using Trie. Take up alot of space and takes more
var suggestedProducts = function(products, searchWord) {
    const trie = new Trie();
    const result = []

    products.sort().forEach(product => trie.insert(product));
    let prefix = ""
    for (const char of searchWord) {
        prefix += char;
        const words = trie.startsWith(prefix)
        result.push(words)
    }
    return result;
};

class Trie {
  constructor() {
    this.root = {};
  }

   startsWith(prefix) {
    const words = [];
    let node = this.traverse(prefix);
    if (!node) return words;

    function dfs(node, currWord) {
        if (words.length >= 3) return;
      if (node.isWord) words.push(currWord);
      for (const key in node) {
        dfs(node[key], currWord + key)
      }
    }
    dfs(node, prefix);
    return words;
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (const char of word) {
      node = node[char];
      if (!node) return null;
    }
    return node;
  }

}
