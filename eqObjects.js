const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {

  if (Object.keys(object1).length === Object.keys(object2).length) {

    for (let key in object1) {
      if (object2.hasOwnProperty(key)) {
        if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
          let isEqual = true;

          if (object1[key].length !== object2[key].length) {
            isEqual = false;
          }
          for (let i = 0; i < object1[key].length; i++) {
            if (object1[key][i] !== object2[key][i]) {
              return false;
            }
          }
          if (!isEqual)
            return false;
        } else {
          if (object1[key] !== object2[key]) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(assertEqual(eqObjects(ab, ba), true)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertEqual(eqObjects(ab, abc), true)); // => false