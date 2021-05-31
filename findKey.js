const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (array, callback) => {
  let results = [];
  for (let item in array) {
    if (callback(array[item])) {
      results.push(item);
    }
  }
  return results[0];
};

module.exports = findKey;

// const object = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// console.log(findKey(object,x => x.stars === 2));

// assertEqual(findKey(object, x => x.stars === 2), "noma");
// assertEqual(findKey(object, x => x.stars === 3), "Akaleri");
// assertEqual(findKey(object, x => x.stars === 2), "Akaleri");