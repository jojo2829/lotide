const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4, 5]), [ 3 ]));
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.strictEqual(assertArraysEqual(middle([1, 2, 3, 4]), [ 2, 3 ]));
  });
});

//middle([1,2]);
//middle([1, 2, 3, 4]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// assertArraysEqual(middle([1, 2, 3]), [2]);
