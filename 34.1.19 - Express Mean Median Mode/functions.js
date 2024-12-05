

function validateNums(stringNums) {
    let result = [];
    for (let i = 0; i< stringNums.length; i++) {
        let valNumber = Number(stringNums[i]);
        if (Number.isNaN(valNumber)) {
            return new Error(`The value ${stringNums[i]} at index ${i} is not a valid number`);
        }
        result.push(valNumber);
    }
    return result;
}
// total of numbers divided by length
function findMean(nums) {
    if(nums.length === 0) return 0;
    return nums.reduce(function (sum, current) {
        //reduce sums all the numbers in the array together - sum so far + current indx
        return sum + current;
    }) / nums.length
}
// middle val
function findMedian(nums) {
    nums.sort((a,b) => a-b);

    let middle = Math.floor(nums.length/2);
    
    if (nums.length % 2 === 0) {
        median = (nums[middle] + nums[middle-1]) /2;
    }
    else {
        median = nums[middle];
    }
    return median;
}
// most reocccuring value
function findMode(array) {
    let occuranceCount = occurance(array);

    let count = 0;
    for (let key in occuranceCount) {
        if (occuranceCount[key] > count) {
            mostNum = key;
            count = occuranceCount[key]
        }
    }
    return +mostNum;
}
function occurance(array) {
    return array.reduce(function(sum, next) {
        sum[next] = (sum[next] || 0) +1;
        return sum;
    }, {});
}


module.exports = {validateNums, findMean, findMedian, findMode}