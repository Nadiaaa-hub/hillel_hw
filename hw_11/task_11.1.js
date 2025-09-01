const container = document.querySelector(".pythagoras-table");
const input = document.querySelector(".size");
const button = document.querySelector(".generate");

function generateTable(size) {
  container.innerHTML = "";
  const table = document.createElement("table");

  const caption = document.createElement("caption");
  caption.textContent = "Таблиця Піфагора";
  table.appendChild(caption);

  const thead = document.createElement("thead");
  const headRow = document.createElement("tr");
  headRow.appendChild(document.createElement("th"));
  for (let i = 1; i <= size; i++) {
    const th = document.createElement("th");
    th.textContent = i;
    headRow.appendChild(th);
  }
  thead.appendChild(headRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  for (let i = 1; i <= size; i++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = i;
    tr.appendChild(th);

    for (let j = 1; j <= size; j++) {
      const td = document.createElement("td");
      td.textContent = i * j;
      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  container.appendChild(table);
}

button.addEventListener("click", () => {
  const size = parseInt(input.value);
  if (!isNaN(size) && size > 0) {
    generateTable(size);
  } else {
    alert("Введіть правильне число");
  }
});
