// console.log('hello world!');

// getting references to DOM elements
var myButton = document.getElementById('my-button');
var countSpan = document.querySelector('#count-span');
var count = 0;

// console.log(myButton);

function clickHandler() {
  console.log('button was clicked!');
  // count++;
  countSpan.innerText = ++count;
  // myParagraph.innerText = 'Button was clicked!';
}

// the second argument is a "callback" function
myButton.addEventListener('click', clickHandler);