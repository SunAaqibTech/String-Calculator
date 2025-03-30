/**
 * Escapes special characters in a string for use in creating a Regular Expression.
 * @param {string} str - The input string (delimiter).
 * @returns {string} - The string with special regex characters escaped.
 */
function escapeRegex(str) {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

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

function Add(numbers) {
    if (numbers === "") {
        return 0;
    }

    let delimiterRegex = /,|\n/;
    let numbersPart = numbers;

    if (numbers.startsWith("//")) {
        const newlineIndex = numbers.indexOf('\n');

        if (newlineIndex !== -1) {
            const customDelimiter = numbers.substring(2, newlineIndex);

            numbersPart = numbers.substring(newlineIndex + 1);

            const escapedDelimiter = escapeRegex(customDelimiter);

            delimiterRegex = new RegExp(escapedDelimiter);

        } else {
            console.log("done");
        }
    }

     if (numbersPart === "") {
         return 0;
     }


    const numberStrings = numbersPart.split(delimiterRegex);

    let sum = 0; 

    for (const numStr of numberStrings) {
        if (numStr.trim() === "") {
            continue;
        }

        sum += parseInt(numStr, 10);
    }

    return sum;
}

// --- Simple Test Cases for Steps 1, 2, 3 & 4 ---
console.log(`Step 1-3 Tests:`);
console.log(`Add("") -> Expected: 0, Got: ${Add("")}`);
console.log(`Add("1") -> Expected: 1, Got: ${Add("1")}`);
console.log(`Add("1,2") -> Expected: 3, Got: ${Add("1,2")}`);
console.log(`Add("1,2,3,4,5") -> Expected: 15, Got: ${Add("1,2,3,4,5")}`);
console.log(`Add("1\\n2,3") -> Expected: 6, Got: ${Add("1\n2,3")}`);

console.log(`Add("//;\\n1;2") -> Expected: 3, Got: ${Add("//;\n1;2")}`);
console.log(`Add("//*\\n1*2*3") -> Expected: 6, Got: ${Add("//*\n1*2*3")}`);
console.log(`Add("//sep\\n1sep2sep3") -> Expected: 6, Got: ${Add("//sep\n1sep2sep3")}`);
console.log(`Add("//.\\n1.2.3") -> Expected: 6, Got: ${Add("//.\n1.2.3")}`);
console.log(`Add("//[\\n1[2[3") -> Expected: 6, Got: ${Add("//[\n1[2[3")}`);
console.log(`Add("//;\\n") -> Expected: 0, Got: ${Add("//;\n")}`);
console.log(`Add("//;\\n1;;2") -> Expected: 3, Got: ${Add("//;\n1;;2")}`);
