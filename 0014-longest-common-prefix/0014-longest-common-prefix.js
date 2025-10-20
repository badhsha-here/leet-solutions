/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length===0)  return "";

    let one = strs[0];
    for(let i=1;i<strs.length;i++){
        while(strs[i].indexOf(one)!==0){
            one=one.slice(0,-1);
            if(!one) return ""
        }
    }
return one
};