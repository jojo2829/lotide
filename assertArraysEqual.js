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

const assertArraysEqual = function(arrayA, arrayB) {

  if (eqArrays(arrayA,arrayB)) {
    console.log(`Assertion Passed: ${arrayA} === ${arrayB}`);

  } else {
    console.log(`Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
