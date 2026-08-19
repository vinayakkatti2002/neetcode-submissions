class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let ans="";
        if(strs.length==0) return "";
        strs.sort();
        let str1=strs[0];
        let str2=strs[strs.length-1];
        let len = Math.min(str1.length,str2.length);
        for(let i=0;i<len;i++)
        {
            if(str1[i]!=str2[i])
            {
                break;
            }
            ans+=str1[i];
        }
        return ans;
    }
}
