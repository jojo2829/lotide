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

assertArraysEqual([1,2,3],[1,2,3]);
assertArraysEqual([1,2,3],[3,2,1]);
