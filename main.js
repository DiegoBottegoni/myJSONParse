// Importing function
const { myJSONParse } = require('./src/utils/myJSONParse.js');

// Test cases for the myJSONParse function
const testCases = [
    '{"name": "John", "age": 30, "city": "New York"}',
    '[1, 2, "three", null, true, false]',
    'true',
    'null',
    '42',
    '{"nested": {"array": [1, 2, 3], "boolean": false}}'
];

// Testing each case and logging the result
testCases.forEach((testCase) => {
    try {
        console.log(myJSONParse(testCase));
    } catch (error) {
        console.error(`Error parsing ${testCase}:`, error.message);
    }
});
