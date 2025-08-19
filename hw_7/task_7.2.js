function name(num1) {
  return function (num2) {
    return num1 * num2;
  };
}

const result = name(5)(2);
console.log(result);
