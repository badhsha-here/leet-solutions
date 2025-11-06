function isPowerOfFour(n: number): boolean {
    if (n <= 0) return false;
    if (n === 1) return true;
    let num: number = 4;
    while (num < n) {
        num = num * 4
    }
    return num == n
};