const input = document.querySelector(".input");
const addBtn = document.querySelector(".btn");
const result = document.querySelector(".result");

addBtn.addEventListener("click", (e) => {
  const value = input.value.trim();

  if (value === "") {
    return;
  }

  const list = document.createElement("li");
  list.textContent = value;
  result.appendChild(list);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  result.appendChild(deleteBtn);

  input.value = "";
  localStorage.setItem("to-do-list", JSON.stringify(todoList));
  deleteBtn.addEventListener("click", () => {
    result.removeChild(list);
    result.removeChild(deleteBtn);
  });
});
