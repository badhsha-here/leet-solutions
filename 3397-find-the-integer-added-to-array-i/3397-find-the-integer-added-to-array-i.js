/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
     let one= nums1.sort((a,b) => a-b);
     let two= nums2.sort((a,b) => a-b);
     let x= two[0]-one[0]
     return x
};