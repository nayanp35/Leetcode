// using new Map
class Trie {
    constructor(root) {
        this.root = new Map();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.get(char)) {
                node.set(char, new Map)
            }
            node = node.get(char);
        }
        node.set("isTrue", true)
    };

    traverse(word) {
        let node = this.root;
        for (const char of word) {
            node = node.get(char)
            if (!node) return null;
        }
        return node;
    }

    search(word) {
        let node = this.traverse(word);
        return !!node && !!node.get("isTrue")
    };

    startsWith(prefix) {
    let node = this.traverse(prefix);
    return !!node;
    };
}

// using regular objects
// class Trie {
//     constructor(root) {
//         this.root = {};
//     }

//     insert(word) {
//         let node = this.root;
//         for (const char of word) {
//             if (!node[char]) {
//                 node[char] = {};
//             }
//             node = node[char]
//         }
//         node.isWord = true;
//     };

//     traverse(word) {
//         let node = this.root;
//         for (const char of word) {
//             node = node[char];
//             if (!node) return null;
//         }
//         return node;
//     }

//     search(word) {
//         let node = this.traverse(word);
//         return !!node && node.isWord === true;
//     };

//     startsWith(prefix) {
//     let node = this.traverse(prefix);
//     return !!node;
//     };
// }

