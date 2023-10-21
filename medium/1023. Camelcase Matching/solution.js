
var camelMatch = function(queries, pattern) {
    return queries.map((query) => {
        let j = 0;
        for (const char of query) {
            if (j < pattern.length && char === pattern[j]) {
                j++;
            } else if (/[A-Z]/.test(char)) return false;
        }
        return j === pattern.length;
    });
};
