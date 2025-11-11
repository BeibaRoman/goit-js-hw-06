const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("Please do not leave any fields empty!");
    return;
  }

  const data = {
    email,
    password,
  };

  console.log(data);
  e.target.reset();
}
