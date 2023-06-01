var evalRPN = function(tokens) {
    const stack = [];
    const operationSet = new Set(["*", "/", "+", "-"]);
    for (const num of tokens) {
        if(!operationSet.has(num)) {
            stack.push(Number(num));
            continue;
        } 
        const last = stack.pop();
        const secondLast = stack.pop();
        switch (num) {
            case "+":
                stack.push(secondLast + last);
                break;
            case "-":
                stack.push(secondLast - last);
                break;
            case "*":
                stack.push(secondLast * last);
                break;
            case "/":
                stack.push(Math.trunc(secondLast / last));
                break;
        }
    }
    return stack[0];
};
