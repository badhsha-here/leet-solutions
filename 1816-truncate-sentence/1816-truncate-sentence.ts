function truncateSentence(s: string, k: number): string {
    let sentence = s.split(' ')
    let result = sentence.slice(0, Number(k))
    return result.join(' ')
};