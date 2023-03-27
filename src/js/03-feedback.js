
const emailInput = document.querySelector( "input[name=email]");
const messageInput = document.querySelector("textarea[name=message]");
const submitButton = document.querySelector("button[type=submit]");

emailInput.addEventListener("input", onValueSafe)
messageInput.addEventListener("input", onValueSafe)

function onValueSafe (event){
  event.preventDefault();
  let email = emailInput.value;
  let message = messageInput.value;
  localStorage.setItem('feedback-form-state',`Email = ${email}; Message = ${message}`)

}