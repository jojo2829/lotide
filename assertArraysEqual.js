const eqArrays = require("./eqArray")

const assertArraysEqual = function(arrayA, arrayB) {

  if (eqArrays(arrayA,arrayB)) {
    console.log(`Assertion Passed: ${arrayA} === ${arrayB}`);

  } else {
    console.log(`Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1,2,3],[1,2,3]);
// assertArraysEqual([1,2,3],[3,2,1]);
