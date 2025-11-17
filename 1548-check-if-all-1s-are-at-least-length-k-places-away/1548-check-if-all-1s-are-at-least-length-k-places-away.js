/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let position = -1
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 1) {
            if (position !== -1 && (i - position - 1) < k) {
                return false
            }
            position = i
        }
    }
    return true
};