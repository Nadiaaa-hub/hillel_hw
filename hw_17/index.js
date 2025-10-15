class House {
  appartments = new Map();

  addAppartment(obj) {
    this.appartments.set(obj.num, obj);
  }

  showInfo() { 
    this.inhabitants.
  }
}

class Appartment {
  inhabitants = [];

  constructor(num, roomsAmount) {
    this.num = num;
    this.roomsAmount = roomsAmount;
    this.inhabitants = new Set();
  }
  addInhabitant(inhabitants) {
    this.inhabitants.add(inhabitants);
  }
}

class Inhabitants {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
}
const apartmentsCount = prompt("The number of apartments in the house?:");
const inhabitants = prompt("The number of apartments in the house?:");

// const appartments = [
//   new Appartment(inhabitants, 258, 5),
//   new Appartment(inhabitants, 250, 2),
//   new Appartment(inhabitants, 259, 4),
// ];

for (let i = 0; i < apartmentsCount; i++) {}
const hugeHouse = new House();

apartmentsCount.forEach((app) => {
  hugeHouse.addAppartment(app);
});

inhabitants.forEach((inh) => {
  const inhabitantsAmount = Number(
    prompt(`The number of inhabitants: ${inh.num}`)
  );
  inhabitantsAmount.addInhabitant(inh);
});

console.log(hugeHouse);
console.log(inhabitants);
