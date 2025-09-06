document.querySelector("button").addEventListener("click", () => {
  const form = document.forms.signin;
  const login = form.login.value;
  const password = form.password.value;

  console.log(
    `${login}/n
        ${password}/n
      `
  );
});
