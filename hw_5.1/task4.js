let n = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 100; i++) {
  if (n % i === 0) {
    document.write(" число не просте");
    break;
  } else {
    document.write(" число просте");
  }
}
