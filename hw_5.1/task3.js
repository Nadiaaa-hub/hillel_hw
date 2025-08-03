let n = parseInt(prompt("Enter a number:"));

for (let i = 1; i <= 100; i++) {
  if (i * i <= n) {
    document.write(i, ", ");
  } else {
    break;
  }
}
