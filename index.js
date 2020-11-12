/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// Step 1 - We wan to create a constructor function - it takes name and age as arguments and should also have an emoty stomach array

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function(edible){
  if(this.stomach.length < 10){
    this.stomach.push(edible);
  }
}

Person.prototype.poop = function(){
  this.stomach = [];
}

Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}

const personOne = new Person('Mike', 29);
const personTwo = new Person('David', 31);
const personThree = new Person('Paula', 25);

console.log(personOne.toString());
console.log(personTwo.toString());
console.log(personThree.toString());

personOne.eat('taco');
personOne.eat('pizza');
personOne.eat('sushi');

console.log(personOne.stomach);

personOne.poop();

console.log(personOne.stomach);

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function(gallons){
  this.tank += gallons;
}

Car.prototype.drive = function(distance){
  
  if(distance >= (this.tank * this.milesPerGallon)){
    this.odometer = this.odometer + (this.tank * this.milesPerGallon);
    this.tank = 0;
    console.log(`I ran out of fuel at ${this.odometer} miles!`);
    return `I ran out of fuel at ${this.odometer} miles!`;
  }
  else if(distance < (this.tank * this.milesPerGallon)){
    this.odometer = this.odometer + distance;
    this.tank = ((this.tank * this.milesPerGallon) - distance) / this.milesPerGallon;
  }

  // this.odometer += distance;


  // for(let i = distance / this.milesPerGallon; i > 0 || this.tank > 0; i--){
  //   if(this.tank === 0){
  //     console.log(`I ran out of fuel at ${this.odometer} miles!`);
  //     return `I ran out of fuel at ${this.odometer} miles!`;
  //   }
  // }
  
  // this.tank = ((this.tank * this.milesPerGallon) - distance) / this.milesPerGallon;
 
}

const carOne = new Car('Bronco', 10);

carOne.fill(15);
console.log('Tank', carOne.tank);
carOne.drive(160);
console.log('Odometer', carOne.odometer);
console.log('Tank 2',carOne.tank);

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
 Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

const babyOne = new Baby('Mikey', 7, 'trains');

babyOne.play();
console.log(babyOne.play());
console.log(babyOne.toString());
/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - This defaults to the global object or window, basically where the highest level of Javascript is. This won't be useful for your program.
  2. Implicit Binding - This points to the object where the function is called. (what's left of the period when the function is actually called)
  3. Explicit Binding - Using call, bind, or apply, this explicitly tells the program to set 'this' to a certain value.
  4. New Binding - using the 'new' keyword constructs a new object and 'this' points to it. 
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
