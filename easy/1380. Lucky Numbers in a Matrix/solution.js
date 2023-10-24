var luckyNumbers  = function(matrix) {
   const result = [];
   const minSet = new Set()

   for (let i = 0; i < matrix.length; i++) {
      minSet.add(Math.min(...matrix[i]))
   } 
   
   for (let j = 0; j < matrix[0].length; j++) {
       let max = -Infinity;
       for (let i = 0; i < matrix.length; i++) {
           max = Math.max(max, matrix[i][j])
       }
       if (minSet.has(max)) result.push(max)
   }
   return result;
};
