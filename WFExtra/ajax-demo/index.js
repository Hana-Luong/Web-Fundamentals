// console.log($);

function handleResponse(response) {
  console.log('handleResponse was called');
  console.log(response);

  var htmlStr = '';

  htmlStr += '<img src="' + response.image + '" alt="' + response.name + '">'
  htmlStr += '<h2>' + response.name + '</h2>';
  htmlStr += '<p>Status: ' + response.status + '</p>';
  htmlStr += '<p>Species: ' + response.species + '</p>';

  $('#rick-and-morty-container').html(htmlStr);
}

// API essentially is a contract between two applications

function handleClick() {
  // calling the jQuery get method
  $.get('https://rickandmortyapi.com/api/character/5', handleResponse);
}

// our callback will only run once the page has "fully" loaded
$(document).ready(function() {
  $('#my-button').click(handleClick);
});