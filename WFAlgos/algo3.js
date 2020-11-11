// var myArray = ['some', 'thing'];
// console.log(myArray[0]);

// myArray[1] = 'some new string';
// console.log(myArray);

// this is an object
var person = {
  name: 'Morley Tatro',
  hairColor: 'light dark',
  interests: ['table tennis', 'coding', 'music']
};

var interests = person.interests;

for(var i = 0; i < interests.length; i++) {
  console.log(interests[i]);
}

var myKey = 'name';

// this is how we "get" values
console.log(person.name);
console.log(person[myKey]);

// "setting" values
person.email = 'mtatro@codingdojo.com';
var myEmail = person.email;
person['email'] = ['somedifferentemail@email.com', 'otheremail@email.com'];
// person['email'] = 'otheremail@email.com';

// console.log(person);

// pretending that person is an array
// for(var i = 0; i < person.length; i++) {
//   console.log(person[i]);
// }

for(var key in person) {
  console.log('the key is', key);
  console.log('the value is', person[key]);
}

console.log(myEmail);