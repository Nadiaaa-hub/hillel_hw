// ex1
// const count = orders.reduce((acc, order) => {
//   acc[order.user] = (acc[order.user] || 0) + 1;
//   return acc;
// }, {});

// for (const user in count) {
//   document.querySelector(".div").innerHTML += `<p>${user}: ${count[user]}</p>`;
// }

// ex2
// const usersPrice = orders.reduce((acc, order) => {
//   const total = order.items.reduce((sum, item) => sum + item.price, 0);
//   acc[order.user] = acc[order.user] || 0 + total;
//   return acc;
// }, {});

// for (const user in usersPrice) {
//   document.querySelector(
//     ".div"
//   ).innerHTML += `<p>${user}: ${usersPrice[user]}</p>`;
// }

// ex3
// const uniqueItems = new Set();

// orders.forEach((order) => {
//   order.items.forEach((item) => {
//     uniqueItems.add(item.name);
//   });
// });

// for (const item of uniqueItems) {
//   document.querySelector(".div").innerHTML += `<p>${item}</p>`;
// }

// // ex4
// const spentByUser = orders.reduce((acc, order) => {
//   const total = order.items.reduce((sum, item) => sum + item.price, 0);
//   acc[order.user] = (acc[order.user] || 0) + total;
//   return acc;
// }, {});

// let maxSpent = 0;
// let maxUser;

// for (const user in spentByUser) {
//   if (spentByUser[user] > maxSpent) {
//     maxSpent = spentByUser[user];
//     maxUser = user;
//   }
// }

// document.querySelector(".div").innerHTML += `<p>${maxUser}: ${maxSpent}</p>`;
