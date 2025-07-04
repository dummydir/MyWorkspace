class Solution:
    def lengthOfLongestSubString(self,s):
        l = 0
        longest = 0
        sett = set()
        n = len(s)
        
        for r in range(n):
            while s[r] in sett:
                sett.remove(s[l])
                l +=1
            
            sett.add(s[r])
            w = (r - l) + 1
            longest = max(longest,w) 
        return longest