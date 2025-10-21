function romanToInt(s: string): number {
    let obj:{} = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let total:number=0
    for (let i = 0; i < s.length;i++) {
        let current = obj[s[i]]
        let next = obj[s[i+1]]

        if(current<next){
             total -= current
        }
        else{
            total +=current
        }
        
        }
        return total
};