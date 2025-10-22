/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
    let index = 0;
    let result = []
    while (index < arr.length) {
        result.push(arr.slice(index, index + size))
        index += size
    }
    return result
};
