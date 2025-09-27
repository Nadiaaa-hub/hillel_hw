const cities = {
  Ky: "Kyiv",
  Ch: "Charkiv",
  Od: "Odessa",
  Lu: "Lutsk",
  Sim: "Simpheropol",
};

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();

  const info = document.forms.info;
  const name = info.name.value;
  const gender = info.gender.value;
  const city = info.city.value;
  const address = info.address.value;
  const languages = [];

  for (let i = 0; i < info.languages.length; i++) {
    if (info.languages[i].checked) {
      languages.push(info.languages[i].value);
    }
  }

  const result = document.createElement("div");
  result.innerHTML += `
    <p>Name: ${name}</p>
    <p>Gender: ${gender}</p>
    <p>City: ${cities[city]}</p>
    <p>Address:, ${address}</p>
    <p>Languages: ${languages}</p>
    `;
  document.body.appendChild(result);

  info.remove();
});
