function Info(name, age, country) {
  this.name = name;
  this.age = age;
  this.country = country;

  this.getInfo = function () {
    return `Name: ${this.name}, Age: ${this.age}, Country: ${this.country}`;
  };
}

let person1 = new Info("Nadia", "19", "Ukraine");
let person2 = new Info("Natan", "29", "USA");
let person3 = new Info("Sophia", "20", "UK");
let person4 = new Info("Alice", "49", "France");

console.log(person1.getInfo());
console.log(person2.getInfo());
