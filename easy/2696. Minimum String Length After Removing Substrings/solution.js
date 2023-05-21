var minLength = function(s) {
    const stack = [];
    for (const char of s) {
        if (char === "B" && stack.at(-1) === "A") {
            stack.pop();
        } else if (char === "D" && stack.at(-1) === "C") {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    const result = stack.join("");
    return result === s ? result.length : minLength(result)
};
