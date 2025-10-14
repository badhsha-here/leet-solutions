function isPalindrome(x: number): boolean {
    let num:string=x.toString()
    if(num === num.split('').reverse().join('')){
        return true
    }
    else{
        return false
    }

};