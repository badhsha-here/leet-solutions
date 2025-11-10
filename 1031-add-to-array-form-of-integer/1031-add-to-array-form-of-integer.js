/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {

    let a = num.length - 1;
    let b = k;
    let result = [];

    while (a >= 0 || b > 0) {
        if (a >= 0) {
            b += num[a];
            a--
        }
        result.push(b % 10)
        b= Math.floor(b/10)
    }
   return result.reverse()
};