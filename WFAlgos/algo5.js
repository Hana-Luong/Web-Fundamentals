/**
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array} a NEW array with the elements from both concatenated
 * NOTE: You can use push.
 */

function concat(arr1, arr2) {
  // your code here
}

console.log(concat([1, 2, 3], [4, 5, 6]));
// should log [1, 2, 3, 4, 5, 6]


/**
 * @param {array} arr
 * @returns {array} the same (modified) array
 */

function reverseInPlace(arr) {
  // your code here
}

var originalArray = [1, 2, 3, 4, 5];
var result = reverseInPlace(originalArray);

console.log(originalArray === result); // should log true
console.log(originalArray);
// should log [5, 4, 3, 2, 1]

// STUDENTS' WORK

function concat(arr1, arr2) {
    var newarr =[]
    for(var i = 0; i< arr1.length; i++){
    newarr.push (arr1[i])
    }
    for(var i = 0; i< arr2.length; i++){
    newarr.push (arr2[i])
    }
    return newarr
    }
    
    concat([1,2,3], [4,5,6]);
    // // should log [1, 2, 3, 4, 5, 6]
    
    
    
    steven_halla
    10:04 AM
    function reverseInPlace(arr) {
    // 1. Go through each element of given array, stopping at midpoint
    
    for (let i=0; i<(Math.floor(arr.length / 2)); i++) {
    
    
        // 2. Declare a temp variable for the element to be swapped
    
    
        let temp = arr[i]; 
    
        // 3. Swap elements
    
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp; 
    }
    
    // 4. Return the original array
    
    return arr; 
    }
    
    var originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
    var result = reverseInPlace(originalArray);
    
    console.log(originalArray === result); // should log true
    console.log(originalArray);
    
    // should log [5, 4, 3, 2, 1]
    
    function reverseInPlace(arr) {
    // 1. Go through each element of given array, stopping at midpoint
    
    for (let i=0; i<(Math.floor(arr.length / 2)); i++) {
    
    
        // 2. Declare a temp variable for the element to be swapped
    
    
        let temp = arr[i]; 
    
        // 3. Swap elements
    
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp; 
    }
    
    // 4. Return the original array
    
    return arr; 
    }
    
    var originalArray = [1, 2, 3, 4, 5, 6, 7, 8];
    var result = reverseInPlace(originalArray);
    
    console.log(originalArray === result); // should log true
    console.log(originalArray);
    
    // should log [5, 4, 3, 2, 1]`
    
    //ignore teh stuff below the code i posted

   // INSTRUCTOR'S WORK FROM HERE
   function reverseArrayInPlace(arr) {
    for(var back = 0, front = arr.length - 1; back < front; back++, front--) {
      var temp = arr[back];
      arr[back] = arr[front];
      arr[front] = temp;
    }
  
    return arr;
  }
  
  console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));