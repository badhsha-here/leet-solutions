/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "") return;
    let h = haystack.length;
    let n = needle.length;
    for (let i = 0; i <= h - n; i++) {
        if (haystack.slice(i, i + n) === needle) {
            return i
        }
    }
    return -1
};