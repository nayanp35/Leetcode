var wordPattern = function(pattern, s) {
    const obj1 = {};
    const obj2 = {};

    s = s.split(" ");
    if (s.length !== pattern.length) return false;

    for (let i = 0; i < s.length; i++) {
        if (!obj2.hasOwnProperty(pattern[i])) {
            obj2[pattern[i]] = s[i]
        } else if (obj2[pattern[i]] !== s[i]) {
            return false;
        }

        if (!obj1.hasOwnProperty(s[i])) {
            obj1[s[i]] = pattern[i];
        } else if (obj1[s[i]] !== pattern[i]) {
            return false;
        }   
    }

    return true;
};
