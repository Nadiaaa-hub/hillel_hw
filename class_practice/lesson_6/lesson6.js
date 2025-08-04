let students = ["a", "b", "c", "d"];

students.push("Simon"); //додає на кінець масиву
students.unshift("Stiven"); //додає на початок масиву
students.pop(); //видаляє останній ел масиву масиву

let str = "<ul>";
for (let i = 0; i < students.length; i++) {
  str += `<li>${i} : ${students[i]}</li>`;
}
str += "</ul>";

document.write(str);

// let myString = "Hello word";
// myString[4];

// let numbers = new Array(5);
// console.log(numbers);

// let number = [1, 33, 4];
// number[2] += 9;
// console.log(number);

let arr = [1, 44, 6, 8];

document.write("<p>" + arr.slice(0, 4) + "</p>");
document.write("<p>" + arr.sort((a, b) => a - b) + "</p>"); //сортування
document.write("<p>" + arr.splice(1, 2) + "</p>");

// slice (1,3) 1 індекс початок видалення а далі кількість
["a", "gg", "fgf"].sort;
