// Importing regular expression for matching JSON strings
const parseString = require('./parseString.js');

// Function to parse JSON objects
function parseObject(jsonString, parseValue) {
    // Check if the input string starts with an opening curly brace
    if (jsonString[0] === '{') {
        // Trim the string and remove the opening curly brace
        jsonString = jsonString.slice(1).trim();
        // Initialize an empty object to store key-value pairs
        const result = {};

        // Check if the object is empty
        if (jsonString[0] === '}') {
            return [result, jsonString.slice(1).trim()];
        }

        // Loop through the key-value pairs
        while (true) {
            // Check if the key is a string
            if (jsonString[0] !== '"') {
                throw new SyntaxError("Expected '\"'");
            }
            // Parse the key using the parseString function
            const [key, remainingAfterKey] = parseString(jsonString);
            // Update the string to the remaining part after parsing the key
            jsonString = remainingAfterKey.trim();

            // Check if there is a colon after the key
            if (jsonString[0] !== ':') {
                throw new SyntaxError("Expected ':'");
            }
            // Trim the string and remove the colon
            jsonString = jsonString.slice(1).trim();
            // Parse the value using the parseValue function
            const [value, remainingAfterValue] = parseValue(jsonString);
            // Add the key-value pair to the result object
            result[key] = value;
            // Update the string to the remaining part after parsing the value
            jsonString = remainingAfterValue.trim();

            // Check if there is a comma after the value
            if (jsonString[0] === ',') {
                jsonString = jsonString.slice(1).trim();
            } else if (jsonString[0] === '}') { // Check if the object ends
                return [result, jsonString.slice(1).trim()];
            } else {
                throw new SyntaxError("Expected ',' or '}'");
            }
        }
    }
    throw new SyntaxError("Invalid object");
}

module.exports = parseObject;
