document.querySelector("button").addEventListener("click", () => {
  const value = document.forms[0].loginName.value;
  if (value.trim()) {
    fetch(`https://api.github.com/users/${value}`)
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
});
