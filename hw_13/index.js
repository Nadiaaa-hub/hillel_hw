// ex1
const count = orders.reduce((acc, order) => {
  acc[order.user] = (acc[order.user] || 0) + 1;
  return acc;
}, {});

console.log(count);

// ex2
const usersPrice = orders.reduce((acc, order) => {
  const total = order.items.reduce((sum, item) => sum + item.price, 0);
  acc[order.user] = acc[order.user] || 0 + total;
  return acc;
}, {});

console.log(usersPrice);

// ex3

// const usersItems= orders.reduce((acc, order) => {
//   const items = order.items.reduce((sum, item) => sum[] + item.price, 0);
//   acc[order.user] = acc[order.user] || 0 + total;
//   return acc;
// }, {});

// const uniqueItems = new Set();
// uniqueItems.add([]);

// console.log(uniqueItems);
