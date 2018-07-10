const expect = require('chai').expect;
const sinon = require('sinon');

const bubbleSort = require('../bubblesort.js');

describe('bubblesort sorting algorithm', () => {

  it('is a function', () => {
    expect(bubbleSort).to.be.a('function');
  });

  it('returns an array', () => {
    expect(Array.isArray(bubbleSort([2, 1, 3]))).to.equal(true);
  })

  it('handles an empty array', () => {
    expect(bubbleSort([])).to.deep.equal([])
  });

});


describe('bubbleSort sorts an array', () => {

  let testArray;

  beforeEach(() => {
    testArray = [3, 5, 4, 1, 2];
  });

  it('sorts an array', () => {
    expect(bubbleSort(testArray)).to.deep.equal([1, 2, 3, 4, 5]);
  });

});

describe('spies and performance', () => {

  let bubbleSortPerformance;

  let testArray;

  let n;

  it('does not use Array.prototype.sort', function() {
    const spy = sinon.spy();
    spy(Array.prototype, 'sort');
    expect(spy.called).to.equal(false);
  });

  it('O(n^2): this test will only return a count of all passes for performance review', () =>  {

    testArray = [10, 3, 7, 4, 8, 9, 2, 5, 1, 6];

    n = testArray.length * testArray.length;

    const bubbleSortPerformance = (array) => {

      // will hold swapped element while switching values if left element > right element
      let swap;
    
      // holds array length of inner loop
      // will be decremented after each sweep (see below)
      let arrayLen = array.length;

      // counter
      let counter = 0;
    
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

            // increment counter
            counter++;
    
        }
    
        // after each iteration through array,
        // check if sorted is still false (continue), or
        // if true, no more sweeps left and return array
        // if(sorted) {
        //   return array;
        // }
    
      }
      
      return counter;

      // after all sweeps return array
      // return array;
    }

    bubbleSortPerformance(testArray);
    expect(bubbleSortPerformance(testArray)).to.equal(n);
  });

});
