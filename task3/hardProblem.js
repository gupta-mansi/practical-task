// Problem -> Make Array Empty
// You are given an integer array nums containing distinct numbers, and you can perform the following operations until the array is empty:

// If the first element has the smallest value, remove it
// Otherwise, put the first element at the end of the array.
// Return an integer denoting the number of operations it takes to make nums empty.

// https://leetcode.com/problems/make-array-empty/


function countOperationsToEmptyArray(nums) {
  let operations = 0;
  
  while (nums.length > 0) {
    // Find the minimum value in the array
    let minIndex = 0;
    let minValue = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < minValue) {
        minIndex = i;
        minValue = nums[i];
      }
    }
    
    // If the minimum value is at the first index, remove it
    if (minIndex === 0) {
      nums.shift();
    } else {
      // Move the first element to the end of the array
      nums.push(nums.shift());
    }
    
    operations++;
  }
  
  return operations;
}