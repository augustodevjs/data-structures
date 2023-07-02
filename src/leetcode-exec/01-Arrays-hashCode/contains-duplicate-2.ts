// https://leetcode.com/problems/contains-duplicate-ii

// O(N²)
const containsDuplicate2 = (nums: number[], k: number): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        return true;
      }
    }
  }

  return false;
};

// O(N)
const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (Math.abs(i - map.get(nums[i])) <= k) {
      return true;
    }

    map.set(nums[i], i);
  }

  return false;
};

containsDuplicate2([1, 2, 3, 1, 2, 3], 2);
containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
