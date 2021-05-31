const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

//middle([1,2]);
//middle([1, 2, 3, 4]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
