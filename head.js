// FUNCTION IMPLEMENTATION
let _ = require('lodash');

const assertEqual = function(actual, expected) {

  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

let head = (array) => {
  return _.head(array);
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");