// Importing regular expression for matching JSON numbers
const { rNumber } = require('./regex.js');

function parseNumber(jsonString) {
    const match = jsonString.match(rNumber);
    if (match) {
        // Parse number and return along with remaining string
        const value = parseFloat(match[0]);
        return [value, jsonString.slice(match[0].length).trim()];
    }
    throw new SyntaxError("Invalid number");
}

module.exports = parseNumber;
