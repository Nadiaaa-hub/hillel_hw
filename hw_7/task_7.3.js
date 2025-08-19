"use strict";

let userNum;
for (let i = 0; i < 10; i++) {
  userNum = parseInt(prompt("Enter the num bigger than 100:"));
  let value = userNum;
  if (!isNaN(value) && value > 100) {
    console.log("The last num is:", userNum);
    break;
  } else {
    alert("Please try again:");
  }
}
