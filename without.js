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

const without = function(source, itemsToRemove) {
  let newArray = [];

  for (let i = 0; i < source.length; i++) {
    let itemA = source[i];
    for (let j = 0; j < itemsToRemove.length; j++) {
      let itemB = itemsToRemove[j];
      if (itemA !== itemB) {
        newArray.push(itemA);
      }
    }
  }
  return newArray;
};

console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);