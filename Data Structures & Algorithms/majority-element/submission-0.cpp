class Solution {
public:
    int majorityElement(vector<int>& nums) {
        unordered_map<int,int>mpp;
        int cnt=0;
        for(int i=0;i<nums.size();i++){
            mpp[nums[i]]++;
            cnt=max(cnt,mpp[nums[i]]);
        }
        for(int i=0;i<nums.size();i++){
            if(mpp[nums[i]]==cnt){
                return nums[i];
            }
        }
        return cnt;
    }
};