const type = (numArr) => {
  let sum = 0;
  numArr.forEach((value) => {
    value = Number(value);
    sum += value;
  });
  if (sum) {
    return Math.round(sum / numArr.length);
  } else {
    console.log("There is a not a number value in a list!");
    return 0;
  }
};

console.log(type([1, "4", "12", true]));

module.exports = { type };
