const isPalindrome = (num) => {
  let strNum = String(num);
  let reversedNum = strNum.split("").reverse().join("");
  if (reversedNum === strNum) {
    console.log("Palindrome number");
    return num;
  } else {
    console.log("Not a palindrome number");
    return "Not equal";
  }
};

console.log(isPalindrome(-121));

module.exports = { isPalindrome };
