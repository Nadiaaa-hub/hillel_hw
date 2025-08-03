// ex1
for (let i = 10; i < 20; i++) {
  document.write(i, ",");
}

//ex2
// for (let i = 10; i < 20; i++) {
//   document.write(i * i, ",");
// }

// ex3
// for (let i = 0; i <= 10; i++) {
//   document.write(i * 7, ",");
// }

//ex4
// let sum = 0;
// for (let i = 1; i < 16; i++) {
//   sum += i;
// }
// document.write(sum);

// //ex5
// let prod = 1;
// for (let i = 1; i < 16; i++) {
//   prod *= i;
// }
// document.write(prod);

// //ex6
// let sum = 0;
// for (let i = 1; i <= 500; i++) {
//   sum += i;
// }
// document.write(i);
// let average = sum / 500;
// document.write(average);

// ex7
// let sum = 0;
// for (let i = 30; i <= 80; i++) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
// }
// document.write("Сума парних чисел: ", sum);

// ex8
// document.write("Числа кратні 3: ");
// for (let i = 100; i <= 200; i++) {
//   if (i % 3 === 0) {
//     document.write(i + ",");
//   }
// }

// ex9
// let n = 40;
// let countEven = 0;
// let sum = 0;

// document.write("Дільники числа n: ");

// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     document.write(i + ",");
//     if (i % 2 === 0) {
//       countEven++;
//       sum += i;
//     }
//   }
// }
// document.write(" <br> Кількість парних дільників:", countEven);
// document.write(" <br> Сума парних дільників:", sum);

// ex10

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     document.write(i, "*", j, "=", i * j, "  ");
//   }
//   document.write("<br>");
// }
