class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

// membuat instance dari Person
const person1 = new Person("Reffy", 30);

console.log(person1.name);
