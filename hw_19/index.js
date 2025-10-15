document.querySelector("button").addEventListener("click", () => {
  const apiKey = "bff0ad9a1c387fde317abaa9f9c17d7d";
  const city = document.querySelector(".city").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`
  )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((e) => console.error(e));
});
