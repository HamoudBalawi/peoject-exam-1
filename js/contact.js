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

const urlPost = "https://www.balawi.one/wp-json/contact-form-7/v1/contact-forms"
form.addEventListener("submit", async (event)=>{
event.preventDefault()
const [name,subject, email, ,message] = event.target.elements;
const data = JSON.stringify({
   name: "name.value",
      subject: "subject.value",
       email: "email.value",
        messsage: "message.value"
      })
 console.log(data, "data")

try{
  const response = await fetch(urlPost, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json","Authorization": "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvd3d3LmJhbGF3aS5vbmUiLCJpYXQiOjE2MzM4MDY3MjcsIm5iZiI6MTYzMzgwNjcyNywiZXhwIjoxNjM0NDExNTI3LCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.OFyKbzKBk39g4zQOnNNXht0BxSs2Oz8gqD5UWaCVkqY"},
  })
  const json = await response.json();
  console.log(json);
}catch(error){
  console.error(error)
}
})
