const btn = document.createElement("button");
btn.textContent = "Click me";

const img = document.createElement("img");
img.src = "./photo_2025-09-02_12-38-02.jpg";
img.alt = "Random image";
img.style.display = "none";
img.style.width = "700px";

document.body.appendChild(img);
document.body.appendChild(btn);

btn.addEventListener("click", () => img.style.removeProperty("display"));
btn.addEventListener("click", (e) => {
  img.style.display = "block";
  e.stopPropagation();
});

document.addEventListener("click", () => {
  img.style.display = "none";
});
// let img;

// function showRandomImage() {
//   const totalImages = 9;
//   const randomIndex = Math.floor(Math.random() * totalImages) + 1;

//   img = document.createElement("img");
//   img.src = `./${randomIndex}.jpg`;
//   img.alt = "Random image";

//   document.body.appendChild(img);
// }

// showRandomImage();
