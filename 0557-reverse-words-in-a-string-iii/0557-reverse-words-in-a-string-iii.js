/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 let x=s.split(" ").map(word=> word.split("").reverse().join(""))
return x.join(" ").trim()
};