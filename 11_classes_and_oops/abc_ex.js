
class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }
}

const p1 = new Person("Ankit");

console.log(p1.name);  // getter call
p1.name = "Rahul";     // setter call
console.log(p1.name);