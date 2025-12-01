/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split("");
    let storage = [];

    for (let char of arr) {
        if (vowels.includes(char)) {
            storage.push(char)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = storage.pop()
        }
    }
    return arr.join("")

};