const fs = require("readline-sync")
function longestSubstringWithoutRepeatingChars(s) {
    if (!s) {
        return 0;
    }
    
    let charSet = new Set();
    let maxLength = 0;
    let startindex = 0;
    let endindex = 0;
    
    while (endindex < s.length) {
        if (!charSet.has(s[endindex])) {
            charSet.add(s[endindex]);
            endindex++;
            maxLength = Math.max(maxLength, endindex - startindex);
        } else {
            charSet.delete(s[startindex]);
            startindex++;
        }
    }
    
    return maxLength;
}

let inputString = fs.question("Please Enter Sentence")
console.log(longestSubstringWithoutRepeatingChars(inputString));