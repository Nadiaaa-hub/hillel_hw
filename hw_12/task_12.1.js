let link;

const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const paragraph = document.createElement("p");
const div = document.createElement("div");
const m = (paragraph.textContent = "Click btn 2");
paragraph.style.display = "none";

document.body.appendChild(paragraph);
btn1.addEventListener("click", () => {
  console.log(`click btn 1`);
  link = prompt("Give the link");
  paragraph.style.display = "block";
});

btn2.addEventListener("click", () => {
  console.log(`click btn 2`);
  if (link) {
    location.href = link;
  } else {
    alert("Enter the correct link pls");
  }
});

btn3.addEventListener("click", () => {
  console.log(`click btn 3`);
});

div.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "BUTTON") {
    console.log(event.target.className);
  }
});
