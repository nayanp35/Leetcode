var minWindow = function(s, t) {
    let headIndex = 0;
    let uniqueChars = 0;
    const mapCount = new Map();
    const tMap = new Map();
    const indexes = [0, 0];

    for (const char of t) {
        tMap.set(char, (tMap.get(char) + 1) || 1)
        mapCount.set(char, 0);
    }

    for (let tailIndex = 0; tailIndex < s.length; tailIndex++) {
        let tailChar = s[tailIndex];
        if (!mapCount.has(tailChar)) continue;
        let tailCount = mapCount.get(tailChar);
        if (tailCount === tMap.get(tailChar) -1) uniqueChars++;
        mapCount.set(tailChar, tailCount + 1);

        while (uniqueChars === tMap.size) {
            let tempLength = tailIndex - headIndex + 1;
            if (tempLength === t.length) {
                return s.substring(headIndex, tailIndex + 1);
            }
            const [start, end] = indexes;
            const len = end - start;
            if (len === 0 || tempLength <= len) {
                [indexes[0], indexes[1]] = [headIndex, tailIndex];
            }
            let headChar = s[headIndex];
            if (mapCount.has(headChar)) {
                let headCount = mapCount.get(headChar) - 1;
                if (headCount === tMap.get(headChar) -1) uniqueChars--;
                mapCount.set(headChar, headCount);
            }
            headIndex++;
        }
    }
    const [start, end] = indexes;
    if (start === 0 && end === 0) return "";
    return s.substring(start, end + 1);
};
