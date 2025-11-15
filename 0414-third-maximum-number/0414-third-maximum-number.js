/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let set = new Set(nums)
    let arr = [...set]
    let result = arr.sort((a, b) => b - a)
    if (result.length >= 3) {
        return result[2]
    }
    return result[0]
};