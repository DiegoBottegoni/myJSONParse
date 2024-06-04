// Importing parsing functions
const parseString = require('./parseString.js');
const parseNumber = require('./parseNumber.js');
const parseBoolean = require('./parseBoolean.js');
const parseNull = require('./parseNull.js');
const parseArray = require('./parseArray.js');
const parseObject = require('./parseObject.js');

// Importing regular expressions for different JSON elements
const { rString, rNumber, rBoolean, rNull, rArray, rObject } = require('./regex.js');

function myJSONParse(jsonString) {
    // Main parsing function
    function parseValue(str) {
        str = str.trim();

        // Check JSON value type and call respective parsing function
        if (str.match(rString)) {
            return parseString(str);
        } else if (str.match(rNumber)) {
            return parseNumber(str);
        } else if (str.match(rBoolean)) {
            return parseBoolean(str);
        } else if (str.match(rNull)) {
            return parseNull(str);
        } else if (str.match(rArray)) {
            return parseArray(str, parseValue);
        } else if (str.match(rObject)) {
            return parseObject(str, parseValue);
        } else {
            throw new SyntaxError("Unexpected token");
        }
    }

    // Parse the entire input string
    const [result, remaining] = parseValue(jsonString);

    // Ensure there's no remaining text after parsing
    if (remaining.trim().length !== 0) {
        throw new SyntaxError("Unexpected token after JSON data");
    }

    return result;
}

module.exports = { myJSONParse };
