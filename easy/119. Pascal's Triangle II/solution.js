var getRow = function(rowIndex, arr = [1]) {
    if (arr.length === rowIndex + 1) {
        return arr;
    }

    const newArr = [1];
    for (let i = 1; i < arr.length; i++) {
        const num = arr[i] + arr[i - 1];
        newArr.push(num);
    }
    newArr.push(1);
    return getRow(rowIndex, newArr);
};
