const assertArraysEqual = require("./assertArraysEqual");

const middle = function(midArray) {
  let newArray = [];
  let i = 0;

  if (midArray.length < 3) {
    return [];
  }
  if (midArray.length % 2 === 0) {
    i = midArray.length / 2;
    newArray.push(midArray[i - 1],midArray[i]);
  }
  if (midArray.length % 2 === 1) {
    i = midArray.length / 2;
    newArray.push(midArray[i - 0.5]);
  }
  return newArray;
};

module.exports = middle;

  
// middle([1,2]);
// middle([1, 2, 3, 4]); // => [2, 3]
// middle([1, 2, 3, 4, 5]); // => [3]

// assertArraysEqual(middle([1, 2, 3, 4]), [2,3]);
// assertArraysEqual([1,2,3],[3,2,1]);
