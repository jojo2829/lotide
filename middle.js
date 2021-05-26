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

const middle = function(midArray) {
  let newArray = [];
  let i = 0;

  if (midArray.length < 3) {
    return [];
  } else if (midArray.length % 2 === 0) {
    i = midArray.length / 2;
    newArray.push(midArray[i - 1],midArray[i]);
  } else if (midArray.length % 2 !== 0) {
    i = midArray.length / 2;
    newArray.push(midArray[i]);
  }
  return newArray;
};


  
middle([1,2]);
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
