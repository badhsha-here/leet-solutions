function climbStairs(n: number): number {
    if (n <= 2) return n;
    let a: number = 1;
    let b: number = 2;
    for (let i:number = 3; i <= n; i++) {
         let c =a+b;
         a=b;
         b=c;
    }
    return b
};