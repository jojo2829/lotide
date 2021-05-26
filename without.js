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

const assertArraysEqual = function(arrayA, arrayB) {

  if (arrayA.length === arrayB.length) {
    for (let i = 0; i < arrayA.length; i++) {
      let itemA = arrayA[i];
      for (let j = 0; j < arrayB.length; j++) {
        let itemB = arrayB[j];
        if (i === j) {
          if (itemA !== itemB) {
            console.log(`Assertion Failed: ${arrayA} !== ${arrayB}`);
            return;
          }
        }
      }
    }
    console.log(`Assertion Passed: ${arrayA} === ${arrayB}`);
    return;
  } else {
    console.log(`Assertion Failed: ${arrayA} !== ${arrayB}`);
    return;
  }
};

console.log(without([1, 2, 3], [1]));
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);