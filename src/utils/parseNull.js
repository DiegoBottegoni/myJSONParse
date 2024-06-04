// Importing regular expression for matching JSON null
const { rNull } = require('./regex.js');

function parseNull(jsonString) {
    const match = jsonString.match(rNull);
    if (match) {
        // Return null along with remaining string
        return [null, jsonString.slice(match[0].length).trim()];
    }
    throw new SyntaxError("Invalid null");
}

module.exports = parseNull;
