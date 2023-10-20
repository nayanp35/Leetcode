
var lexicalOrder = function(n) {
    const result = [];
    for (let i = 1; i <= n && i <= 9; i++) {
        result.push(i);
        dfs(i);
    }
    return result;

    function dfs(baseIndex) {
        let timesTen = baseIndex * 10;
        if (timesTen > n) return;
        
        for (let i = timesTen; i < timesTen + 10 && i <= n; i++) {
            result.push(i);
            dfs(i);
        }
    }
    
}


// Brute force. Takes O(n log n)
// var lexicalOrder = function(n) {
//   const oneToN = [];
//   for (let i = 1; i <= n; i++) {
//       oneToN.push((i));
//   }  
//   return oneToN.sort();
// //   return oneToN.map(Number)
// };
