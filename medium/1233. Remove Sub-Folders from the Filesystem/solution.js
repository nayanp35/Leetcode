
// Using stacks
function removeSubfolders(folders) {
     folders.sort();
     const stack = [];
     for (const folder of folders) {
          if (stack.length === 0) {
               stack.push(folder);
          } else if (!folder.startsWith(stack.at(-1) + "/")){
               stack.push(folder)
          }
     }
     return stack;
}

// Using trie;
// var removeSubfolders = function(folders) {
//      const trie = new Trie();
//      const splitedFolders = folders.map(folder => {
//           const splitedFromSlash = splitFromSlash(folder);
//           trie.insert(splitedFromSlash);
//           return splitedFromSlash;
//      })
//      const removedSubfolders = splitedFolders.filter(folder => {
//           if (!trie.isSubpath(folder)) return folder
//      });  
//      return removedSubfolders.map(folder => {
//           return "/" + folder.join("/")
//      })  
// }

// function splitFromSlash(str) {
//   const result = [];
//   let curr = ""
//   for (let i = 1; i < str.length; i++) {
//     if (str[i] === "/") {
//       result.push(curr);
//       curr = "";
//     } else {
//       curr += str[i];
//     }
//   }
//   result.push(curr);
//   return result;
// }

// class Trie {
//      constructor() {
//           this.root = new Map();
//      }

//      insert(paths) {
//           let node = this.root;
//           for (const path of paths) {
//                if (!node.get(path)) {
//                     node.set(path, new Map());
//                }
//                node = node.get(path);
//           }
//           node.set("isWord", true);
//      }

//      isSubpath(paths) {
//           let node = this.root;
//           for (const path of paths) {
//               if (path.size !== 1 && !!node.get("isWord")) {
//                    return true;
//               }
//               node = node.get(path)
//           }
//           return false;
//      }

// }

// Brute force. Time limit exceeds
// var removeSubfolders = function(folder) {
//      let result = [];
//      for (let i = 0; i < folder.length; i++) {
//           let flag = true;
//           for (let j = 0; j < folder.length; j++) {
//                if (i !== j) {
//                     const iSlashes = countSlashes(folder[i])
//                     const jSlashes = countSlashes(folder[j])
//                     if (folder[i].startsWith(folder[j]) && iSlashes > jSlashes) {
//                          flag = false;
//                     }
//                } 
//           }
//           if (flag) result.push(folder[i])
//      }
//      return result;
// };

// function countSlashes(str) {
//      let count = 0;
//      for (const char of str) {
//           char === "/" && count++
//      }
//      return count;
// }
