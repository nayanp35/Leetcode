/**
 * Removes consecutive duplicate characters from a string.
 * @param {string} str - The input string.
 * @returns {string} - The string with consecutive duplicate characters removed.
 */
function removeDuplicates(str) {
  const stack = []; // Initialize an empty stack to store the unique characters.
  
  // Iterate over each character in the input string.
  for (const char of str) {
    // If the last character in the stack is the same as the current character,
    // remove the last character from the stack.
    if (stack.at(-1) === char) {
      stack.pop();
    } else {
      // Otherwise, add the current character to the stack.
      stack.push(char);
    }
  }
  
  // Join the characters in the stack to form the final string.
  return stack.join("");
}
