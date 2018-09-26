// CONST & LET
let name = 'John';
let test;

name = 'Jack';

const person = {
  name: 'John',
  age: 33
};

person.name = 'Jack';

const nums = [1, 2, 3, 4];
nums.push(5);

// ARROW FUNCTIONS
console.log('ARROW FUNCTIONS')

// function sayHello() {
//   console.log('Hello');
// }

const name2 = 'Brad';

const sayHello = name => console.log(`Hello ${name}`);

sayHello(name2);

const fruits = ['Apples', 'Oranges', 'Grapes'];

// FOREACH
console.log('FOREACH')

// fruits.forEach((fruit, index) => console.log('item', fruit,'index', index));

// fruits.forEach(fruit => console.log('item', fruit));


// MAP
console.log('MAP')
const singleFruit = fruits.map(fruit => fruit.slice(0, -2).toUpperCase());
const singleFruitReplace = fruits.map(fruit => fruit.replace('s', 'x' ).toUpperCase());
// console.log(singleFruit);
// console.log(singleFruitReplace);


// FILTER
console.log('FILTER');

const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Bob' },
  { id: 4, name: 'Sharon' }
];

const peopleNo2 = people.filter(person => person.id !== 2);
const peopleNoBob = people.filter(person => person.name !== 'Bob');

// console.log(peopleNo2);
// console.log(peopleNoBob);

// SPREAD
console.log('SPREAD');

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];
// console.log(arr3);

const person1 = {
  name: 'Brad',
  age: 36
};

const person2 = {
  ...person1,
  email: 'brad@gmail.com'
};



// DESTRUCTURING
console.log('DESTRUCTURING');

const profile = {
  name1: 'John Doe',
  address: {
    street: '40 Main st',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const { name1, address, hobbies } = profile;
const { street, city } = profile.address;

// CLASSES
console.log('CLASSES');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person3 = new Person('John', 33);
const person4 = new Person('Sara', 28);
// console.log(person3)
// console.log(person3.greet());

// SUBCLASSES;
console.log('SUBCLASSES');

class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 32, 300);
// console.log(customer1.info())

// MODULES
console.log('MODULES');
/*
// file 1 (file1.js)
export const name = 'Jeff';
export const nums = [1, 2, 3];
export default Person;

// // file 2 (file2.js)
import { name, nums } from './file1';
import Person from './file1';
*/