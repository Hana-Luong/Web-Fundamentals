// our input is just a placeholder
// it will be specified when we call the function

function printValsFromArray(inputArray) {
  // touch each element one at a time
  for(var i = 0; i < inputArray.length; i = i + 1) {
    // say that individual number
    console.log(inputArray[i]);
  }
}

var myArray = [5, 6, 7, 8]; // myArray.length is 4
           //  0  1  2  3  these are the indices of the array

// to call the function, say its name!
// and pass it whatever it needs
printValsFromArray(myArray);

printValsFromArray([100, 101, 102]);