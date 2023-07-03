// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = (nums1: number[], nums2: number[]): number[] => {
  const set = new Set(nums1);
  return nums2.filter((num) => set.delete(num));
};

intersection([1, 2, 2, 1], [2, 2]);
