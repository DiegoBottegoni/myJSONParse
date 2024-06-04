// // Importing regular expression for matching JSON booleans
const { rBoolean } = require('./regex.js');

function parseBoolean(jsonString) {
    const match = jsonString.match(rBoolean);
    if (match) {
        // Parse boolean and return along with remaining string
        const value = match[0] === 'true';
        return [value, jsonString.slice(match[0].length).trim()];
    }
    throw new SyntaxError("Invalid boolean");
}

module.exports = parseBoolean;
