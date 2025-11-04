function findLucky(arr: number[]): number {
    let map=new Map();
    for(let num of arr){
        map.set(num,(map.get(num)||0)+1)
    }
    let max:number=-1;
    for(let[key,value]of map.entries()){
        if (key===value){
            max=Math.max(max,key)
        }
    }
    return max
};