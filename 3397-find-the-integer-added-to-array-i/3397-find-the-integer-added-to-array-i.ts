function addedInteger(nums1: number[], nums2: number[]): number {
    let one: number[] = nums1.sort((a, b) => a - b)
    let two: number[] = nums2.sort((a, b) => a - b)
    let x: number = two[0] - one[0];
    return x
};