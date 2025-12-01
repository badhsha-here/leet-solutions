function reverseVowels(s: string): string {
    let vowels: string = 'aeiouAEIOU';
    let arr:any = s.split("");
    let storage: string[] = [];

    for (let char of arr) {
        if (vowels.includes(char)) {
            storage.push(char)
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = storage.pop()
        }
    }
    return arr.join("")

};