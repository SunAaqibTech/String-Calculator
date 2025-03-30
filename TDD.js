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

    let delimiterRegex = /,|\n/;
    let numbersPart = numbers;

    if (numbers.startsWith("//[")) {
        const closingBracketIndex = numbers.indexOf(']\n');
        if (closingBracketIndex !== -1) {
            const customDelimiter = numbers.substring(3, closingBracketIndex);
            numbersPart = numbers.substring(closingBracketIndex + 2);
            const escapedDelimiter = escapeRegex(customDelimiter);
            delimiterRegex = new RegExp(escapedDelimiter);
        }
    } else if (numbers.startsWith("//")) {
        const newlineIndex = numbers.indexOf('\n');
        if (newlineIndex !== -1) {
            const customDelimiter = numbers.substring(2, newlineIndex);
            numbersPart = numbers.substring(newlineIndex + 1);
            const escapedDelimiter = escapeRegex(customDelimiter);
            delimiterRegex = new RegExp(escapedDelimiter);
        }
    }

    if (numbersPart === "") {
        return 0;
    }

    const numberStrings = numbersPart.split(delimiterRegex);

    let sum = 0;
    const negativeNumbers = [];

    for (const numStr of numberStrings) {
        if (numStr.trim() === "") {
            continue;
        }
        const num = parseInt(numStr, 10);
        if (num < 0) {
            negativeNumbers.push(num);
        } else if (num <= 1000) {
            sum += num;
        }
    }

    if (negativeNumbers.length > 0) {
        throw new Error(`negatives not allowed: ${negativeNumbers.join(',')}`);
    }

    return sum;
}

// --- Test Cases for Steps 1 through 7 ---
console.log(`Step 1-3 Tests:`);
console.log(`Add("") -> Expected: 0, Got: ${Add("")}`);
console.log(`Add("1") -> Expected: 1, Got: ${Add("1")}`);
console.log(`Add("1,2") -> Expected: 3, Got: ${Add("1,2")}`);
console.log(`Add("1,2,3,4,5") -> Expected: 15, Got: ${Add("1,2,3,4,5")}`);
console.log(`Add("1\\n2,3") -> Expected: 6, Got: ${Add("1\n2,3")}`);

console.log(`\nStep 4 Tests:`);
console.log(`Add("//;\\n1;2") -> Expected: 3, Got: ${Add("//;\n1;2")}`);
console.log(`Add("//*\\n1*2*3") -> Expected: 6, Got: ${Add("//*\n1*2*3")}`);
console.log(`Add("//sep\\n1sep2sep3") -> Expected: 6, Got: ${Add("//sep\n1sep2sep3")}`);
console.log(`Add("//.\\n1.2.3") -> Expected: 6, Got: ${Add("//.\n1.2.3")}`);
console.log(`Add("//[\\n1[2[3") -> Expected: 6, Got: ${Add("//[\n1[2[3")}`);
console.log(`Add("//;\\n") -> Expected: 0, Got: ${Add("//;\n")}`);
console.log(`Add("//;\\n1;;2") -> Expected: 3, Got: ${Add("//;\n1;;2")}`);

console.log(`\nStep 5 Tests:`);
try {
    Add("-1,2");
} catch (error) {
    console.log(`Add("-1,2") -> Expected Error: negatives not allowed: -1, Got Error: ${error.message}`);
}

try {
    Add("2,-4,-5");
} catch (error) {
    console.log(`Add("2,-4,-5") -> Expected Error: negatives not allowed: -4,-5, Got Error: ${error.message}`);
}

try {
    Add("//;\\n1;-2;3;-4");
} catch (error) {
    console.log(`Add("//;\\n1;-2;3;-4") -> Expected Error: negatives not allowed: -2,-4, Got Error: ${error.message}`);
}

console.log(`Add("1,2,3") -> Expected: 6, Got: ${Add("1,2,3")}`);

console.log(`\nStep 6 Tests:`);
console.log(`Add("2,1001") -> Expected: 2, Got: ${Add("2,1001")}`);
console.log(`Add("1001,2") -> Expected: 2, Got: ${Add("1001,2")}`);
console.log(`Add("2,1000") -> Expected: 1002, Got: ${Add("2,1000")}`);
console.log(`Add("1000,2") -> Expected: 1002, Got: ${Add("1000,2")}`);
console.log(`Add("1001,1002,3") -> Expected: 3, Got: ${Add("1001,1002,3")}`);
console.log(`Add("//;\\n2;1001") -> Expected: 2, Got: ${Add("//;\n2;1001")}`);

console.log(`\nStep 7 Tests:`);
console.log(`Add("//[***]\\n1***2***3") -> Expected: 6, Got: ${Add("//[***]\n1***2***3")}`);
console.log(`Add("//[--]\\n1--2--3") -> Expected: 6, Got: ${Add("//[--]\n1--2--3")}`);
console.log(`Add("//[abc]\\n1abc2abc3") -> Expected: 6, Got: ${Add("//[abc]\n1abc2abc3")}`);
console.log(`Add("//[.]\\n1.2.3") -> Expected: 6, Got: ${Add("//[.]\n1.2.3")}`);
console.log(`Add("//[[[]]\\n1[[[]2[[[]3") -> Expected: 6, Got: ${Add("//[[[]]\n1[[[]2[[[]3")}`);
