/**
 * @param {number[]} arr array of numbers
 * @returns {number[]} the original (modified) array
 */

function minToFront(arr) {
  // your code here
}

var originalArray = [4, 6, 2, 8, 9];
var result = minToFront(originalArray);

console.log(originalArray === result);
console.log(originalArray); // should log [2, 4, 6, 8, 9]


/**
 * @param {any[]} arr an array of elements
 * @param {number} idx the index of the element to remove
 * @returns {any} the removed element
 */

function removeAt(arr, idx) {
  // your code here
}

var secondArray = [1, 2, 3, 4];
console.log(removeAt(secondArray, 1)); // should log 2

console.log(secondArray); // should log [1, 3, 4]

//STUDENTS' WORK FROM HERE
function minToFront(arr) {
    var min = arr[0];
    var minIndex = 0;
    for(var i = 1; i < arr.length; i++){
      if(min > arr[i]){
        min = arr[i];
        minIndex = i;
      }
    }
    for(var i = minIndex; i > 0; i--){
      arr[i] = arr[i-1];
    }
    arr[0] = min;
    return arr;
    // your code here
  }                   
  // [2, 4, 6, 8, 9]
  //            index  0  1  2  3  4
  var originalArray = [4, 6, 2, 8, 9];
  var result = minToFront(originalArray);
  
  console.log(originalArray === result);
  console.log(originalArray); // should log [2, 4, 6, 8, 9]
  //1. loop throught with 2 "for"
  //2. store "min" index in a var
  //3. return arr with "min" in front
  
  
 
  function removeAt(arr, idx) {
    var removedElem = arr[idx];
    for(var i = idx; i < arr.length - 1; i++){
      arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    return removedElem;
    // your code here
  }
  //                [1, 3, 4]
  //        index    0  1  2  3
  var secondArray = [1, 2, 3, 4];
  console.log(removeAt(secondArray, 1)); // should log 2
  
  console.log(secondArray); // should log [1, 3, 4]
  //1. loop througth array move values left
  //2. return removed element