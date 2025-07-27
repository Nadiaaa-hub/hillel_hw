const logInTo = () => {
  const names = ["nadia", "maks"];

  let name = "";
  while (!name) {
    name = prompt("Enter your name:");
    if (!name) alert("Name field cannot be empty! Please enter your name.");
  }

  if (names.includes(name.toLowerCase())) {
    let password = "";
    while (!password) {
      password = prompt("Enter your password:");
      if (!password)
        alert("Password field cannot be empty! Please enter your password.");
    }
    alert(`Hello ${name}, your password is ${password}`);
  } else {
    console.log("Sorry, you are not Nadia or Maks");
  }
};

logInTo();
