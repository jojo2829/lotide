// // FUNCTION IMPLEMENTATION
const tail = function(words) {
  let newArray = [];
  newArray = words.slice(1);
  return newArray;
};

module.exports = tail;

// TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words)); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// assertEqual(tail(words), 3); // original array should still have 3 elements!
