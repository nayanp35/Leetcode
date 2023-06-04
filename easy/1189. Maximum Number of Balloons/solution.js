var maxNumberOfBalloons = function(text) {
    let result = Infinity;
    const obj = {a: 0, b: 0, n: 0, l: 0, o: 0};
    
    for (const char of text) {
       if (obj.hasOwnProperty(char)) obj[char]++;
    }

    for (const key in obj) {
        if (key === "l" || key === "o") {
            obj[key] = Math.floor(obj[key] / 2);
        }
        result = Math.min(obj[key], result);
    }

    return result;
};

