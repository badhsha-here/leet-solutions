function majorityElement(nums: number[]): number {
    let ans: {} = {}
    for (let n of nums) {
        ans[n] = (ans[n] || 0) + 1
        if (ans[n] > nums.length / 2) {
            return n
        }
    }

};