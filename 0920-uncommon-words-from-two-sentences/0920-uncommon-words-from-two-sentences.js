/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
    let result = []
    let words = (s1 + " " + s2).split(" ");
    let frequency = {}

    for (let word of words) {
        frequency[word] = (frequency[word] || 0) + 1
    }
    for (let word in frequency) {
        if (frequency[word] === 1) {
            result.push(word)
        }
    }
    return result

};