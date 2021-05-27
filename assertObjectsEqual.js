const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (Object.keys(actual).length === Object.keys(expected).length) {

    for (let key in actual) {
      if (expected.hasOwnProperty(key)) {
        if (Array.isArray(actual[key]) && Array.isArray(expected[key])) {
          let isEqual = true;

          if (actual[key].length !== expected[key].length) {
            isEqual = false;
          }
          for (let i = 0; i < actual[key].length; i++) {
            if (actual[key][i] !== expected[key][i]) {
              // return false;
              console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
            }
          }
          if (!isEqual)
            // return false;
              console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
        } else {
          if (actual[key] !== expected[key]) {
            // return false;
              console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
          }
        }
      } else {
        // return false;
              console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
      }
    }
    // return true;
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    // return false;
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const abc = { a: "1", b: "2", c: "3" };
const ab = { a: "1", b: "2" };
assertObjectsEqual(cd, dc); //true
assertObjectsEqual(abc, ab); //false