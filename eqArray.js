const assertEqual = require('./assertEqual');

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false
