const form = document.querySelector("#contactform");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

function formValidation() {
  event.preventDefault();
  if (checkLength(name.value, 0)) {
    nameerror.style.display = "none";
  } else {
    nameerror.style.display = "block";
  }

  if (emailValidation(email.value)) {
    emailerror.style.display = "none";
  } else {
    emailerror.style.display = "block";
  }
  if (checkLength(subject.value, 0)) {
    subjecterror.style.display = "none";
  } else {
    subjecterror.style.display = "block";
  }
  if (checkLength(message.value, 0)) {
    messageerror.style.display = "none";
  } else {
    messageerror.style.display = "block";
  }

  if (checkLength(name.value, 5) && emailValidation(email.value) && checkLength(subject.value, 14) && checkLength(message.value, 24)) {
    form.reset();
    setTimeout(() => {
      success.style.display = "block";
    }, 1000);

    setTimeout(() => {
      success.style.display = "none";
    }, 4000);
  } else {
    success.style.display = "none";
  }
}

form.addEventListener("submit", formValidation);

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
