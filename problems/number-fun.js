function returnsThree() {
  return 3;
}

function reciprocal(n) {
    // Your code here
    if (n > 1000000) {
      throw new Error("that number is too big");
    } else if (n < 1) {
      throw new Error("that number is too small");
    }
    return 1/n;
}





module.exports = {
  returnsThree,
  reciprocal
};
