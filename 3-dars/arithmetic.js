const arithmeticOperation = (a, b) => {
  if (a > b) {
    return a / b;
  } else {
    return a * b;
  }
};

module.exports = {
  arithmeticOperation,
};
