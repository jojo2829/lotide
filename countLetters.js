const countLetters = function(string) {
  const result = {};
  
  for (let char of string) {

    if (char !== " ") {
      if (result[char]) {
        result[char] += 1;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
};

module.exports = countLetters;

// console.log(countLetters("lighthouse in the house"));
