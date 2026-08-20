class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let n=nums.length;
        let i=0,j=n-1;
        while(i<=j){
            if(nums[i]==val && nums[j]!=val){
                [nums[i],nums[j]]=[nums[j],nums[i]];
                i++;
                j--;
            }else if(nums[i]!=val){
                i++;
            }else if(nums[j]==val){
                j--;
            }
        }
        return i;
    }
}
