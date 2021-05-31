const eqArrays = require("../eqArray");
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for comparing [1, 2, 3], [1, 2, 3]", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
  });

  it("returns false for comparing ([1, 2, 3], [3, 2, 1]))", () => {
    assert.strictEqual(assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false));
  });
});


// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false