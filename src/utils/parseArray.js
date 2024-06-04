// Function to parse JSON arrays
function parseArray(jsonString, parseValue) {
    // Check if the input string starts with an opening square bracket
    if (jsonString[0] === '[') {
        // Trim the string and remove the opening square bracket
        jsonString = jsonString.slice(1).trim();
        // Initialize an empty array to store parsed values
        const result = [];

        // Check if the array is empty
        if (jsonString[0] === ']') {
            return [result, jsonString.slice(1).trim()];
        }

        // Loop through the array elements
        while (true) {
            // Parse the value using the parseValue function
            const [value, remaining] = parseValue(jsonString);
            // Add the parsed value to the result array
            result.push(value);
            // Update the string to the remaining part after parsing the value
            jsonString = remaining.trim();

            // Check if there is a comma after the value
            if (jsonString[0] === ',') {
                jsonString = jsonString.slice(1).trim();
            } else if (jsonString[0] === ']') { // Check if the array ends
                return [result, jsonString.slice(1).trim()];
            } else {
                throw new SyntaxError("Expected ',' or ']'");
            }
        }
    }
    throw new SyntaxError("Invalid array");
}

module.exports = parseArray;
