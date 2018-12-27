//概念复习 Ο(1)＜ Ο(log2n)＜ Ο(n)＜ Ο(nlog2n)＜ Ο(n2)＜ Ο(n3)＜…＜ Ο(2n)＜ Ο(n!)
/**
 * 解法一:暴力循环
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) == target)
        return [i, j];
    }
  }
};
// 执行用时148ms 时间复杂度 O(n^2)