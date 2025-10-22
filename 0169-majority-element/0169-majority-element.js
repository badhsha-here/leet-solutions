/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let ans = {};
    for (n of nums) {
        ans[n] = (ans[n] || 0) + 1
        if (ans[n] > nums.length / 2) {
            return n
        }

    }
};