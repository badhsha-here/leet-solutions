/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    let n = bits.length;
    if (n === 1) return true;

    let i = 0;
    while (i < n - 1) {
        i += (bits[i] ? 2 : 1);
    }
    return i === n - 1
};