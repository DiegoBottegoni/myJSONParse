// Importing regular expression for matching JSON strings
const { rString } = require('./regex.js');

function parseString(jsonString) {
    const match = jsonString.match(rString);
    if (match) {
        // Remove surrounding quotes and return parsed string along with remaining string
        const value = match[0].slice(1, -1);
        return [value, jsonString.slice(match[0].length).trim()];
    }
    throw new SyntaxError("Invalid string");
}

module.exports = parseString;
