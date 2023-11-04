function leastInterval(tasks, n) {
    let len = tasks.length;
    const freq = Array(26).fill(0);
    for (const task of tasks) {
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    freq.sort((a, b) => b - a);
    let maxFreq = freq[0] -1;
    let idleSlots = maxFreq * n;

    for (let i = 1; i < freq.length; i++) {
        idleSlots -= Math.min(maxFreq, freq[i]);
    }
    return idleSlots > 0 ? idleSlots + len : len;
}
