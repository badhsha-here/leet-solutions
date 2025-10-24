/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    let res = '';
    for (let i = 0; i < s.length; i += 2 * k) {
        let part = s.slice(i, i + k).split('').reverse().join('');
        let rest = s.slice(i + k, i + 2 * k);
        res += part + rest
    }
    return res
};