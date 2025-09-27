class House {
  appartments = new Map();

  addAppartment(obj) {
    this.appartments.set(obj.num, obj);
  }
}

class Appartment {
  constructor(num, roomsAmount) {
    this.num = num;
    this.roomsAmount = roomsAmount;
    this.inhabitants = new Set();
  }

  addInhabitant(number) {
    this.inhabitants.add(number);
  }
}
const apartmentsCount = prompt("The number of apartments in the house?:");

// const appartments = [
//   new Appartment(inhabitants, 258, 5),
//   new Appartment(inhabitants, 250, 2),
//   new Appartment(inhabitants, 259, 4),
// ];

for (let i = 0; i < apartmentsCount; i++) {}
const hugeHouse = new House();

appartments.forEach((app) => {
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
