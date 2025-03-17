function merge(arr1, arr2) {
    let result = [];
    let i = 0; //pointer for 1
    let j = 0; //pointer for 2

    //loop both arrays until one finishes
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        }
        else {
            result.push(arr2[j]);
            j++;
        }
    }

    //add remainder of longer arr
    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }
    return result;
}

function mergeSort(arr) {
    //pre-sorted or array length of 0
    if (arr.length <= 1) {
        return arr;
    }

    //split arr to two halves
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    //sort each half and merge back
    return merge(mergeSort(left), mergeSort(right));
}

module.exports = { merge, mergeSort};