class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        string ans="";
        if(strs.empty()) return "";
        sort(strs.begin(),strs.end());
        string str1=strs[0];
        string str2=strs[strs.size()-1];
        int len = min(str1.size(),str2.size());
            for(int j=0;j<len;j++){
                if(str1[j]!=str2[j]){
                    break;
                }
                ans+=str1[j];
            }
        return ans;
    }
};