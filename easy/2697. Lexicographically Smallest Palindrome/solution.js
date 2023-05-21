function makeSmallestPalindrome(s) {
    const strArr = s.split("");
    let start = 0; 
    let end = strArr.length -1;
    while (start < end) {
        const leftChar = strArr[start];
        const rightChar = strArr[end];
        if (leftChar !== rightChar) {
            const smallest = smallestLex(leftChar, rightChar);
            strArr[start] = smallest
            strArr[end] = smallest;
        }
        start++;
        end--;
        if (isPalindrome(strArr)) break;
    }
    return strArr.join("");
};

function isPalindrome(s) {
    let start = 0;
    let end = s.length -1;
    while (start < end) {
        if (s[start] !== s[end]) return false;
        start++;
        end--
    }
    return true;
}

function smallestLex(a, b) {
    return a <= b ? a : b
}


