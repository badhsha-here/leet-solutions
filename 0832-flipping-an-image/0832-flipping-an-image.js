/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    let result = image.map(child => child.reverse().map(value => value === 1 ? 0 : 1));
    return result
};