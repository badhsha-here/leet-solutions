function twoSum(nums: number[], target: number): number[] {
    for (let i: number = 0; i < nums.length; i++) {
        for (let k: number = i + 1; k < nums.length; k++)
            if (nums[i] + nums[k] === target) {
                return [i, k]
            }
    }

};