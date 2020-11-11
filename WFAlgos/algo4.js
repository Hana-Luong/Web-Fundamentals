/**
 * @param {array} arr an array of elements
 * @returns {any} the removed element (last one)
 */

function pop(arr) {
  // your code here
}

var arrayToPop = [1, 2];
var popResult = pop(arrayToPop);

console.log(popResult); // should log 2
console.log(arrayToPop); // should log [1]


/**
 * @param {array} arr an array of elements
 * @returns {any} the removed element (the first one)
 */

function popFront(arr) {
  // your code here
}

var arrayToPopFront = [1, 2, 3, 4];
var popFrontResult = popFront(arrayToPopFront);

console.log(popFrontResult); // should log 1
console.log(arrayToPopFront); // should log [2, 3, 4]

//STUDENT'S WORK FROM HERE
function pop(arr) {
    var lastIndex = arr.length - 1;
    var popResult = arr[lastIndex];
    arr.length = lastIndex;
    return popResult;
  }
  
  var arrayToPop = [1, 2];
  var popResult = pop(arrayToPop);
  
  console.log(popResult); // should log 2
  console.log(arrayToPop); // should log [1]

  //ANOTHER STUDENT'S
  function popFront(arr) {
    var num = arr[0];
    for (var i = 0; i < arr.length-1; i++){
        arr[i] = arr[i+1];
        console.log('this is the', arr);
    }
    arr.length -= 1;
    return num;
}

var arrayToPopFront = [1, 2, 3, 4];
var popFrontResult = popFront(arrayToPopFront);

  console.log(popFrontResult); // should log 1
  console.log(arrayToPopFront); // should log [2, 3, 4]