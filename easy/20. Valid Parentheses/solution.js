var isValid = function(s) {
    const parantheses = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    const stack = [];

    for (const pair of s) {
        if (parantheses[pair]) {
            stack.push(pair);
        } else {
            const removed = stack.pop();
            if (pair !== parantheses[removed]) {
                return false;
            }
        }
    }
    return !stack.length;
};
