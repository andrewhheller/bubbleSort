let myArray = [10, 3, 7, 4, 8, 9, 2, 5, 1, 6];

const bubbleSort = (array) => {

  // will hold swapped element while switching values if left element > right element
  let swap;

  // holds array length of inner loop
  // will be decremented after each sweep (see below)
  let arrayLen = array.length;

  // outer loop
  for(let i = 0; i < array.length; i++) {

    // decrement array length for inner loop by one
    // since last element is bubbled all the way to the right, and
    // no need to iterate to that element again
    arrayLen--;

    // flag;
    // initially set to true,
    // after each pass of array, if left element < right element, more
    // swapping needed, hence sorted will be set to false
    let sorted = true; // sorted is true

    // inner loop, use arrayLen as array length (to be decremented)
    for(let j = 0; j < arrayLen; j++) {

        // check if left element > right element
        if(array[j] > array[j + 1]) {

          // if it is, set flag to false
          sorted = false;

          // put left element in swap variable
          swap = array[j];

          // set left element = right element
          array[j] = array[j + 1];

          // set right element = swap
          array[j + 1] = swap;
        }

	  }

    // after each iteration through array,
    // check if sorted is still false (continue), or
    // if true, no more sweeps left and return array
    if(sorted) {
      return array;
    }

  }
  
  // after all sweeps return array
  return array;
}

bubbleSort(myArray);