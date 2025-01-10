const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Please do not leave any fields empty!");
  }

  const data = {
    [email.name]: email.value,
    [password.name]: password.value,
  };
  console.log(data);

  e.currentTarget.reset();
}
