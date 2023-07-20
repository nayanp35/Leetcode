const isEmpty = (arr) => arr.length === 0;

const lastElement = arr => arr[arr.length -1];


var asteroidCollision = function(asteroids) {
    const stack = [];
    for (let i = 0; i < asteroids.length; i++) {
        let curr = asteroids[i];
        if (isEmpty(stack)) {
            stack.push(curr);
            continue;
        }

        let last = lastElement(stack)
        if (Math.sign(last) === 1 && Math.sign(curr) === -1) {
            curr = Math.abs(curr);
            if (last < curr) {
                stack.pop();
                i--
            } else if (last === curr) {
                stack.pop();
            }
        } else {
            stack.push(curr);
        }
    }

    return stack;
};

// var asteroidCollision = function(asteroids) {
//     const copy = [...asteroids];
//     for (let i = 0; i < asteroids.length -1; i++) {
//         let curr = asteroids[i];
//         let next = asteroids[i+1];
//         if (Math.sign(curr) === 1 && Math.sign(next) === -1) {
//             next = Math.abs(next);
//             if (curr > next) {
//                 asteroids.splice(i+1, 1);
//                 i++
//             } else if (curr < next) {
//                 asteroids.splice(i, 1);
//                 i--
//             } else {
//                 asteroids.splice(i+1, 1);
//                 asteroids.splice(i, 1);
//                 i += 2;
//             }
//         }
//     }


//     if (JSON.stringify(copy) === JSON.stringify(asteroids)) {
//         return asteroids
//     } 
//     return asteroidCollision(asteroids)
// };
