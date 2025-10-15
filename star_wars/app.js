const peopleUrl = `https://swapi.dev/api/people/`;
const shipsUrl = `https://swapi.dev/api/starships/`;
const planetsUrl = `https://swapi.dev/api/planets/`;
const ul = document.querySelector(".container ul");
const close = document.querySelector(".js_close");

const addedPeople = [];
const addedPlanets = [];
const addedShips = [];

function loadData(url, addedElements) {
  fetch(url)
    .then((res) => res.json())
    .then((data) =>
      data.results.forEach((element) => {
        let name = element.name || element.title;
        if (!addedElements.includes(name)) {
          let list = document.createElement("li");
          list.textContent = name;
          ul.appendChild(list);
          addedElements.push(name);
        }
      })
    );

  localStorage.setItem("people", JSON.stringify(addedPeople));
}

function closeBtn() {
  close.addEventListener("click", () => {
    ul.innerHTML = "";
  });
}
closeBtn();

// function ShowPeople(people) {
//   people.forEach((person) => {
//     if (!addedNames.includes(person.name)) {
//       let list = document.createElement("li");
//       list.textContent = person.name;
//       ul.appendChild(list);
//       addedNames.push(person.name);
//     }
//   });
// }

// people.addEventListener("click", () => {
//   loadPeople();
// });

document.querySelector(".js_button_people").addEventListener("click", () => {
  loadData(peopleUrl, addedPeople, ul);
});

document.querySelector(".js_button_planets").addEventListener("click", () => {
  loadData(planetsUrl, addedPlanets, ul);
});

document.querySelector(".js_button_ships").addEventListener("click", () => {
  loadData(shipsUrl, addedShips, ul);
});
