function strStr(haystack: string, needle: string): number {
    if (needle === "") return;
    let h:number = haystack.length;
    let n:number = needle.length;
    for (let i = 0; i <= h - n; i++) {
        if (haystack.slice(i, i + n) === needle) {
            return i
        }
    }
    return -1

};