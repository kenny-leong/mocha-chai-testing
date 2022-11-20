function reverseString(string) {
  let newStr = string.split("").reverse().join('')
  return newStr;
};


module.exports = reverseString;
