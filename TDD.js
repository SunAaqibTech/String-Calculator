/**
 * String Calculator Add Function - Step 1
 *
 * Takes a string containing 0, 1, or 2 numbers separated by a comma,
 * and returns their sum.
 * - An empty string returns 0.
 * - A single number string returns the number itself.
 * - A two-number string (e.g., "1,2") returns the sum.
 * Assumes valid input for this step.
 *
 * @param {string} numbers - The input string.
 * @returns {number} - The calculated sum.
 */
function Add(numbers) {
    // Step 1: Handle empty string case
    if (numbers === "") {
        return 0;
    }
  
    // Step 1: Handle one or two numbers separated by comma
    const numberStrings = numbers.split(','); // ["1"] or ["1", "2"]
  
    if (numberStrings.length === 1) {
        // Handle single number case
        return parseInt(numberStrings[0], 10);
    } else if (numberStrings.length === 2) {
        // Handle two numbers case
        const num1 = parseInt(numberStrings[0], 10);
        const num2 = parseInt(numberStrings[1], 10);
        return num1 + num2;
    }
  }
  
  // --- Simple Test Cases for Step 1 ---
  console.log(`Add("") -> Expected: 0, Got: ${Add("")}`);          // Test empty string
  console.log(`Add("1") -> Expected: 1, Got: ${Add("1")}`);          // Test one number
  console.log(`Add("1,2") -> Expected: 3, Got: ${Add("1,2")}`);       // Test two numbers
  console.log(`Add("10,25") -> Expected: 35, Got: ${Add("10,25")}`);    // Test two larger numbers
