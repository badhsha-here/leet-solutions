function isOneBitCharacter(bits: number[]): boolean {
    let n: number = bits.length;
    if (n === 1) return true;

    let i: number = 0;
    while (i < n - 1) {
        i += (bits[i] ? 2 : 1)
    }

    return i === n - 1

};