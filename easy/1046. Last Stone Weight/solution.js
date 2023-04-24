/**
 * Finds the last stone weight remaining after repeatedly smashing the two heaviest stones together.
 * @param {number[]} stones - Array of stone weights.
 * @return {number} - The last stone weight remaining.
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1) {
        // Find the two heaviest stones
        const min1 = Math.max(...stones);
        const min1Index = stones.indexOf(min1);
        stones.splice(min1Index, 1);
        const min2 = Math.max(...stones);
        const min2Index = stones.indexOf(min2);
        stones.splice(min2Index, 1);

        // Calculate the weight difference between the two stones
        const diff = min1 - min2

        // Add the difference to the array
        stones.push(diff)
    }
    // Return the last remaining stone weight
    return stones[0]
};
