/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n <= 0) return false;
    if (n === 1) return true;
        let num = 4;

    while(num < n) {
        num = num * 4
    }
    return num == n
};