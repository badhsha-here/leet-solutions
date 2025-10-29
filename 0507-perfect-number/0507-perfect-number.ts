function checkPerfectNumber(num: number): boolean {
    if (num <= 1) return false;
    let sum: number = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i
    }
    return sum===num
};