// https://leetcode.com/problems/two-sum/

const twoSum = (nums: number[], target: number): number[] => {
  const output: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
        return output;
      }
    }
  }

  return [];
};

console.log(twoSum([1, 5, 6, 3], 4));
