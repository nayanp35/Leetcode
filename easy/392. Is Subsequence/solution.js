// My solution
var isSubsequence = function(subseq, str) {
    let j = 0;
    let i = 0;
    for (i; i < subseq.length; i++) {
        let currSubseq = subseq[i];
        while (j < str.length && str[j] !== currSubseq) {
            j++;
        }
        if ((j >= str.length -1 && i < subseq.length-1) ||
        str[j] !== currSubseq) {
            return false;
        }
        j++
    }
    return true;
};

// More concised solution
var isSubsequence = function(subseq, str) {
    let j = 0;
    if (subseq.length > str.length) return false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === subseq[j]) j++;
    }
    return j === subseq.length;  
};
