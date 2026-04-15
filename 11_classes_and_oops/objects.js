function multupleBy5(num) {
    return num * 5;
}
multupleBy5.power = 2; // we can add properties to a function just like we do with objects, 
// because in JavaScript, functions are also objects, so we can add properties and methods 
// to them just like we do with regular objects.
console.log(multupleBy5(5));
console.log(multupleBy5.power);
console.log(multupleBy5.prototype);
// every function in JavaScript has a prototype property,
//  which is an object that contains properties and methods that can be inherited by instances
//  of the function when used as a constructor function with the "new" keyword.
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // we are adding a method called greet to the
    //  prototype of the Person function, which means that all instances of the Person function will have access to this method
    //  through the prototype chain.
};
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.
console.log(person1.__proto__ === Person.prototype);

/* Here what happend behind the scenes when the new keyword is used:
1. A new empty object is created. the new keyword initiates the creation of a new object,
  which is an instance of the constructor function (Person in this case).
2. The prototype  is linked : the newly created object's internal [[Prototype]] property is set to point to the
  prototype object of the constructor function.This means that the new object inherits properties and methods from the
  constructor function's prototype.
3. The constructor function is called with the new object as its context (this), allowing it to initialize the properties of the new object.
4. The new object is returned as the result of the constructor function call.
*/

