/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let set = new Map()
    for (let i = s.length - 1; i >= 0; i--) {
        if (set.has(s[i])) {
            set.set(s[i], Infinity)
        }
        else {
            set.set(s[i], i)
        }
    }
    return Math.min(...set.values()) === Infinity ? -1 : Math.min(...set.values())
};