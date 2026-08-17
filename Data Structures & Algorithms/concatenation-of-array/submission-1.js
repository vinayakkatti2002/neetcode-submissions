class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n=nums.length;
        let m=2*n;
        let ans = new Array(m);
        for(let i=0;i<n;i++){
            ans[i]=nums[i];
        }
        for(let j=n;j<m;j++){
            ans[j]=nums[j-n];
        }
        return ans;
    }
}
