const eqArrays = require("../eqArray");
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false