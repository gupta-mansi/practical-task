// Problem -> Count and say
// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

// https://leetcode.com/problems/count-and-say/

var countAndSay = (n) => {
  if (n === 1) {
    return "1";
  }

  const previous = countAndSay(n - 1);

  let result = "";
  let count = 1;
  let digit = previous[0];

  for (let i = 1; i < previous.length; i++) {
    // If the current character is the same as the previous one, increase the count
    if (previous[i] === digit) {
      count++;
    } else {
      // Otherwise, concatenate the count and the digit to the result string
      result += count + digit;

      // Reset the count and digit for the new substring
      count = 1;
      digit = previous[i];
    }
  }

  // Append the count and digit of the last substring to the result
  result += count + digit;

  return result;
};