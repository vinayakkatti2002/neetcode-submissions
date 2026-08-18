class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mps = new Map();
        const mpt = new Map();
        if(s.length!=t.length) return false;
        for(let i=0;i<s.length;i++){
            mps.set(s[i],(mps.get(s[i]) || 0) +1);
        }
        for(let j=0;j<t.length;j++){
           mpt.set(t[j],(mpt.get(t[j]) || 0) +1);
        }
        if(mpt.size!=mps.size) return false;

        for(const[key,value] of mps){
            if(mpt.get(key)!==value){
                return false;
            }
        }

        return true;
    }
}
