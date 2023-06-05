// Problem -> Two sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// https://leetcode.com/submissions/detail/962587177/

function twoSum(nums, target) {
  const numMap = new Map(); // Hash map to store the complement of each number

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      // If the complement exists in the map, return the indices
      return [numMap.get(complement), i];
    }

    // Store the current number and its index in the map
    numMap.set(nums[i], i);
  }

  // If no solution is found, return an empty array or throw an error
  return [];
}