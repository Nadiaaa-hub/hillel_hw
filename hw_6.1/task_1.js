let array = [];
let output = "";

let length = parseInt(prompt("Enter the length of the array"));

for (let i = 0; i < length; i++) {
  let element = parseInt(prompt("Enter the element in the array", i + 1));
  array.push(element);
}

output += `Original array: ${array}<br>`;
array.sort((a, b) => a - b);
output += `Sorted array: ${array}<br>`;
array.splice(1, 3);
output += `Array after removing elements from 2nd to 4th: ${array}<br>`;

document.querySelector(".text").innerHTML = output;
