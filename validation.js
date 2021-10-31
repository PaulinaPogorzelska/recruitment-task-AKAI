const form = document.querySelector("form");
const inputName = form.querySelector("input[name=name]");
const inputSurname = form.querySelector("input[name=surname]");
const nameErrorMessage = form.querySelector(".name-error-message");
const surnameErrorMessage = form.querySelector(".surname-error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formErrors = false;

  if (inputName.value.length < 1) {
    formErrors = true;
    nameErrorMessage.innerHTML = `<div>Imię nie może być puste</div>`;
  }

  if (inputSurname.value.length < 1) {
    formErrors = true;
    surnameErrorMessage.innerHTML = `<div>Nazwisko nie może być puste</div>`;
  }

  if (!formErrors) {
    form.submit();
  }
});
