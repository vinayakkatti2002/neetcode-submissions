class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
       const mpp= new Map();
        let cnt=0;
        for(let i=0;i<nums.length;i++){
            mpp.set(nums[i],(mpp.get(nums[i])||0)+1);
            cnt=Math.max(cnt,mpp.get(nums[i]));
        }
        for(let i=0;i<nums.length;i++){
            if(mpp.get(nums[i])==cnt){
                return nums[i];
            }
        }
        return cnt;
    }
}
