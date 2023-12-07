import assert from "power-assert";

import capitalize from "../src/capitalize.js";

// assert(capitalize('hello!') === 'Hello!')
// assert(capitalize('') === '')
// assert(capitalize('heLlO!') === 'Hello!')
assert.equal(capitalize(' hello!'), 'Hello!')

console.log("Все тесты пройдены!");
