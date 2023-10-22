var flipAndInvertImage = function(image) {
    for (let i = 0; i < image.length; i++) {
        reverseAndInvert(image[i])
    }
    return image;
};

function reverseAndInvert(row) {
    for (let i = 0, j = row.length -1; i <= j; i++, j--) {
        let left = row[i] === 0 ? 1 : 0;
        let right = row[j] === 0 ? 1 : 0;
        [row[i], row[j]] = [right, left];
    }
}
