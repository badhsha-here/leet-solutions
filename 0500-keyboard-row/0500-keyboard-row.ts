function findWords(words: string[]): string[] {
    let result: string[] = [];
    let row1 = /^[qwertyuiopQWERTYUIOP]+$/;
    let row2 = /^[asdfghjklASDFGHJKL]+$/;
    let row3 = /^[zxcvbnmZXCVBNM]+$/;

    for (let word of words) {
        if (row1.test(word) || row2.test(word) || row3.test(word))
            result.push(word)
    }
    return result

};