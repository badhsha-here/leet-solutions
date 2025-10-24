function reverseStr(s: string, k: number): string {
let res:string='';
    for (let i=0;i<s.length;i+=2*k){
      let part= s.slice(i,i+k).split('').reverse().join('');
      let rest= s.slice(i+k,i+2*k);
      res+= part+rest
    }
    return res
};