function uncommonFromSentences(s1: string, s2: string): string[] {
    let words: string[] = (s1 + " " + s2).split(" ");
    let frequency = {};
    let result :string[]= [];

    for (let word of words) {
        frequency[word] = (frequency[word] || 0) + 1
    }
    for (let word in frequency) {
        if (frequency[word] === 1) {
            result.push(word)
        }
    }
    return result

};