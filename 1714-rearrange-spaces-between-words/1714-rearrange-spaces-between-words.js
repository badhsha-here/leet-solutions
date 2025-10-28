/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
    let len = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") len++

    }
    let words = text.trim().split(/\s+/);
    let wordCount = words.length;

    if (wordCount === 1) {
        return words[0] + " ".repeat(len)
    }
    let between = Math.floor(len / (wordCount - 1));
    let end = len % (wordCount - 1)

    return words.join(" ".repeat(between)) + " ".repeat(end)
};   