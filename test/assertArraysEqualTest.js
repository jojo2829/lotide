const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#assertArraysEqual", () => {
  it("returns true for [1,2,3]is equal to [1,2,3]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3],[1,2,3]));
  });

  it("returns false for [1,2,3] is equal to [3,2,1]", () => {
    assert.strictEqual(assertArraysEqual([1,2,3],[3,2,1])); 
  });
});

// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2,3],[3,2,1]);
