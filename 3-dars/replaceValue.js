const replaceValue = (nums, val) => {
  nums.map((num) => {
    let index = nums.indexOf(num);
    if (num === val) {
      nums[index] = "_";
    }
  });
  return nums;
};
nums = [1, 2, 3, 3, 4, 3];
console.log(replaceValue(nums, 3));

module.exports = { replaceValue };
