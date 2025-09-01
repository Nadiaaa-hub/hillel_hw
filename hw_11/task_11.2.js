const paragraphs = document.querySelectorAll("p");
btnClick = 0;

document.querySelector("button").addEventListener("click", () => {
  paragraphs.forEach((p) => p.classList.toggle("red-text"));
});
