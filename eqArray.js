const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

let eqArrays = function(arrayA,arrayB) {

  if (arrayA.length === arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
      let itemA = arrayA[i];
      for (let j = 0; j < arrayB.length; j++) {
        let itemB = arrayB[j];
        if (i === j) {
          if (itemA !== itemB) {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
 
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false