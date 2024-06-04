// Regular expressions for different JSON elements
const rString = /^"(?:\\.|[^"\\])*"/;
const rNumber = /^-?\d+(\.\d+)?([eE][+-]?\d+)?/;
const rBoolean = /^(true|false)/;
const rNull = /^null/;
const rArray = /^\[/;
const rObject = /^\{/;

module.exports = { rString, rNumber, rBoolean, rNull, rArray, rObject };