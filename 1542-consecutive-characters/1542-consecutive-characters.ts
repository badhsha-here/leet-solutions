function maxPower(s: string): number {
    let max: number = 1;
    let count: number = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++
            max = Math.max(count, max)
        }
        else {
            count = 1
        }
    }
    return max
};