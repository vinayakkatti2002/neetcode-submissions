class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let n = nums.length;
        const mpp=new Map();
        let compliment=0;
        for(let i=0;i<n;i++)
        {
            compliment=target-nums[i];
            if(mpp.has(compliment)){
                return [mpp.get(compliment),i];
            }
            mpp.set(nums[i],i);
        }
    }
}
