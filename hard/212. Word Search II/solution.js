var findWords = function(board, words) {
   const trie = new Trie();
   words.forEach(word => trie.addWord(word));
   let wordSet = new Set();
   let rows = board.length;
   let cols = board[0].length;

   for (let i = 0; i < rows; i++) {
       for (let j = 0; j < cols; j++) {
           if (trie.map.has(board[i][j])) {
               let node = trie.map;
               dfs(i, j, node);
           }
       }
   }

   function dfs(i, j, node) {
       if (
           i < 0 ||
           j < 0 ||
           i >= rows ||
           j >= cols ||
           !node.has(board[i][j])
       ) return;

       node = node.get(board[i][j]);
       let currChar = board[i][j];
       board[i][j] = null;

       if (node.has('isWord')) wordSet.add(node.get('isWord'));
        dfs(i + 1, j, node);
        dfs(i - 1, j, node);
        dfs(i, j + 1, node);
        dfs(i, j - 1, node);
        board[i][j] = currChar;
   }
   return [...wordSet];
};

class Trie {
    constructor() {
        this.map = new Map();
    }

    addWord(word) {
        let node = this.map;
        for (const char of word) {
            if (!node.has(char)) {
                node.set(char, new Map());
            }
            node = node.get(char);
        }
        node.set('isWord', word);
    }
}
