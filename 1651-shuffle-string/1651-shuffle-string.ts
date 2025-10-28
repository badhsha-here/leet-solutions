function restoreString(s: string, indices: number[]): string {
    let ans=new Array(indices.length);
    for(let i=0;i<indices.length;i++){
        ans[indices[i]]=s[i]
    }
    return ans.join("")
};