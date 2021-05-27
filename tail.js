// // FUNCTION IMPLEMENTATION
// let _ = require('lodash');

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let newArray = [];
  newArray = words.slice(1);
  return newArray;
};


// TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(tail(words), 3); // original array should still have 3 elements!
