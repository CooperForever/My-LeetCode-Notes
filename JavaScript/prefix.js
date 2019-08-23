//Longest Common Prefix最长公共前缀
var longestCommonPrefix = function(strs) {
  let re = '';
  let thisChar;
  let breakflag = true;
  let j = 0;
  let min = 0;
  if (strs.length == 0) {
    return re;
  } else if (strs.length == 1) {
    return strs[0];
  }
  while (breakflag) {
    thisChar = strs[0].charAt(j);
    for (let i = 0; i < strs.length; i++) {
      min = min > strs[i].length ? min : strs[i].length;
      if (strs[i].length > re.length) {
        if (thisChar == strs[i].charAt(j)) {
          if (i == strs.length - 1) {
            re = re + thisChar;
            if (strs[i].length == 1) {
              breakflag = false;
              break;
            }
          }
        } else {
          breakflag = false;
          break;
        }
      } else {
        breakflag = false;
        break;
      }
    }
    j == min ? (breakflag = false) : j++;
  }
  return re;
};
//console.log(longestCommonPrefix(['aa', 'abc']));

console.log('str'[2]);
