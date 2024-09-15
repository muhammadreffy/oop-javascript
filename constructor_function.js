// pembuatan class sebelum ES6

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};

const person1 = new Person("Alice", 30);

console.log(person1.name, person1.age);

person1.eat();
