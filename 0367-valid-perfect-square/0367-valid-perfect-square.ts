function isPerfectSquare(num: number): boolean {
    if (num == 1) return true;
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) return true
    }
    return false
};