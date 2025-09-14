const cities = {
  Ky: "Kyiv",
  Ch: "Charkiv",
  Od: "Odessa",
  Lu: "Lutsk",
  Sim: "Simpheropol",
};

document.querySelector("button").addEventListener("click", (event) => {
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
    console.log(`
    Name: ${name}
    Gender: ${gender};
    City: ${cities[city]};
    Address:, ${address};
    Languages: ${languages}`);
  }
});
