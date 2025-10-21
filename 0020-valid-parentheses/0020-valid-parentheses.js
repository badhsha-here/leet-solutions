/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const para = [];
    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i)
        switch (c) {
            case '(': para.push(')');
                break;
            case '{': para.push('}');
                break;

            case '[': para.push(']');
                break;
            default: if (c !== para.pop()) {
                return false
            }
        }
    }
    return para.length===0
};