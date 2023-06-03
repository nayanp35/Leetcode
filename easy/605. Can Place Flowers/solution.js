var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        let curr = flowerbed[i];
        let prev = flowerbed[i-1];
        let next = flowerbed[i+1];

        if (n === 0) return true;

        if (curr === 0) {
            if ((prev === 0 && next === 0) || 
               (prev === undefined && next === undefined && flowerbed[i] === 0) ||
               (prev === 0 && next === undefined) ||
               (prev === undefined && next === 0)
            ) {
                flowerbed[i] = 1;
                n--;
            }
        }
    }
    return n === 0;
};
