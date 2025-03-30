/**
 * String Calculator Add Function 
 *
 * @param {string} numbers - The input string.
 * @returns {number} - The calculated sum.
 */
function Add(numbers) {
    // Handle empty string case (from Step 1)
    if (numbers === "") {
        return 0;
    }

    const numberStrings = numbers.split(',');

    let sum = 0; 

    for (const numStr of numberStrings) {
        sum += parseInt(numStr, 10);
    }

    return sum;
}

// --- Simple Test Cases for Step 1 & 2 ---
console.log(`Add("") -> Expected: 0, Got: ${Add("")}`);
console.log(`Add("1") -> Expected: 1, Got: ${Add("1")}`);
console.log(`Add("1,2") -> Expected: 3, Got: ${Add("1,2")}`);
console.log(`Add("10,25") -> Expected: 35, Got: ${Add("10,25")}`);
// New tests for Step 2
console.log(`Add("1,2,3") -> Expected: 6, Got: ${Add("1,2,3")}`);
console.log(`Add("10,20,30,40") -> Expected: 100, Got: ${Add("10,20,30,40")}`);
console.log(`Add("8,8,8,8,8,8") -> Expected: 48, Got: ${Add("8,8,8,8,8,8")}`);
