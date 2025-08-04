let array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

let result = "";
let sum = 0;
let product = 1;

let positiveCount = 0;
let negativeCount = 0;

let min = array[0];
let minIndex = 0;

let max = array[0];
let maxIndex = 0;

let evenCount = 0;
let oddCount = 0;

let sumEvenPositive = 0;
let sumOddPositive = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
    positiveCount++;
    product *= array[i];

    if (array[i] % 2 == 0) {
      sumEvenPositive += array[i];
      evenCount++;
    } else {
      sumOddPositive += array[i];
      oddCount++;
    }
  } else {
    sum += array[i];
    negativeCount++;
  }

  if (array[i] < min) {
    min = array[i];
    minIndex = i;
  }

  if (array[i] > max) {
    max = array[i];
    maxIndex = i;
  }
}

for (let i = 0; i < array.length; i++) {
  if (array[i] !== max) {
    array[i] = 0;
  }
}
result += `Сума додатних елементів: ${sum}<br>`;
result += `Мінімальне число: ${min}, індекс: ${minIndex}<br>`;
result += `Максимальне число: ${max}, індекс: ${maxIndex}<br>`;
result += `Кількість додатних елементів: ${positiveCount}<br>`;
result += `Кількість від’ємних елементів: ${negativeCount}<br>`;
result += `Сума парних додатних: ${sumEvenPositive}, кількість: ${evenCount}<br>`;
result += `Сума непарних додатних: ${sumOddPositive}, кількість: ${oddCount}<br>`;
result += `Добуток всіх додатних елементів: ${product}<br>`;
result += `Всі елементи 0 окрім макс.: ${array}<br>`;

document.querySelector(".text").innerHTML = result;
