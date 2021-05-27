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

const map = (array, callback) => {
  const results = []
  for (let item of array){
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results = map(words, word => word[0]);
console.log(results);

assertArraysEqual(map(["egg","bacon","cheese"],word => word[0]),["e","b","c"]);
assertArraysEqual(map(["egg","bacon","cheese"],word => word[0]),["e","c","a"]);
