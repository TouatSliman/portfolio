const contactLink = document.getElementById("contact-link");
const close = document.getElementById("close");
contactLink.addEventListener("click", () => {
  const contact = document.getElementById("contact");
  contact.classList.toggle("hidden");
});

close.addEventListener("click", () => {
  const contact = document.getElementById("contact");
  contact.classList.toggle("hidden");
});

const submit = document.getElementById("contact-submit");
submit.classList.add("not-allowed");
submit.disabled = true;
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
name.addEventListener("input", () => {
  if (
    name.checkValidity() &&
    email.checkValidity() &&
    message.checkValidity()
  ) {
    submit.classList.remove("not-allowed");
    submit.disabled = false;
  } else {
    submit.classList.add("not-allowed");
    submit.disabled = true;
  }
});
email.addEventListener("input", () => {
  if (
    name.checkValidity() &&
    email.checkValidity() &&
    message.checkValidity()
  ) {
    submit.classList.remove("not-allowed");
    submit.disabled = false;
  } else {
    submit.classList.add("not-allowed");
    submit.disabled = true;
  }
});
message.addEventListener("input", () => {
  if (
    name.checkValidity() &&
    email.checkValidity() &&
    message.checkValidity()
  ) {
    submit.classList.remove("not-allowed");
    submit.disabled = false;
  } else {
    submit.classList.add("not-allowed");
    submit.disabled = true;
  }
});
