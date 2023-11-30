
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sFreqArr = new Array(26).fill(0);
    const tFreqArr = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        const sCode = s[i].charCodeAt() - 97;
        const tCode = t[i].charCodeAt() - 97;
        sFreqArr[sCode]++;
        tFreqArr[tCode]++;
    }

    for (let i = 0; i < 26; i++) {
        if (sFreqArr[i] !== tFreqArr[i]) return false;
    }
    return true;
}


var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (const char of s) {
      map.set(char, map.get(char) + 1 || 1);
  }
  for (const char of t) {
    if (map.get(char)) map.set(char, map.get(char) - 1);
    else return false;
  }
  return true;
};
