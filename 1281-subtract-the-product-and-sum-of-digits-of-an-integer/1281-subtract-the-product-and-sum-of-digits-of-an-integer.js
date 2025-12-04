/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let s = n.toString();
    let product = 1;
    let sum = 0;
    for (let digit of s) {
        digit = Number(digit)
        product *= digit;
        sum += digit
    }

    return product - sum
};