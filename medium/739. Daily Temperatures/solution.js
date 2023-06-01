function dailyTemperatures(temps) {
    const n = temps.length;
    const result = new Array(n).fill(0);
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && temps[stack[stack.length -1]] < temps[i]) {  
            const popped = stack.pop();
            result[popped] = i - popped;
        }
        stack.push(i)
    }
    return result;
}
