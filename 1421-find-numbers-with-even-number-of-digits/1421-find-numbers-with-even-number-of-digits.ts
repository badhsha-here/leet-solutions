function findNumbers(nums: number[]): number {
    let count: number = 0;
    for (let num of nums) {
        if (String(num).length % 2 === 0) {
            count++
        }
    }
    return count
};