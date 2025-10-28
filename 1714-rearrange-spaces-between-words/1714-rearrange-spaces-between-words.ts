function reorderSpaces(text: string): string {
    let spaceCount: number = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") spaceCount++
    }
    let words = text.trim().split(/\s+/)
    let wordsCount = words.length;


    if (wordsCount === 1) {
        return words[0] + " ".repeat(spaceCount)
    }
    let between = Math.floor(spaceCount / (wordsCount - 1));
    let end = spaceCount % (wordsCount - 1);

    return words.join(" ".repeat(between)) + " ".repeat(end)
};