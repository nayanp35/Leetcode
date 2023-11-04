var fillCups = function(amount) {
    let total = 0;
    let max = 0;
    for (let i = 0; i < amount.length; i++) {
        max = Math.max(max, amount[i]);
        total += amount[i];
    }
	
	// if max cups bigger or equal to the sum of remain two smaller cups, then max cups will cover all number of cups we needed.
    if (max >= total - max) return max;
    return Math.ceil(total / 2);
};

var fillCups = function(amount) {
    let count = 0;
    while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
        amount.sort((a, b) => b - a);
        amount[0]--;
        amount[1]--;
        count++;
    }
    return count;
};
