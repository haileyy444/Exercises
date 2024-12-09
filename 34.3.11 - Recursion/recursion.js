/** product: calculate the product of an array of numbers. */
// Write a function that finds the product of an array of numbers:
// product([2, 3, 4])   // 24
function product(nums, index = 0) {
  // return nums.reduce((running, current) => running * current,)

  if (index === nums.length) {
    return 1;
  }
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index = 0) {  
  // return words.reduce((longest, current) => Math.max(longest, current), 0)

  let longestNow = 0;
  if (index === words.length) return longestNow;
  longestNow = Math.max(words[index].length, longestNow);
  return longest(words, index + 1, longestNow);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  // return str.split('').filter((_, index) => index % 2 === 0).join('');

  let newString = "";
  if (index >= str.length) return newString;
  newString += str[index];
  return everyOther(str, index + 2, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, index = 0) {
  // const string = str.toLowerCase();
  // const reversed = string.split('').reverse().join('');
  // return string === reversed;
  let left = index;
  let right = str.length - index - 1;
  if (left >= right) return false;
  if (str[left] !== str[right]) return false;
  return isPalindrome(str, index + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, index = 0) {
  // for(let i = 0; i < arr.length; i++) {
  //   if(arr[i] === val) {
  //     return i;
  //   }

  // }
  // return -1;
  
  if (index === arr.length) return -1;
  if (arr[index] === val) return index;
  return findIndex(arr, val, index + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, index = 0, newString = "") {
  // return str.split('').reverse().join('');
  if (newString.length === string.length) return newString;
  newString += str[str.length - 1 - index];
  return reversed(str, index + 1, newString)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  // return Object.values(obj).filter(value => typeof value === 'string');
  let returnArray = [];
  for (let key in object) {
    if (typeof object[key] === "string") returnArray.push(object[key]);
    if (typeof object[key] === "object") returnArray.push(...gatherStrings(object[key]));
  }
  return returnArray;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  // let left;
  // let right = arr.length - 1;

  // for(let i = 0; i > arr.length; i++) {
  //   const mid = Math.floor((left + right) / 2);

  //   if (arr[mid] === val) {
  //     return mid;
  //   }
  //   if (arr[mid] < val) {
  //     left = mid + 1;
  //   }
  //   else {
  //     right = mid - 1;

  //   }
  // }
  // return -1;
  if (left > right) {
    return -1;
  }
  let mid = Math.floor((right + left) / 2);
  if (arr[mid] === val) {
    return mid;
  }
  if (arr[mid] > val) {
    return binarySearch(arr, val, left, mid-1);
  }
  return binarySearch(arr, val, mid +1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
