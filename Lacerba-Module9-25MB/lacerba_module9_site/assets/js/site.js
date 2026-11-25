// Module 9: HTML5 form interaction using JavaScript.
const updatesForm = document.querySelector("#updates-form");
const emailInput = document.querySelector("#visitor-email");
const formMessage = document.querySelector("#form-message");

updatesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!emailInput.checkValidity()) {
    emailInput.reportValidity();
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.classList.add("form-message-error");
    return;
  }

  formMessage.textContent = `Thanks! The sign-up demo accepted ${emailInput.value}. No email was sent or stored.`;
  formMessage.classList.remove("form-message-error");
  formMessage.classList.add("form-message-success");
  updatesForm.reset();
});
