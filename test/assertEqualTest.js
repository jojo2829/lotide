const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns false, Lighthouse Labs !== Bootcamp", () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("returns true, 1 === 1", () => {
    assert.strictEqual(assertEqual(1, 1)); 
  });
});

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);