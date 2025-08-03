// ex 1
// let array = [];
// let output = "";

// let length = parseInt(prompt("Enter the length of the array"));

// for (let i = 0; i < length; i++) {
//   let element = parseInt(prompt("Enter the element in the array", i + 1));
//   array.push(element);
// }

// output += `Original array: ${array}<br>`;
// array.sort((a, b) => a - b);
// output += `Sorted array: ${array}<br>`;
// array.splice(1, 3);
// output += `Array after removing elements from 2nd to 4th: ${array}<br>`;

// document.querySelector(".text").innerHTML = output;

let array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let result = "";
let sum = 0;

array.sort((a, b) => a - b);

for (let i = 0; i < array.length; i++) {
  if (i > 0) {
    sum += array[i];
  }
}

result += `Sum of array is: ${sum}<br>`;
document.querySelector(".text").innerHTML = result;
