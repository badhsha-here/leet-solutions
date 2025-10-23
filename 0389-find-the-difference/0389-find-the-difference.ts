function findTheDifference(s: string, t: string): string {
    for(let letter of s){
        t=t.replace(letter,'')
    }
    return t
};