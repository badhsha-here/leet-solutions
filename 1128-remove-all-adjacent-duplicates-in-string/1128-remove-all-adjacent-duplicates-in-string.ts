function removeDuplicates(s: string): string {
    let result: string = "";
    for (let i of s) {
        if (result.length && result[result.length - 1] === i) {
            result = result.slice(0, -1)
        }
        else {
            result += i
        }
    }
    return result
};