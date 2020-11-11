/**
 * @param {any[]} arr an array of elements
 * @returns {any[]} the same (modified) array with certain elements swapped
 */

function swapTowardTheCenter(arr) {
    // your code here
  }
  
  var arrayToSwap = [1, 2, 3, 4, 5, 6];
  var result = swapTowardTheCenter([1, 2, 3, 4, 5, 6]);
  console.log(arrayToSwap === result); // should log true
  
  console.log(arrayToSwap);
  // should log [6, 2, 4, 3, 5, 1]
  
  
  /**
   * @param {number[]} arr an array of numbers
   * @returns {number|null} the second largest number
   */
  
  function secondLargest(arr) {
    // your code here
  }
  
  console.log(secondLargest([3, 5, 1, 7, 10])); // should log 7
  
  console.log(secondLargest([4, 4, 4])); // should log null

  //STUDENT'S WORK FROM HERE
  /**
 * @param {number[]} arr an array of numbers
 * @returns {number|null} the second largest number
 */

function secondLargest(arr) {
    // Declare largest + second largest
    let largest = arr[0]; 
    let secondLargest = null; 

    // Create a for loop to iterate through array; 
    for (let i=0; i<arr.length; i++) {

        // Create if statement, if element is larger than current largest
        if (arr[i] > largest) {

            // update second largest to largest 
            secondLargest = largest; 

            // update largest 
            largest = arr[i]; 
        };

    }

    // Return second largest number 
    return secondLargest; 
}

console.log(secondLargest([3, 5, 1, 7, 10])); // should log 7

console.log(secondLargest([4, 4, 4])); // should log null


//ANOTHER STUDENT'S
/**
 * @param {any[]} arr an array of elements
 * @returns {any[]} the same (modified) array with certain elements swapped
 */

function swapTowardTheCenter(arr) {
    for(var i = 0; i < arr.length * .5; i+=2){
        var temp = arr[i];
        //   ___        [0]=1
        arr[i] = arr[arr.length - 1 - i];
        //     [0]=1              [(6 - 1) - 0] = 6
        arr[arr.length - 1 - i] = temp;
        //  [(6 - 1) - 0] = 6                     = [0]=1
    }
        // [6,2,4,3,5,1]
    return arr; // your code here
  }
  //  index          0  1  2  3  4  5
  var arrayToSwap = [1, 2, 3, 4, 5, 6];
  var result = swapTowardTheCenter(arrayToSwap);
  console.log(arrayToSwap === result); // should log true
  
  console.log(arrayToSwap);
  // should log [6, 2, 4, 3, 5, 1]
  // 1. loop through array(swap every other vaiue of the array)
  // 2. return result