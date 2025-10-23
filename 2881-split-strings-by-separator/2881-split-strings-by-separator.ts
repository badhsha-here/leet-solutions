function splitWordsBySeparator(words: string[], separator: string): string[] {
    let result= words.join(separator).split(separator).filter(w => w.length >0)
    return result
};