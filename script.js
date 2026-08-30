const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPhone(phone) {
  const phonePattern = /^[\d+()\-\s]{7,20}$/;
  return phonePattern.test(phone) && phone.replace(/\D/g, "").length >= 10;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  if (!emailInput.value.trim() || !isValidEmail(emailInput.value.trim())) {
    alert("Please enter a valid email address.");
    emailInput.focus();
    isValid = false;
    return;
  }

  if (!phoneInput.value.trim() || !isValidPhone(phoneInput.value.trim())) {
    alert("Please enter a valid phone number with at least 10 digits.");
    phoneInput.focus();
    isValid = false;
    return;
  }

  if (isValid) {
    alert("Application submitted successfully!");
    form.reset();
  }
});
