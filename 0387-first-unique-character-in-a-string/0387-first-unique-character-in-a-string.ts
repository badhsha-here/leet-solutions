function firstUniqChar(s: string): number {
    let map = new Map()
    for (let i = s.length - 1; i >= 0; i--) {
        if (map.has(s[i])) {
            map.set(s[i], Infinity)
        }
        else {
            map.set(s[i], i)
        }
    }
    return Math.min(...map.values()) === Infinity ? -1 : Math.min(...map.values())
};