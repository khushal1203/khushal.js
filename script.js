let nums = [0, 1, 1, 1, 3, 3, 4, 5, 5, 7];

function removeDuplicates(nums) {
  if (!nums.length) {
    return 0;
  }

  let k = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

let resultLength = removeDuplicates(nums);
console.log(nums.slice(0, resultLength));