function missingNumber(nums: number[]): number {
    let n: number = nums.length;
    let sum: number = n * (n + 1) / 2;
    let x: number = 0;
    for (let i = 0; i < n; i++) {
        x = x + nums[i]
    }
    return sum - x
};