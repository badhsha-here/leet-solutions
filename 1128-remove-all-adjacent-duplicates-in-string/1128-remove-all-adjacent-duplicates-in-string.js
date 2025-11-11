/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let result =""
    for (let letter of s) {
        if (result.length && result[result.length-1]===letter) {
            result= result.slice(0,-1)
        }
        else{
            result+=letter
        }
    }
    return result
};