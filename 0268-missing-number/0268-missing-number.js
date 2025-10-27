/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let n = nums.length;
    let sum = n * (n + 1)/2;
    let x = 0;
    for (let i = 0; i < n; i++) {
        x = x + nums[i]
    }
    return sum - x
};