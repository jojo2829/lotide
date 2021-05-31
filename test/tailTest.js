const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2 for length of[\"Yo Yo\", \"Lighthouse\", \"Labs\"] ", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result.length, 2); 
  });

  it("returns \"Labs\" for 2nd item of[\"Yo Yo\", \"Lighthouse\", \"Labs\"] ", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const result = tail(words);
    assert.strictEqual(result[1], "Labs"); 
  });
});


// const words = ["Yo Yo", "Lighthouse", "Labs"];
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(words), 3); // original array should still have 3 elements!
