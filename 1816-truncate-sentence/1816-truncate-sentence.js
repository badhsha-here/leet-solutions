/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function (s, k) {
    let sentence = s.split(' ')
    let result = sentence.slice(0, Number(k))
    return result.join(' ')
};