// https://leetcode.com/problems/contains-duplicate/

// O(N²)
const containsDuplicate = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// O(n)
const containsDuplicateVersion01 = (nums: number[]): boolean => {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
};

// O(n)
const containsDuplicateVersion02 = (nums: number[]): boolean => {
  const set = new Set(nums);
  return set.size !== nums.length;
};

containsDuplicate([1, 1, 1, 2, 4, 5, 6, 7, 8, 9]);
containsDuplicateVersion01([1, 2, 4, 5, 6, 7, 8, 9, 9]);
containsDuplicateVersion02([1, 2, 4, 5, 6, 7, 8, 9, 9]);
