var merge = function(intervals) {
    const stack = [];
    intervals.sort((a, b) => a[0] - b[0])
    for (const interval of intervals) {
        if (!stack.length) {
            stack.push(interval);
            continue;
        }

        const last = stack[stack.length-1];

        if (last[1] >= interval[0]) {
            stack[stack.length-1][1] = Math.max(interval[1], last[1]);
            stack[stack.length-1][0] = Math.min(interval[0], last[0]);
        } else {
            stack.push(interval);
        }

    }
    return stack;
};

