/**
 * @param {array} arr an array of elements
 * @param {any} elem an element to add to the end of the array
 * @returns {array} the original (modified) array
 */

function push(arr, elem) {
  // your code here
}

var originalArray = [1];

var result = push(originalArray, 2);

console.log(result === originalArray); // should log true
console.log(result); // should log [1, 2]


/**
 * @param {array} arr an array of elements
 * @param {any} elem an element to add to the front of the array
 * @returns {array} the original (modified) array
 */

function pushFront(arr, elem) {
  // your code here
}

var secondArray = [4];

var result2 = pushFront(secondArray, 3);

console.log(result2 === secondArray); // should log true
console.log(result2); // should log [3, 4]


/**
 * ** BONUS **
 * @param {number[]} intArray an array of integers
 * @returns {number[]} a new array with all the numbers EXCEPT the first increased by 7
 */

function addSevenToMost(intArray) {
  // your code here
}

console.log(addSevenToMost([1, 2, 3, 4]));
// should log [1, 9, 10, 11]

console.log(addSevenToMost([2, 5, 7]));
// should log [2, 12, 14]


// STUDENTS' WORK FROM HERE
function push(arr, elem) {
    arr[arr.length] = elem;
    return arr;
    //           [1,2] // your code here
  }
  
  var originalArray = [1,9,3,10,5];
  // index             0 1 2  3 4
  var result = push(originalArray, 2);
  
  console.log(result === originalArray); // should log true
  console.log(result); // should log [1, 2]

  //ANOTHER STUDENT'S
  function pushFront(arr, elem) {
    for(var i = arr.length; i >= 1; i--){
      arr[i] = arr[i-1];
    }
    arr[0] = elem;
    return arr;
  }


  var secondArray = [4,2,7];

  var result2 = pushFront(secondArray, 3);

  console.log(result2 === secondArray); // should log true
  console.log(result2); // should log [3, 4