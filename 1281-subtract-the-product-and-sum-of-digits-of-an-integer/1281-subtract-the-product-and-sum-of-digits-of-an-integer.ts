function subtractProductAndSum(n: number): number {
    let s = n.toString();
    let product = 1;
    let sum = 0;
    for (let digit of s) {
        let num = Number(digit);
        sum += num;
        product *= num;
    }
    return product - sum
};