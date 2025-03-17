function bubbleSort(array) {
    let swapped;
    do {
        swapped = false; //initial set
        for (let i = 0; i < array.length -1; i++ ) {
            if (array[i] > array[i+1]) { //if in wrong order, swap
                [array[i], array[i+1]] = [array[i+1], array[i]];
                swapped = true; //marking swapped
            }
        }
    }
    while (swapped); //repeating until no swaps needed because in order

    return array;
}

module.exports = bubbleSort;