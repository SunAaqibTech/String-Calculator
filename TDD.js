/**
 * String Calculator Add Function 
 *
 * @param {string} numbers - The input string.
 * @returns {number} - The calculated sum.
 */
function Add(numbers) {
    if (numbers === "") {
        return 0;
    }

    const numberStrings = numbers.split(/,|\n/);

    let sum = 0; // Initialize the sum

    for (const numStr of numberStrings) {
        sum += parseInt(numStr, 10);
    }

    // Return the total sum
    return sum;
}

// --- Simple Test Cases for Steps 1, 2 & 3 ---
console.log(`Add("") -> Expected: 0, Got: ${Add("")}`);
console.log(`Add("1") -> Expected: 1, Got: ${Add("1")}`);
console.log(`Add("1,2") -> Expected: 3, Got: ${Add("1,2")}`);
console.log(`Add("1,2,3,4,5") -> Expected: 15, Got: ${Add("1,2,3,4,5")}`);
// New tests for Step 3
console.log(`Add("1\\n2") -> Expected: 3, Got: ${Add("1\n2")}`);
console.log(`Add("1\\n2,3") -> Expected: 6, Got: ${Add("1\n2,3")}`);
console.log(`Add("10,20\\n30") -> Expected: 60, Got: ${Add("10,20\n30")}`);
console.log(`Add("5\\n5\\n5") -> Expected: 15, Got: ${Add("5\n5\n5")}`);
