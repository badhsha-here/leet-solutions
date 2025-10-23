/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let result= words.join(separator).split(separator).filter(w=> w.length>0)
    return result
};