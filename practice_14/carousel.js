// const hashtags =
//   "#frontend, #travel,#coffeeLover,#backend, #hiking, #cybersecurity,#design,#UXUI,#bookworm,#devops,#photography,#techLead,#marketing,#startupLife,#yoga";
// const birthDates = "1990-03-12, 1985-07-05, 1998-10-23, 1979-01-30, 1992-06-14";

// const pattern1 = /#[\w]+/g;
// const pattern2 = /\d{4}-\d{2}-\d{2}/g;

// const result1 = hashtags.match(pattern1);
// const result2 = birthDates.match(pattern2);

// console.log(result1);
// console.log(result2);

const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
const imgs = document.querySelectorAll(".card__image");
const dots = document.querySelectorAll(".pagination__button");
const firstImg = document.getElementById("first-img");

let currentIndex = 0;
dots[currentIndex].classList.add("active");
imgs[currentIndex].classList.add("active");

function nextSlide() {
  btnNext.addEventListener("click", () => {
    if (currentIndex < imgs.length - 1) {
      imgs[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");

      currentIndex++;
      imgs[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    }
  });
}
nextSlide();

function prevSlide() {
  btnPrev.addEventListener("click", () => {
    if (currentIndex > 0) {
      imgs[currentIndex].classList.remove("active");
      dots[currentIndex].classList.remove("active");
      currentIndex--;
      imgs[currentIndex].classList.add("active");
      dots[currentIndex].classList.add("active");
    }
  });
}

prevSlide();

const autoplay = setInterval(() => {
  if (currentIndex < imgs.length - 1) {
    btnNext.click();
  } else {
    imgs[currentIndex].classList.remove("active");
    dots[currentIndex].classList.remove("active");

    currentIndex = 0;
    imgs[currentIndex].classList.add("active");
    dots[currentIndex].classList.add("active");
  }
}, 3000);
