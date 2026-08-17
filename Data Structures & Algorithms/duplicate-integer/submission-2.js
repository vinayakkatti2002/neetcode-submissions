class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let n=nums.length;
        nums.sort();
        for(let i=1;i<n;i++)
        {
            if(nums[i]==nums[i-1]){
                return true;
            }
        }
        return false;
    }
}
